

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
// CombatData イベントを購読



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
        let list = [];//e.traps.filter(t=>{return t.PosX != 0}).sort((a,b) => distance(a, b, e.self));
        list = e.treasures.sort((a,b) => distance(a, b, e.self));
        //list = list.concat(e.treasures.filter(t=>{return t.BNpcID == 2007543}).sort((a,b) => distance(a, b, e.self)));
        let html = '<table border="1"><tr><th>ID</th><th>PosX</th><th>PosY</th><th>Name</th><th>Type</th><th>TargetID</th><th>BNpcID</th><th>BNpcNameID</th><th>CastBuffID</th><th>Comment</th></tr>';
        list.forEach(t=>{
            html += `<tr><td>${t.ID}</td><td>${Math.floor(t.PosX*100)/100}</td><td>${Math.floor(t.PosY*100)/100}</td>
                <td>${t.Name}</td><td>${t.type}</td><td>${t.TargetID}</td><td>${t.BNpcID}</td><td>${t.BNpcNameID}</td><td>${t.CastBuffID}</td>
                <td>${t.BNpcID == 2007358 ? '金箱' : t.BNpcID == 2007357 ? '銀箱' : 'それ他'}</td>
            </tr>`
        });
        html += '</table>'
        debugDIV.innerHTML = html;
    }

}

function debug2(e) {
    var debugDIV = document.querySelector('#debug2');
    if (debugDIV) {
        function distance(a, b, self) {
            if (self) {
                let dA = Math.abs(a.PosX-self.PosX)+Math.abs(a.PosY-self.PosY);
                let dB = Math.abs(b.PosX-self.PosX)+Math.abs(b.PosY-self.PosY);
                return dA - dB;
            }
            return 0;
        }
        let list = [];//e.traps.filter(t=>{return t.PosX != 0}).sort((a,b) => distance(a, b, e.self));
        list = e.others.sort((a,b) => distance(a, b, e.self));
        //list = list.concat(e.treasures.filter(t=>{return t.BNpcID == 2007543}).sort((a,b) => distance(a, b, e.self)));
        let html = '<table border="1"><tr><th>ID</th><th>PosX</th><th>PosY</th><th>Name</th><th>Type</th><th>TargetID</th><th>BNpcID</th><th>BNpcNameID</th><th>CastBuffID</th></tr>';
        list.forEach(t=>{
            html += `<tr><td>${t.ID}</td><td>${Math.floor(t.PosX*100)/100}</td><td>${Math.floor(t.PosY*100)/100}</td>
                <td>${t.Name}</td><td>${t.type}</td><td>${t.TargetID}</td><td>${t.BNpcID}</td><td>${t.BNpcNameID}</td><td>${t.CastBuffID}</td>
                <td></td>
            </tr>`
        });
        html += '</table>'
        debugDIV.innerHTML = html;
    }

}

const app = new Vue({
    el: '#app',
    data: {
        ddManager: new DDManager(),
    },
    mounted: function() {
        document.addEventListener("onOverlayStateUpdate", function (e) {
            if (!e.detail.isLocked) {
                document.documentElement.classList.add("resizeHandle");
            } else {
                document.documentElement.classList.remove("resizeHandle");
            }
        });
        document.addEventListener("wheel", e =>  {
            if (e.deltaY == -100) {
                this.ddManager.scale *= 1.20;
                this.ddManager.scale = Math.min(this.ddManager.scale, 3.0);
            }
            else if (e.deltaY == 100) {
                this.ddManager.scale /= 1.20;
                this.ddManager.scale = Math.max(this.ddManager.scale, 0.8);
            }
        });
        addOverlayListener("onAddonExampleEmbeddedTimerFiredEvent", (e) => {
            this.ddManager.draw(e);
//            let newPosX = Math.floor((e.self.PosX + 1075)/5) / 10.0;
//            let newPosY = Math.floor((e.self.PosY + 1075)/5) / 10.0;
            debug(e);
            debug2(e);
            let encounter = document.querySelector("#encounter");
            if (encounter) {
                encounter.innerText = JSON.stringify(e.others, null, 4);
            }
        });
        
        addOverlayListener("ChangeZone", (e) => {
            this.ddManager.zoneChanged(e.zoneID);
        });
        
        addOverlayListener("LogLine", (e) => {
            if (e.line[0] == '00' && e.line[2] == '0839') {
                var result1 = new RegExp('「死者の宮殿 B(.+)～.+」の攻略を開始した。').exec(e.line[4]);
                var result2 = new RegExp('地下(.+)階').exec(e.line[4])
                var result3 = new RegExp('転移の石塔が起動した！').exec(e.line[4]);
                var result4 = new RegExp('転移が実行された！').exec(e.line[4]);
        
                if (result1) {
                    this.ddManager.floorChanged(parseInt(result1[1], 10));
                }
                else if (result2) {
                    this.ddManager.floorChanged(parseInt(result2[1], 10));
                }
                else if (result3) {
                    this.ddManager.passageOk = true;
                }
                else if (result4) {
                    this.ddManager.floorChanging();
                }
            }
            else if (e.line[0] == '00' && e.line[2] == '0b3a' && e.line[4].match(/.*を倒した。$/)) {
                this.ddManager.countKill += 1;
            }
        });
        startOverlayEvents();
    
    },
    methods: {
    },
    computed: {
        selfPos() {
            return `(X:${Math.floor(this.ddManager.self.PosX)}, Y:${Math.floor(this.ddManager.self.PosY)})`
        }
    }
  })