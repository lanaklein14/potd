var imgCairnOfPassage = new Image();
var imgCairnOfReturn = new Image();
var imgExit = new Image();
var imgStairs = new Image();
var imgAccursedHoard = new Image();
var imgGoldCoffer = new Image();
var imgSilverCoffer = new Image();
var imgBronzeCoffer = new Image();
imgCairnOfPassage.src = './images/cairnOfPassage.png';
imgCairnOfReturn.src = './images/cairnOfReturn.png';
imgExit.src = './images/Exit.png';
imgStairs.src = './images/Stairs.png';
imgAccursedHoard.src = './images/AccursedHoard.png';
imgGoldCoffer.src = './images/GoldCoffer.png';
imgSilverCoffer.src = './images/SilverCoffer.png';
imgBronzeCoffer.src = './images/BronzeCoffer.png';




// 
class Floor {
    constructor(zone, floorNumber, changing=false) {
        this.zone = zone;
        this.floorNumber = floorNumber;
        this.changing = changing;
        this.countKill = 0;
        this.passageOk = false;
        this.mobs = [];
        this.treasures = [];
        this.traps = [];
        this.locations = [];
        this.activeRoomNames = new Set();

        this.treasureMap = {};
        this.trapMap = {};
    }
    update(combatants, webhook=false) {
        if (this.changing) {
            return;
        }
        const self = combatants.length > 0 ? combatants[0] : {PosX:0, PosY:0, Heading:0};
        //ActiveRoomsの更新
        var poss = combatants.filter(c => c.Name != null).map(m=>{return {PosX:m.PosX, PosY:m.PosY}});
        this.zone.layout.rooms.filter(r => poss.some(p=>r.containsPos(p))).forEach(r => this.activeRoomNames.add(r.name));
        //Mobsの更新
        this.mobs = combatants.filter(c => c.type == 2 && c.BNpcID != 6388 && c.OwnerID == 0);
        //Treasuresの更新
        this.treasures = combatants.filter(c => 
            //            (c.type == 7 && c.BNpcID == 2007358) || //Gold Coffer
            //            (c.type == 7 && c.BNpcID == 2007357) || //Silver Coffer
            //            (c.type == 4 && c.BNpcID == 782) || //Bronze Coffer
            //            (c.type == 7 && c.BNpcID == 2007543) || //Accursed Hoarded
            (c.Name == "宝箱") || //not treasures //宝箱
            (c.Name == "埋もれた財宝") //not treasures //埋もれた財宝
        );
        this.treasures.forEach(t => {
            if (!this.treasureMap[t.ID]) {
                this.treasureMap[t.ID] = t;
                t.opened = false;
                if (webhook && t.BNpcID == 2007543) {
                    this.webhookAccursedHoard(t);
                }
            }
        });
        Object.values(this.treasureMap).forEach(t => t.distance = Math.abs(t.PosX-self.PosX) + Math.abs(t.PosY-self.PosY));

        //Trapsの更新
        this.traps = combatants.filter(c => c.type == 2 && c.BNpcID == 6388);
        this.traps.forEach(t => {
            if (this.trapMap[t.ID]) {
                //位置情報(0⇒それ以外)のみ上書き
                if (this.trapMap[t.ID].PosX == 0 && t.PosX != 0) {
                    this.trapMap[t.ID].PosX = t.PosX;
                    this.trapMap[t.ID].PosY = t.PosY;
                    this.trapMap[t.ID].PosZ = t.PosZ;
                    if (!this.trapMap[t.ID].treasure && webhook) this.webhookNewTrap(this.trapMap[t.ID]);
                }                
            }
            else {
                this.trapMap[t.ID] = t;
                t.trapType = '';
                if (this.treasureMap[t.ID+1]) {
                    t.treasure = true;
                }
            }
        });

        //Locationsの更新
        this.locations = combatants.filter(c => 
            (c.type == 7 && c.BNpcID == 2007188) || //Cairn Of Passage
            (c.type == 7 && c.BNpcID == 2007187) || //Cairn Of Return
            (c.type == 7 && c.BNpcID == 2005809) || //Exit1
            (c.type == 7 && c.BNpcID == 2006016) || //Exit2
            (c.type == 7 && c.BNpcID == 2006012) //Stairs
        );
        this.locations.forEach(t => t.distance = Math.abs(t.PosX-self.PosX) + Math.abs(t.PosY-self.PosY));

        //trap 7   2007184

    }
    treasureList(node) {
        if (node) {
            let html = '<h3>宝箱</h3><table border="1"><tr><th>ID</th><th>Type</th><th>PosX</th><th>PosY</th><th>Distance</th><th>Opened</th><th>Item</th><th>Comment</th></tr>';
            Object.values(this.treasureMap).sort((a, b) => a.distance - b.distance).forEach(t => {
                html += `<tr><td>${t.ID}</td><td>${t.BNpcID == 2007358 ? '金箱' : 
                                                   t.BNpcID == 2007357 ? '銀箱' : 
                                                   t.BNpcID == 2006020 ? '銅箱' : 
                                                   t.BNpcID == 782 ? '銅箱2' : 
                                                   t.BNpcID == 2007543 ? '埋もれた財宝' : 'それ他'}</td><td>${Math.floor(t.PosX*100)/100}</td><td>${Math.floor(t.PosY*100)/100}</td>
                    <td>${Math.floor(t.distance*100)/100}</td><td>${t.opened == true}</td><td>${t.item ? t.item : ''}</td><td>${t.type} - ${t.BNpcID}</td>
                </tr>`
            });
            html += '</table>'
            node.innerHTML = html;
        }
    }
    trapList(node) {
        if (node) {
            let html = '<h3>トラップ</h3><table border="1"><tr><th>ID</th><th>Type</th><th>PosX</th><th>PosY</th><th>Triggered</th></tr>';
            Object.values(this.trapMap).filter(t => !t.treasure).forEach(t => {
                html += `<tr><td>${t.ID}</td><td>${t.treasure == true ? '箱' : '床'}</td><td>${Math.floor(t.PosX*100)/100}</td><td>${Math.floor(t.PosY*100)/100}</td>
                    <td>${t.trapType ? t.trapType : ''}</td>
                </tr>`
            });
            html += '</table>'
            node.innerHTML = html;
        }
    
    }
    treasureList2(node) {
        if (node) {
            let html = '<table width="100%" border="1"><tr><th>種別</th><th>X</th><th>Y</th><th>距離</th><th>状態</th><th>結果</th></tr>';
            Object.values(this.treasureMap).sort((a, b) => a.distance - b.distance).forEach(t => {
                html += `<tr><td>${t.BNpcID == 2007358 ? '金箱' : 
                                                   t.BNpcID == 2007357 ? '銀箱' : 
                                                   t.BNpcID == 2006020 ? '銅箱' : 
                                                   t.BNpcID == 782 ? '銅箱2' : 
                                                   t.BNpcID == 2007543 ? '財宝' : 'それ他'}</td><td>${Math.floor(t.PosX)}</td><td>${Math.floor(t.PosY)}</td>
                    <td>${Math.floor(t.distance)}</td><td>${t.opened == true ? '開' : '-'}</td><td>${t.item ? t.item : ''}</td></td>
                </tr>`
            });
            html += '</table>'
            node.innerHTML = html;
        }
    }
    trapList2(node) {
        if (node) {
            let html = '<table width="100%" border="1"><tr><th>種別</th><th>X</th><th>Y</th><th>結果</th></tr>';
            Object.values(this.trapMap).filter(t => !t.treasure).forEach(t => {
                html += `<tr><td>${t.treasure == true ? '箱トラップ' : '床トラップ'}</td><td>${Math.floor(t.PosX)}</td><td>${Math.floor(t.PosY)}</td>
                    <td>${t.trapType ? t.trapType : ''}</td>
                </tr>`
            });
            html += '</table>'
            node.innerHTML = html;
        }
    
    }

    webhookNewTrap(t) {
        const payload = {
            content: `トラップ: ${this.zone.title} (${Math.floor(t.PosX*100)/100}, ${Math.floor(t.PosY*100)/100})`
        }
        const url = 'https://discordapp.com/api/webhooks/736365365130559578/ZTukrhhL0SQ2rbNkK3gkj1QJS4wiULOov3mwjF8vMTiqqDcw0xrt45Qe6APV2mmwYNnl';
        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            //mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            //redirect: "follow", // manual, *follow, error
            //referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(payload), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
        })
    }

    webhookAccursedHoard(t) {
        const payload = {
            content: `埋もれた財宝: ${this.zone.title} (${Math.floor(t.PosX*100)/100}, ${Math.floor(t.PosY*100)/100})`
        }
        const url = 'https://discordapp.com/api/webhooks/736365365130559578/ZTukrhhL0SQ2rbNkK3gkj1QJS4wiULOov3mwjF8vMTiqqDcw0xrt45Qe6APV2mmwYNnl';
        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            //mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            //redirect: "follow", // manual, *follow, error
            //referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(payload), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
        })
    }

}

class DDManager {
    constructor() {
        this.currentZone = DDUtility.getZone(-1);
        this.currentFloor = new Floor(this.currentZone, -1);
        this.currentRoomName = '';
        const scale = parseFloat(localStorage.getItem('scale'));
        this._scale = !isNaN(scale) ? scale : 1.2;
        this.self = {PosX:0, PosY:0, Heading:0};
        this.webhook = false;
    }

    static getImage(combatant) {
        if(combatant.BNpcID == 2007188) {
            return imgCairnOfPassage;
        }
        else if (combatant.BNpcID == 2007187) {
            return imgCairnOfReturn;
        }
        else if (combatant.BNpcID == 2005809 || combatant.BNpcID == 2006016) {
            return imgExit;
        }
        else if (combatant.BNpcID == 2006012) {
            return imgStairs;
        }
        else if (combatant.BNpcID == 2007543) {
            return imgAccursedHoard;
        }
        else if (combatant.BNpcID == 2007358) {
            return imgGoldCoffer;
        }
        else if (combatant.BNpcID == 2007357) {
            return imgSilverCoffer;
        }
        else if (combatant.Name == '宝箱') {
            return imgBronzeCoffer;
        }
        return null;
    }

    /**
     * 現在の拡大率を返す。拡大率はwheelイベントで変化
     */
    get scale() {
        return this._scale;
    }

    get header() {
        let header = this.currentZone.title;
        if (this.currentFloor.floorNumber > 0) {
            header += `(B${this.currentFloor.floorNumber}:${this.currentFloor.countKill}${this.currentFloor.passageOk?'転移OK':''})`;
        }
        return header;
    }

    get selfPos() {
        return `${this.currentRoomName}(X:${Math.floor(this.self.PosX)},Y:${Math.floor(this.self.PosY)})`
    }

    floorChanging() {
        const tmp = this.currentFloor.floorNumber + 1;
        this.currentFloor = new Floor(this.currentZone, tmp, true);
    }

    floorChanged(floorNumber) {
        this.currentFloor = new Floor(this.currentZone, floorNumber);
    }

    zoneChanged(e) {
        this.currentZone = DDUtility.getZone(e.zoneID);
        this.floorChanged(this.currentZone.baseFloorNumber);
    }

    wheel(e) {
        if (e.deltaY < 0) { //e.deltaY == -100
            const newScale = this.scale * 1.20;
            this._scale = Math.min(newScale, 3.0);
        }
        else if (e.deltaY > 0) { //e.deltaY == 100
            const newScale = this.scale / 1.20;
            this._scale = Math.max(newScale, 0.8);
        }
        localStorage.setItem('scale', this._scale);
    }

    updateCombatants(e) {
        this.currentFloor.update(e.all, this.webhook);
        this.self = e.self ? e.self : {PosX:0, PosY:0, Heading:0};
        this.currentRoomName = this.currentZone.getCurrentRoomName(this.self);
    }

    draw() {
        let canvas = document.getElementById('canvas');
        if (!canvas || !canvas.getContext) {
            return;   
        }
        canvas.width = document.querySelector("#canvasWrapper").offsetWidth;
        canvas.height = canvas.width;

        var ctx = canvas.getContext('2d');

        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "rgba(128, 128, 255, 0.05)";
        ctx.fillRect(0,0,canvas.width,canvas.height);


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

        this.currentZone.layout.rooms.forEach(r => {
            r.draw(ctx, this.self, this.scale, this.currentFloor.activeRoomNames);
        })
        this.currentZone.layout.passages.forEach(r => {
            r.draw(ctx, this.self, this.currentFloor.activeRoomNames);
        })

    
        this.currentFloor.mobs.filter(m=> m.HPP > 0.0).forEach(m => {
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

        this.currentFloor.traps.forEach(m => {
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
        
        Object.values(this.currentFloor.treasureMap).filter(t => !t.opened).forEach(t => {
            const img = DDManager.getImage(t);
            if (img) {
                ctx.save();
                ctx.translate(t.PosX-this.self.PosX, t.PosY-this.self.PosY);
                ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
                ctx.drawImage(img, -5, -5, 10, 10);
                ctx.restore();
            }
        });

        this.currentFloor.locations.forEach(t => {
            const img = DDManager.getImage(t);
            if (img) {
                ctx.save();
                ctx.translate(t.PosX-this.self.PosX, t.PosY-this.self.PosY);
                ctx.scale(Math.min(2.0/this.scale, 1.0), Math.min(2.0/this.scale, 1.0));
                ctx.drawImage(img, -5, -5, 10, 10);
                ctx.restore();
            }
        });
        ctx.restore();
    }

    processLogLine(e) {
        if (e.line[0] == '00') {
            if (e.line[2] == '0839') {
                var result1 = new RegExp('「死者の宮殿 B(.+)～.+」の攻略を開始した。').exec(e.line[4]);
                var result2 = new RegExp('地下(.+)階').exec(e.line[4])
                var result3 = new RegExp('転移の石塔が起動した！').exec(e.line[4]);
                var result4 = new RegExp('転移が実行された！').exec(e.line[4]);
                var result5 = new RegExp('(.+)はこれ以上、持つことが').exec(e.line[4]);
                const treasureGetMessages = [
                    'は、(.+)を手に入れた！',
                    '輝き、(強化値が.+)になった！',
                    'の(強化に失敗)した',
                    '宝箱は(ミミック)だった！',
                    'トラップが起動し、宝箱が(爆発)した……'
                ];
                if (result1) {
                    console.log(e);
                    this.floorChanged(parseInt(result1[1], 10));
                }
                else if (result2) {
                    console.log(e);
                    this.floorChanged(parseInt(result2[1], 10));
                }
                else if (result3) {
                    console.log(e);
                    this.currentFloor.passageOk = true;
                }
                else if (result4) {
                    console.log(e);
                    this.floorChanging();
                }
                else if (result5) {
                    console.log(e);
                    const nearestTreasure = Object.values(this.currentFloor.treasureMap).filter(t => !t.opened).reduce((a, b) => a.distance < b.distance ? a : b);
                    nearestTreasure.item = result5[1];
                }
                else {
                    for (const msg of treasureGetMessages) {
                        const result = new RegExp(msg).exec(e.line[4]);
                        if (result) {
                            console.log(e);
                            const nearestTreasure = Object.values(this.currentFloor.treasureMap).filter(t => !t.opened).reduce((a, b) => a.distance < b.distance ? a : b);
                            nearestTreasure.opened = true;
                            nearestTreasure.item = result[1];
                            break;
                        }
                    }
                }
            }
            else if (e.line[2] == '083c') {
                var result1 = new RegExp('(.+)を所持しているため、').exec(e.line[4]);
                if (result1) {
                    console.log(e);
                    const unopened4 = Object.values(this.currentFloor.treasureMap).filter(t => t.type == 4 && !t.opened);
                    if (unopened4.length > 0) {
                        const nearestTreasure = unopened4.reduce((a, b) => a.distance < b.distance ? a : b);
                        if (nearestTreasure && nearestTreasure.distance < 10.0 && nearestTreasure.type == 4) {
                            nearestTreasure.opened = true;
                            nearestTreasure.item = result1[1];
                        }                        
                    }
                }
            }
            else if (e.line[2] == '083e') {
                var result1 = new RegExp('は(.+)を手に入れた。').exec(e.line[4]);
                if (result1) {
                    console.log(e);
                    const unopened4 = Object.values(this.currentFloor.treasureMap).filter(t => t.type == 4 && !t.opened);
                    if (unopened4.length > 0) {
                        const nearestTreasure = unopened4.reduce((a, b) => a.distance < b.distance ? a : b);
                        if (nearestTreasure && nearestTreasure.distance < 10.0 && nearestTreasure.type == 4) {
                            nearestTreasure.opened = true;
                            nearestTreasure.item = result1[1];
                        }                        
                    }
                }
            }
            else if (e.line[2] == '0b3a' && e.line[4].match(/.*を倒した。$/)) {
                console.log(e);
                this.currentFloor.countKill += 1;
                //window.callOverlayHandler({ call: 'addonExampleSay', text: e.line[4] })
            }
        }
        else if (e.line[0] == '21' && e.line[3] == 'トラップ') {
            // 21|2020-07-24T22:43:43.1830000+09:00|4000F39C|トラップ|1893|武器強化|E0000000||0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|||||||||||59|59|0|10000|0|1000|-431.1381|303.7211|0.1999984|2.356182|00005657|9c705148be92a9463c487c51845bea54
            console.log(e);
            const targetTrap = this.currentFloor.trapMap[parseInt(e.line[2], 16)];
            targetTrap.trapType = e.line[5];
        }
        else if (e.line[0] == '22' && e.line[3] == 'トラップ') {
            // 22|2020-07-25T07:13:25.8550000+09:00|400001F0|トラップ|1886|阻害トラップ|10251533|Ruruca Ruca|800000E|26C0000|E|70000|1B|18868000|0|0|0|0|0|0|0|0|0|0|159|159|10000|10000|0|1000|-292.0237|303.3113|0|1.467882|44|44|0|10000|0|1000|-291.1757|302.3187|-2.384186E-07|-4.792213E-05|00000068|6f151685c34e1586778ce9fec58c1558
            console.log(e);
            const targetTrap = this.currentFloor.trapMap[parseInt(e.line[2], 16)];
            targetTrap.trapType = e.line[5];
        }
    }

    isDangerMob(bnpcNameID) {
        return this.currentZone.patrolMobNameIDMap.includes(bnpcNameID);
    }
    isMimic(bnpcNameID) {
        return bnpcNameID == 2566; //ミミック
    }
    isPygmaioi(bnpcNameID) {
        return bnpcNameID == 5041; //ピグマイオイ
    }
}
