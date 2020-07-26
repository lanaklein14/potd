
function debug2(e) {
    var debugDIV = document.querySelector('#debug2');
    if (debugDIV) {
        let list = e.all.sort((a,b) => a.ID - b.ID);
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
            this.ddManager.draw(document.querySelector('#canvas'));
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