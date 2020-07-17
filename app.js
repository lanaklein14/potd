class Room {
    constructor(left, top, right, bottom, label, traps, hidden) {
        this.width = right - left;
        this.height = bottom - top;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.isActive = false;
        this.label = label;
        this.traps = traps;
        this.hidden = hidden;
    }
    draw(ctx, self, poss) {
        const index = poss.findIndex(p=>{
            return (this.left < p.PosX && p.PosX < this.right && 
                this.top < p.PosY && p.PosY < this.bottom);
        });
        if (index >= 0) {
            this.isActive = true;
        }

        if (this.isActive) {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(-self.PosX, -self.PosY);
            ctx.fillStyle = "rgba(200, 200, 150, 0.30)";
            ctx.fillRect(this.left, this.top, this.right-this.left, this.bottom-this.top);
            ctx.font = "8px Arial";
            ctx.fillText(this.label ? this.label : '', this.left, this.top-1);
            ctx.restore();

            if (this.traps) {
                this.traps.forEach(t=>{
                    ctx.save();
                    ctx.translate(canvas.width/2, canvas.height/2);
                    ctx.scale(scale, scale);
                    ctx.translate(t.x-self.PosX, t.y-self.PosY);
                    ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
                    ctx.beginPath();
                    ctx.strokeStyle = "#008888FF";
                    ctx.moveTo(-2,-2);
                    ctx.lineTo(2,2);
                    ctx.moveTo(2,-2);
                    ctx.lineTo(-2,2);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.restore();
                });
            }
            if (this.hidden) {
                this.hidden.forEach(t=>{
                    ctx.save();
                    ctx.translate(canvas.width/2, canvas.height/2);
                    ctx.scale(scale, scale);
                    ctx.translate(t.x-self.PosX, t.y-self.PosY);
                    ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
                    ctx.beginPath();
                    ctx.strokeStyle = "#888800FF";
                    ctx.moveTo(0,-3);
                    ctx.lineTo(0,3);
                    ctx.moveTo(3,0);
                    ctx.lineTo(-3,0);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.restore();
                });
            }
        }
        else {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(-self.PosX, -self.PosY);
            ctx.fillStyle = "rgba(128, 128, 255, 0.10)";
            ctx.fillRect(this.left, this.top, this.right-this.left, this.bottom-this.top);
            ctx.restore();
        }
    }
}
class Passage {
    constructor(roomA, roomB) {
        this.roomA = roomA;
        this.roomB = roomB;
        this.horizontal = (this.roomB.left-this.roomA.left) > (this.roomB.top-this.roomA.top);
        this.midX = this.horizontal ?  
            (this.roomA.right+this.roomB.left)/2:
            ((this.roomA.left+this.roomA.right)/2 + (this.roomB.left+this.roomB.right)/2)/2;
        this.midY = this.hirizontal ?
            ((this.roomA.top+this.roomA.bottom)/2 + (this.roomB.top+this.roomB.bottom)/2)/2:
            (this.roomA.bottom+this.roomB.top)/2;
    }
    draw(ctx, self) {
        if (this.roomA.isActive && this.roomB.isActive) {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.beginPath();
            ctx.strokeStyle = "rgba(200, 200, 150, 0.20)";
            ctx.lineWidth = 10;
            if (this.horizontal) {
                ctx.moveTo(this.roomA.right-self.PosX,(this.roomA.bottom+this.roomA.top)/2-self.PosY);
                ctx.lineTo(this.midX-self.PosX,(this.roomA.bottom+this.roomA.top)/2-self.PosY);
                ctx.lineTo(this.midX-self.PosX,(this.roomB.bottom+this.roomB.top)/2-self.PosY);
                ctx.lineTo(this.roomB.left-self.PosX,(this.roomB.bottom+this.roomB.top)/2-self.PosY);
            }
            else {
                ctx.moveTo((this.roomA.right+this.roomA.left)/2-self.PosX,this.roomA.bottom-self.PosY);
                ctx.lineTo((this.roomA.right+this.roomA.left)/2-self.PosX,this.midY-self.PosY);
                ctx.lineTo((this.roomB.right+this.roomB.left)/2-self.PosX,this.midY-self.PosY);
                ctx.lineTo((this.roomB.right+this.roomB.left)/2-self.PosX,this.roomB.top-self.PosY);
            }
            ctx.stroke();
            ctx.closePath();
    ctx.restore();
        }
    }
}


class DDManager {
    constructor() {
        this.inDD = false;
        this.floor = 0;
        this.countKill = 0;
        this.passageOk = false;
        this.zoneID = 0;
        this.rooms = [
            new Room(224, -422, 260, -384, 'A1', [{x:245.67,y:-398.73}/*誘引*/], []),
            new Room(270, -432, 317, -397, 'A2'),
            new Room(370, -422, 406, -386, 'A3', [{x:394.83,y:-398.19}/*誘引*/], []),
            new Room(181, -363, 217, -327, 'A4', [{x:204.62,y:-341.65}], [{x:201.95,y:-343.24}]),
            new Room(235, -363, 271, -327, 'A5', [{x:262.02,y:-336.51},{x:264.34,y:-337.46}/*確定*/], []),
            new Room(295, -375, 329, -340, 'A6', [{x:319.49,y:-350.81},{x:304.98,y:-364.48},{x:321.05,y:-351.13}/*確定*/,{x:310.99,y:-349.19},{x:302.79,y:-353.48}], []),
            new Room(351, -362, 385, -328, 'A7', [{x:373.21,y:-341.7}/*確定*/], []),
            new Room(409, -382, 443, -339, 'A8'),
            new Room(166, -318, 202, -282, 'A9'),
            new Room(225, -305, 259, -270, 'A10', [{x:243.42,y:-286.34},{x:246.14,y:-284.84}/*確定*/], []),
            new Room(283, -317, 317, -282, 'A11', [{x:291.67,y:-294.59},{x:303.13,y:-295.4},{x:306.45,y:-293.39}/*確定*/], []),
            new Room(347, -316, 389, -282, 'A12', [{x:368.32,y:-299.54},{x:371.41,y:-296.06}/*確定*/,{x:376.09,y:-294.09}/*確定*/], []),
            new Room(412, -330, 448, -294, 'A13', [{x:435.32,y:-306.68}/*確定*/], [{x:432,y:-308.33}]),
            new Room(166, -248, 204, -213, 'A14', [{x:190.02,y:-226.07}], []),
            new Room(225, -259, 259, -225, 'A15', [{x:250.88,y:-247.96}/*確定*/], [{x:250.25,y:-248.37}]),
            new Room(283, -259, 317, -225, 'A16', [{x:302.66,y:-239.8}/*確定*/,{x:306.18,y:-238.23}/*確定*/], [{x:300.26,y:-242.39}]),
            new Room(351, -272, 385, -236, 'A17', [{x:364.39,y:-246.14},{x:373.86,y:-248.43}/*確定*/], [{x:372,y:-247.4}]),
            new Room(400, -272, 437, -236, 'A18', [{x:425.37,y:-250.27}/*確定*/], []),
            new Room(225, -204, 259, -162, 'A19', [{x:247.17,y:-183.26}], []),
            new Room(301, -201, 336, -167, 'A20', [{x:325.88,y:-180.53}], []),
            new Room(360, -214, 395, -178, 'A21', [{x:383.46,y:-191.33}], [{x:380.2,y:-192.89}]),

            new Room(-393, 170, -357, 206, 'B1', [{x:-376.71,y:187.8},{x:-373.73,y:189.42}/*確定*/], []),
            new Room(-306, 163, -270, 206, 'B2', [{x:-282.86,y:187.42}], [{x:-287.57,y:183.84}]),
            new Room(-240, 184, -205, 217, 'B3', [{x:-219.06,y:205.65}], []),
            new Room(-419, 227, -383, 261, 'B4', [{x:-399.7,y:-244.82}], []),
            new Room(-372, 227, -338, 261, 'B5', [{x:-353.17,y:245.27}/*確定*/,{x:-354.95,y:245.82},{x:-356.14,y:243.66}], [{x:-356.14,y:243.66}]),
            new Room(-317, 227, -283, 261, 'B6', [{x:-295.47,y:248.96},{x:-300.18,y:245.37}], [{x:-295.47,y:248.96},{x:-300.18,y:245.37}]),
            new Room(-252, 239, -218, 273, 'B7', [{x:-225.38,y:249.28}], []),
            new Room(-201, 238, -156, 274, 'B8', [{x:-178.21,y:259.59}], []),
            new Room(-438, 281, -396, 317, 'B9', [{x:-416.34,y:301.42}], []),
            new Room(-384, 283, -350, 317, 'B10', [{x:-365.37,y:301.63}], [{x:-367.78,y:304.97}]),
            new Room(-317, 279, -283, 320, 'B11', [{x:-309.98,y:296.06},{x:-302.1,y:303.93},{x:-302.5,y:303.78}/*確定*/,{x:-289.83,y:292.46},{x:-291.18,y:302.31}/*確定*/], [{x:-302.1,y:303.93}]),
            new Room(-253, 297, -217, 331, 'B12', [{x:-235.59,y:315.95},{x:-230.82,y:319.39}/*確定*/], [{x:-235.57,y:315.90}]),
            new Room(-199, 292, -163, 335, 'B13', [{x:-178.21,y:317.9}], []),
            new Room(-427, 340, -389, 376, 'B14'),
            new Room(-375, 340, -337, 376, 'B15', [{x:-368.82,y:365.22},{x:-343.97,y:367.27},{x:-340.34,y:352.14}], []),
            new Room(-317, 341, -283, 376, 'B16', [{x:-302.56,y:367.16}/*確定*/,{x:-291.18,y:365.7}/*確定*/], [{x:-302.56,y:367.16}]),
            new Room(-252, 352, -218, 385, 'B17', [{x:-227.97,y:358.83},{x:-229.65,y:375.09}/*地雷*/], [{x:-234.4,y:371.6}]),
            new Room(-197, 352, -163, 388, 'B18', [{x:-178.21,y:373.09}], []),
            new Room(-388, 396, -345, 432, 'B19', [{x:-366.85,y:413.88},{x:-361.88,y:416.74}], [{x:-366.92,y:414.01}]),
            new Room(-338, 398, -302, 433, 'B20', [{x:-315.28,y:418.52}], [{x:-320.02,y:414.94}]),
            new Room(-241, 409, -205, 444, 'B21'),

            new Room(-318, -326, -282, -288, 'C1'),
            new Room(-325, -245, -275, -195, 'C2'),

            new Room(284, 288, 315, 317, 'D1'),
            new Room(275, 349, 324, 398, 'D1'),

            new Room(-123, 81, -78, 118, 'E1'),
        ];
        this.passages = [
            new Passage(this.rooms[0], this.rooms[4]),
            new Passage(this.rooms[1], this.rooms[5]),
            new Passage(this.rooms[2], this.rooms[6]),
            new Passage(this.rooms[3], this.rooms[4]),
            new Passage(this.rooms[4], this.rooms[5]),
            new Passage(this.rooms[5], this.rooms[6]),
            new Passage(this.rooms[6], this.rooms[7]),
            new Passage(this.rooms[4], this.rooms[9]),
            new Passage(this.rooms[5], this.rooms[10]),
            new Passage(this.rooms[6], this.rooms[11]),
            new Passage(this.rooms[8], this.rooms[9]),
            new Passage(this.rooms[11], this.rooms[12]),
            new Passage(this.rooms[9], this.rooms[14]),
            new Passage(this.rooms[10], this.rooms[15]),
            new Passage(this.rooms[11], this.rooms[16]),
            new Passage(this.rooms[13], this.rooms[14]),
            new Passage(this.rooms[14], this.rooms[15]),
            new Passage(this.rooms[16], this.rooms[17]),
            new Passage(this.rooms[14], this.rooms[18]),
            new Passage(this.rooms[15], this.rooms[19]),
            new Passage(this.rooms[16], this.rooms[20]),

            new Passage(this.rooms[21], this.rooms[25]),
            new Passage(this.rooms[22], this.rooms[26]),
            new Passage(this.rooms[23], this.rooms[27]),
            new Passage(this.rooms[24], this.rooms[25]),
            new Passage(this.rooms[25], this.rooms[26]),
            new Passage(this.rooms[26], this.rooms[27]),
            new Passage(this.rooms[27], this.rooms[28]),
            new Passage(this.rooms[25], this.rooms[30]),
            new Passage(this.rooms[26], this.rooms[31]),
            new Passage(this.rooms[27], this.rooms[32]),
            new Passage(this.rooms[29], this.rooms[30]),
            new Passage(this.rooms[30], this.rooms[31]),
            new Passage(this.rooms[31], this.rooms[32]),
            new Passage(this.rooms[32], this.rooms[33]),
            new Passage(this.rooms[31], this.rooms[36]),
            new Passage(this.rooms[32], this.rooms[37]),
            new Passage(this.rooms[34], this.rooms[35]),
            new Passage(this.rooms[35], this.rooms[36]),
            new Passage(this.rooms[36], this.rooms[37]),
            new Passage(this.rooms[37], this.rooms[38]),
            new Passage(this.rooms[35], this.rooms[39]),
            new Passage(this.rooms[36], this.rooms[40]),
            new Passage(this.rooms[37], this.rooms[41]),
        ];
        this.trapPredictions = [];
    }

    updateHeader() {
        const header = document.querySelector('#ddHeader');
        if (this.inDD) {
            let textOk = ''
            if (this.passageOk) {
                textOk = ' - 転移OK';
                header.classList.add('passageok');
            }
            else {
                header.classList.remove('passageok');
            }
            header.textContent = `死者の宮殿 B${this.floor}F:${this.countKill}${textOk}`
        }
        else {
            header.textContent = `死者の宮殿の外 (Zone:${this.zoneID})`;
        }
    }

    moveFloor(floor) {
        ddManager.floor = floor;
        ddManager.countKill = 0;
        ddManager.passageOk = false;
        ddManager.rooms.forEach(r => {r.isActive = false});
    }

    draw(e) {
        let canvas = document.getElementById('canvas');
        canvas.width = document.querySelector("#canvasWrapper").offsetWidth;
        canvas.height = canvas.width;
        if (!canvas.getContext) {
            return;   
        }
        var self = e.self;

        var poss = e.mobs.map(m=>{return {PosX:m.PosX, PosY:m.PosY}});
        poss = poss.concat(e.treasuresGold.map(m=>{return {PosX:m.PosX, PosY:m.PosY}}));
        poss = poss.concat(e.treasuresSilver.map(m=>{return {PosX:m.PosX, PosY:m.PosY}}));
        poss = poss.concat(e.treasuresBronze.map(m=>{return {PosX:m.PosX, PosY:m.PosY}}));
        if (e.self) {
            poss.push({PosX:self.PosX, PosY:self.PosY});
        }
        if (e.cairnOfPassage) {
            poss.push({PosX:e.cairnOfPassage.PosX, PosY:e.cairnOfPassage.PosY});
        }
        if (e.cairnOfReturn) {
            poss.push({PosX:e.cairnOfReturn.PosX, PosY:e.cairnOfReturn.PosY});
        }

        var ctx = canvas.getContext('2d');

        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "rgba(128, 128, 255, 0.05)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(scale, scale);
        ctx.fillStyle = "rgba(0, 0, 255, 0.15)";
        ctx.fillRect(-110, -110, 220, 220);
        ctx.fillStyle = "rgba(255, 255, 64, 0.30)";
        ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0+1.0-self.Heading, Math.PI-1.0-self.Heading);
        ctx.lineTo(0,0);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        this.rooms.forEach(r => {
            r.draw(ctx, self, poss);
        })

        this.passages.forEach(r => {
            r.draw(ctx, self);
        })

        e.mobs.filter(m=>{return m.HPP > 0.0}).forEach(m => {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(m.PosX-self.PosX, m.PosY-self.PosY);
            if (ddManager.isMimic(m.BNpcNameID)) {
                ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
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
            else if (ddManager.isPygmaioi(m.BNpcNameID)) {
                ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
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
            else if (ddManager.isDangerMob(m.BNpcNameID)) {
                ctx.scale(Math.min(1.5/scale, 1.0), Math.min(1.5/scale, 1.0));
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
                ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
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
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(m.PosX-self.PosX, m.PosY-self.PosY);
            ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
            ctx.beginPath();
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
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(e.cairnOfReturn.PosX-self.PosX, e.cairnOfReturn.PosY-self.PosY);
            ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
            ctx.drawImage(imgCairnOfReturn, -5, -5, 10, 10);
            ctx.closePath();
            ctx.restore();
        }

        e.treasuresGold.forEach(m => {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(m.PosX-self.PosX, m.PosY-self.PosY);
            ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
            ctx.drawImage(imgTresureGold, -5, -5, 10, 10);
            ctx.closePath();
            ctx.restore();
        });

        e.treasuresSilver.forEach(m => {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(m.PosX-self.PosX, m.PosY-self.PosY);
            ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
            ctx.drawImage(imgTresureSilver, -5, -5, 10, 10);
            ctx.closePath();
            ctx.restore();
        });

        e.treasuresBronze.forEach(m => {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(m.PosX-self.PosX, m.PosY-self.PosY);
            ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
            ctx.drawImage(imgTresureBronze, -5, -5, 10, 10);
            ctx.closePath();
            ctx.restore();
        });

        if (e.cairnOfPassage) {
            ctx.save();
            ctx.translate(canvas.width/2, canvas.height/2);
            ctx.scale(scale, scale);
            ctx.translate(e.cairnOfPassage.PosX-self.PosX, e.cairnOfPassage.PosY-self.PosY);
            ctx.scale(Math.min(2.0/scale, 1.0), Math.min(2.0/scale, 1.0));
            ctx.drawImage(imgCairnOfPassage, -5, -5, 10, 10);
            ctx.closePath();
            ctx.restore();
        }

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
let ddManager = new DDManager();

var scale = 1.2;
var imgCairnOfPassage = new Image();
var imgCairnOfReturn = new Image();
var imgTresureGold = new Image();
var imgTresureSilver = new Image();
var imgTresureBronze = new Image();
imgCairnOfPassage.src = 'https://raw.githubusercontent.com/lanaklein14/lanaklein14.github.io/master/images/cairnOfPassage.png';
imgCairnOfReturn.src = 'https://raw.githubusercontent.com/lanaklein14/lanaklein14.github.io/master/images/cairnOfReturn.png';
imgTresureGold.src = 'https://raw.githubusercontent.com/lanaklein14/lanaklein14.github.io/master/images/treasureGold.png';
imgTresureSilver.src = 'https://raw.githubusercontent.com/lanaklein14/lanaklein14.github.io/master/images/treasureSilver.png';
imgTresureBronze.src = 'https://raw.githubusercontent.com/lanaklein14/lanaklein14.github.io/master/images/treasureBronze.png';
var count = 0;
// CombatData イベントを購読

addOverlayListener("onAddonExampleEmbeddedTimerFiredEvent", (e) => {
    debug(e);
    ddManager.draw(e);
    let newPosX = Math.floor((e.self.PosX + 1075)/5) / 10.0;
    let newPosY = Math.floor((e.self.PosY + 1075)/5) / 10.0;
    document.querySelector("#ddFooter").textContent = 
    `不明なトラップの数：${e.traps.filter(t=>{return t.PosX == 0.0}).length} (X:${newPosX}, Y:${newPosY})`
});

addOverlayListener("ChangeZone", (e) => {
    ddManager.zoneID = e.zoneID;
    if ([561, 562, 563, 564, 565, 593, 594, 595, 596, 597,
         598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 570].includes(ddManager.zoneID)) {
        ddManager.inDD = true;
        ddManager.floor = 0;
        ddManager.countKill = 0;
        ddManager.passageOk = false;
        ddManager.trapPredictions = [];
    }
    else {
        ddManager.inDD = false;
        ddManager.floor = 0;
        ddManager.countKill = 0;
        ddManager.passageOk = false;
        ddManager.trapPredictions = [];
    }
    ddManager.updateHeader();
});

addOverlayListener("LogLine", (e) => {
    if (e.line[0] == '00' && e.line[2] == '0839') {
        var result1 = new RegExp('「死者の宮殿 B(.+)～.+」の攻略を開始した。').exec(e.line[4]);
        var result2 = new RegExp('地下(.+)階').exec(e.line[4])
        var result3 = new RegExp('転移の石塔が起動した！').exec(e.line[4]);

        if (result1) {
            ddManager.moveFloor(parseInt(result1[1], 10));
        }
        else if (result2) {
            ddManager.moveFloor(parseInt(result2[1], 10));
        }
        else if (result3) {
            ddManager.passageOk = true;
        }
        ddManager.updateHeader();
    }
    else if (e.line[0] == '00' && e.line[2] == '0b3a' && e.line[4].match(/.*を倒した。$/)) {
        ddManager.countKill += 1;
        ddManager.updateHeader();
    }
});
startOverlayEvents();

document.addEventListener("wheel", function(e) {
    if (e.deltaY == -100) {
        scale *= 1.20;
        scale = Math.min(scale, 3.0);
    }
    else if (e.deltaY == 100) {
        scale /= 1.20;
        scale = Math.max(scale, 0.8);
    }
});
function debug(e) {
    var debugDIV = document.querySelector('#debug');
    if (debugDIV) {
        function distance(a, b, self) {
            if (self) {
                let dA = Math.abs(a.PosX-self.PosX)+Math.abs(a.PosY-self.PosY);
                let dB = Math.abs(b.PosX-self.PosX)+Math.abs(b.PosY-self.PosY);
                return dA - dB;
            }
            return 0;
        }
        let posX = 0;
        let posy = 0;
        if (e.self) {
            posx = e.self.PosX;
            posy = e.self.PosY;
        }
        let list = e.traps.filter(t=>{return t.PosX != 0}).sort((a,b) => distance(a, b, e.self));
        list = list.concat(e.treasuresBronze.filter(t=>{return t.BNpcID == 2007543}).sort((a,b) => distance(a, b, e.self)));
        let html = '<table border="1"><tr><th>ID</th><th>PosX</th><th>PosY</th><th>Name</th><th>TargetID</th><th>BNpcNameID</th><th>CastBuffID</th></tr>';
        list.forEach(t=>{
            html += `<tr><td>${t.ID}</td><td>${Math.floor(t.PosX*100)/100}</td><td>${Math.floor(t.PosY*100)/100}</td>
                <td>${t.Name}</td><td>${t.TargetID}</td><td>${t.BNpcNameID}</td><td>${t.CastBuffID}</td>
            </tr>`
        });
        html += '</table>'
        debugDIV.innerHTML = html;
    }

}



const app = new Vue({
    el: '#app',
    data: {
      tasks: [
        { text: 'Learn JavaScript', editable: false},
        { text: 'Learn Vue' ,  editable: false},
        { text: 'Build todo list', editable: false},
      ],
      newTaskName: '',
    },
    mounted: function() {
        document.addEventListener("onOverlayStateUpdate", function (e) {
            if (!e.detail.isLocked) {
                document.documentElement.classList.add("resizeHandle");
            } else {
                document.documentElement.classList.remove("resizeHandle");
            }
        });
    
    
    },
    methods: {
      addTask: function () {
        this.tasks.push({ text: this.newTaskName, editable: false})
        this.newTaskName = ''
      },
      deleteTask: function (index) {
        this.tasks.splice(index, 1)
      },
      editTask: function (index, text) {
        this.tasks[index].text = text
        this.tasks[index].editable = false
      },
      makeTaskEditable: function (index) {
        this.tasks[index].editable = true
      },
    }
  })