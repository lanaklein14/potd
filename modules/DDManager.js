

class DDManager {
    constructor() {
        this.inDD = false;
        this.baseFloor = 0;
        this.floor = 0;
        this.countKill = 0;
        this.passageOk = false;
        this.zoneID = 0;
        this.rooms = []
        this.passages = []
        this.trapPredictions = [];
        this.layout = null;
        this.scale = 2.0;
        this.self = {PosX:0, PosY:0, Heading:0};
    }

    get header() {
        if (!this.inDD) {
            return `死者の宮殿の外 (Zone:${this.zoneID})`;
        }
        let header = '死者の宮殿'
        if (this.baseFloor>0) {
            header += ` B${this.baseFloor}-B${this.baseFloor+9}`;
        }
        if (this.floor>0) {
            header += `(B${this.floor}:${this.countKill}${this.passageOk?' - 転移OK':''})`;
        }
        return header;
    }

    floorChanging() {
        this.floor+=1;
        this.countKill = 0;
        this.passageOk = false;
        this.rooms.forEach(r => {r.isActive = false});
    }

    floorChanged(floor) {
        this.floor = floor;
        this.countKill = 0;
        this.passageOk = false;
        this.rooms.forEach(r => {r.isActive = false});
    }

    zoneChanged(zoneID) {
        this.zoneID = zoneID;
        const zoneData = DDUtility.zoneData(this.zoneID);
        if (zoneData) {
            this.inDD = true;
            this.baseFloor = zoneData.baseFloor;
            this.rooms = zoneData.layout.rooms;
            this.passages = zoneData.layout.passages;
            this.floorChanged(this.baseFloor);
        }
        else {
            this.inDD = false;
            this.floor = 0;
            this.countKill = 0;
            this.passageOk = false;
        }
    }

    draw(e) {
        let canvas = document.getElementById('canvas');
        canvas.width = document.querySelector("#canvasWrapper").offsetWidth;
        canvas.height = canvas.width;
        if (!canvas.getContext) {
            return;   
        }

        var poss = e.mobs.map(m=>{return {PosX:m.PosX, PosY:m.PosY}});
        poss = poss.concat(e.treasuresGold.map(m=>{return {PosX:m.PosX, PosY:m.PosY}}));
        poss = poss.concat(e.treasuresSilver.map(m=>{return {PosX:m.PosX, PosY:m.PosY}}));
        poss = poss.concat(e.treasuresBronze.map(m=>{return {PosX:m.PosX, PosY:m.PosY}}));
        if (e.self) {
            poss.push({PosX:e.self.PosX, PosY:e.self.PosY});
        }
        if (e.cairnOfPassage) {
            poss.push({PosX:e.cairnOfPassage.PosX, PosY:e.cairnOfPassage.PosY});
        }
        if (e.cairnOfReturn) {
            poss.push({PosX:e.cairnOfReturn.PosX, PosY:e.cairnOfReturn.PosY});
        }
        this.rooms.forEach(r=>r.activate(poss));

        var ctx = canvas.getContext('2d');

        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "rgba(128, 128, 255, 0.05)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.self = e.self ? e.self : {PosX:0, PosY:0, Heading:0};

        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(this.scale, this.scale);

        ctx.fillStyle = "rgba(0, 0, 255, 0.15)";
        ctx.fillRect(-110, -110, 220, 220);
        ctx.fillStyle = "rgba(255, 255, 64, 0.30)";

        ctx.save();
        ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0+1.0-this.self.Heading, Math.PI-1.0-this.self.Heading);
        ctx.lineTo(0,0);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        this.rooms.forEach(r => {
            r.draw(ctx, this.self, this.scale);
        })
        this.passages.forEach(r => {
            r.draw(ctx, this.self);
        })

        e.mobs.filter(m=>{return m.HPP > 0.0}).forEach(m => {
            ctx.save();
            ctx.translate(m.PosX-this.self.PosX, m.PosY-this.self.PosY);
            if (this.isMimic(m.BNpcNameID)) {
                ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255, 135, 15, 1.0)";
                ctx.moveTo(0,-5);
                ctx.lineTo(0,1);
                ctx.moveTo(0,3);
                ctx.lineTo(0,5);
                ctx.stroke();
                ctx.closePath();
            }
            else if (this.isPygmaioi(m.BNpcNameID)) {
                ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.strokeStyle = "rgba(181, 88, 231, 1.0)";
                ctx.moveTo(0,-5);
                ctx.lineTo(0,1);
                ctx.moveTo(0,3);
                ctx.lineTo(0,5);
                ctx.stroke();
                ctx.closePath();
            }
            else if (this.isDangerMob(m.BNpcNameID)) {
                ctx.scale(Math.min(1.5/this.scale, 1.0), Math.min(1.5/this.scale, 1.0));
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
                ctx.arc(0, 0, 12, 0+1.0-m.Heading, Math.PI-1.0-m.Heading);
                ctx.lineTo(0,0);
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 0, 0, 1.0)";
                ctx.arc(0, 0, 5, 0, Math.PI*2, 0);
                ctx.fill();
                ctx.closePath();
            }
            else {
                ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
                ctx.beginPath();
                ctx.fillStyle = "rgba(0, 255, 0, 1.0)";
                ctx.arc(0, 0, 2, 0, Math.PI*2, 0);
                ctx.fill();
                ctx.closePath();
            }
            ctx.restore();
        });

        e.traps.filter(t=>{return t.PosX != 0.0}).forEach(m => {
            ctx.save();
            ctx.translate(m.PosX-this.self.PosX, m.PosY-this.self.PosY);
            ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#000000AA";
            ctx.moveTo(-2,-2);
            ctx.lineTo(2,2);
            ctx.moveTo(2,-2);
            ctx.lineTo(-2,2);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        });

        if (e.cairnOfReturn) {
            ctx.save();
            ctx.translate(e.cairnOfReturn.PosX-this.self.PosX, e.cairnOfReturn.PosY-this.self.PosY);
            ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
            ctx.drawImage(imgCairnOfReturn, -5, -5, 10, 10);
            ctx.restore();
        }

        e.treasures.forEach(t => {
            ctx.save();
            ctx.translate(t.PosX-this.self.PosX, t.PosY-this.self.PosY);
            ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
            if (t.BNpcID == 2007358) { //Gold
                ctx.drawImage(imgTresureGold, -5, -5, 10, 10);
            }
            else if (t.BNpcID == 2007357) { //Silver
                ctx.drawImage(imgTresureSilver, -5, -5, 10, 10);
            }
            else { //Bronze or Accursed (Bronze == 2006020(mimic))
                ctx.drawImage(imgTresureBronze, -5, -5, 10, 10);
            }
            ctx.restore();
        });
/*
        e.treasuresGold.forEach(m => {
            ctx.save();
            ctx.translate(m.PosX-this.self.PosX, m.PosY-this.self.PosY);
            ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
            ctx.drawImage(imgTresureGold, -5, -5, 10, 10);
            ctx.restore();
        });

        e.treasuresSilver.forEach(m => {
            ctx.save();
            ctx.translate(m.PosX-this.self.PosX, m.PosY-this.self.PosY);
            ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
            ctx.drawImage(imgTresureSilver, -5, -5, 10, 10);
            ctx.restore();
        });

        e.treasuresBronze.forEach(m => {
            ctx.save();
            ctx.translate(m.PosX-this.self.PosX, m.PosY-this.self.PosY);
            ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
            ctx.drawImage(imgTresureBronze, -5, -5, 10, 10);
            ctx.restore();
        });
*/
        if (e.cairnOfPassage) {
            ctx.save();
            ctx.translate(e.cairnOfPassage.PosX-this.self.PosX, e.cairnOfPassage.PosY-this.self.PosY);
            ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
            ctx.drawImage(imgCairnOfPassage, -5, -5, 10, 10);
            ctx.restore();
        }
        ctx.restore();

    }

    isDangerMob(bnpcNameID) {
        // モブ名⇒ID https://xivapi.com/search?indexes=BnpcName&string_column=Name_ja&string_algo=term&columns=ID,Name_ja&string=%E3%83%87%E3%82%A3%E3%83%BC%E3%83%97%E3%83%91%E3%83%AC%E3%82%B9%E3%83%BB%E3%82%AD%E3%83%BC%E3%83%91%E3%83%BC
        const dangerMobNameIDMap = {
            561: [ //B1 - B10
                4983, //パレス・ジズ
                4984, //ロストゴブリン
                4985, //パレス・ダングビートル
            ],
            562: [ //B11 - B20
                4996, //パレス・プリン
                4997, //パレス・コブラ
                4998, //パレス・ビロコ
            ],
            563: [ //B21 - B30
                5009, //パレス・デュラハン
                5010, //パレス・ミノタウロス
                5011, //パレス・スカネテ
            ],
            564: [ //B31 - B40
                5022, //ナイトメア・サキュバス
                5023, //ナイトメア・カトブレパス
                5024, //パレス・グルマン
            ],
            565: [ //B41 - B50
                5035, //パレス・マンティコア
                5354, //パレス・レイス
                5355, //パレス・グレイブキーパー
            ],
            593: [ //B51 - B60
                5302, //パレス・アヌビス
                5307, //パレス・マナアイドル
                5305, //パレス・アークデーモン
            ],
            594: [ //B61 - B70
                5317, //パレス・エルブスト
                5319, //パレス・ブレードビネガロン
                5316, //パレス・ミロドン
            ],
            595: [ //B71 - B80
                5331, //パレス・アンズー
                5325, //パレス・サイクロプス
                5324, //バード・オブ・パレス
            ],
            596: [ //B81 - B90
                5343, //パレス・ワモーラ
                5342, //パレス・ハパリット
                5344, //パレス・キマイラ
            ],
            597: [ //B91 - B100
                5354, //パレス・レイス
                5353, //パレス・アイアンコース
                5355, //パレス・グレイブキーパー
            ],
            598: [ //B101 - B110
                5368, //ディープパレス・ジズ
                5369, //ゴブリン・アドベンチャラー
                5370, //ディープパレス・ダングビートル
            ],
            599: [ //B111 - B120
                5374, //ディープパレス・ギガントード
                5382, //ディープパレス・コブラ
                5383, //ディープパレス・ビロコ
            ],
            600: [ //B121 - B130
                5394, //ディープパレス・デュラハン
                5395, //ディープパレス・ミノタウルス
                5396, //ディープパレス・スカネテ
            ],
            601: [ //B131 - B140
                5409, //ディープパレス・グルマン
                5402, //ディープパレス・アーリマン
                5408, //ディープパレス・カトブレパス
            ],
            602: [ //B141 - B150
                5421, //ディープパレス・マンティコア
                5422, //ディープパレス・レイス
                5423, //ディープパレス・キーパー
            ],
            603: [ //B151 - B160
                5432, //ディープパレス・シュワブチ
                5436, //ディープパレス・マロリス
                5434, //ディープパレス・アークデーモン
            ],
            604: [ //B161 - B170
                5445, //ディープパレス・トゥルスス
                5447, //ディープパレス・ビネガロン
                5448, //ディープパレス・プテラノドン
            ],
            605: [ //B171 - B180
                5453, //ディープパレス・スノウクロプス
                5451, //ディープパレス・ウィセント
                5452, //バード・オブ・ディープパレス
            ],
            606: [ //B181 - B190
                5469, //ディープパレス・ワモーラ
                5470, //ディープパレス・ガルム
                5468, //ディープパレス・ヴィンドスルス
            ],
            607: [ //B191 - B200
                5475, //ディープパレス・アイアンコース
                5473, //ディープパレス・ファハン
                5423, //ディープパレス・キーパー
            ]
        }
        return dangerMobNameIDMap[this.zoneID] ? dangerMobNameIDMap[this.zoneID].includes(bnpcNameID) : false;
    }
    isMimic(bnpcNameID) {
        return bnpcNameID == 2566; //ミミック
    }
    isPygmaioi(bnpcNameID) {
        return bnpcNameID == 5041; //ピグマイオイ
    }
}
