


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
        //list = e.others.sort((a,b) => distance(a, b, e.self));
        list = e.all.sort((a,b) => a.ID - b.ID);
        //list = list.concat(e.treasures.filter(t=>{return t.BNpcID == 2007543}).sort((a,b) => distance(a, b, e.self)));
        let html = '<table border="1"><tr><th>ID</th><th>PosX</th><th>PosY</th><th>Name</th><th>Type</th><th>TargetID</th><th>BNpcID</th><th>BNpcNameID</th><th>CastBuffID</th></tr>';
        list.forEach(t=>{
            html += `<tr><td>${t.ID}</td><td>${Math.floor(t.PosX*100)/100}</td><td>${Math.floor(t.PosY*100)/100}</td>
                <td>${t.Name}</td><td>${t.type}</td><td>${t.TargetID}</td><td>${t.BNpcID}</td><td>${t.BNpcNameID}</td><td>${t.CastBuffID}</td>
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
        isHidden: true
    },
    mounted: function() {
        this.ddManager.webhook = (document.querySelector('#treasure') != null);

        document.addEventListener("onOverlayStateUpdate", function (e) {
            if (!e.detail.isLocked) {
                document.documentElement.classList.add("resizeHandle");
            } else {
                document.documentElement.classList.remove("resizeHandle");
            }
        });
        document.addEventListener("wheel", e =>  {
            this.ddManager.wheel(e);
        });
        addOverlayListener("onAddonExampleEmbeddedTimerFiredEvent", (e) => {
            this.ddManager.updateCombatants(e);
            this.ddManager.draw();
//            let newPosX = Math.floor((e.self.PosX + 1075)/5) / 10.0;
//            let newPosY = Math.floor((e.self.PosY + 1075)/5) / 10.0;
            //debug(e);
            const trapdiv = document.querySelector('#traps');
            var debugDIV = document.querySelector('#debug');
            this.ddManager.currentFloor.treasureList(debugDIV);
            this.ddManager.currentFloor.trapList(trapdiv);
    
            this.ddManager.currentFloor.treasureList2(document.querySelector('#treasure'));
            this.ddManager.currentFloor.trapList2(document.querySelector('#trap'));


            debug2(e);
        });
        
        addOverlayListener("ChangeZone", (e) => {
            this.ddManager.zoneChanged(e);
        });
        
        addOverlayListener("LogLine", (e) => {
            this.ddManager.processLogLine(e);
        });
        startOverlayEvents();
    
    },
    methods: {
    },
    computed: {
        selfPos() {
            return this.ddManager.selfPos;
        }
    }
  })