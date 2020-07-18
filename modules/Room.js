class Room {
    constructor(name, left, top, right, bottom) {
        this.name = name;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.traps = [];
        this.accursedHoards = [];
        this.isActive = false;
    }

    get width() {
        return this.right - this.left;
    }

    get heigth() {
        return this.bottom - this.top;
    }

    get center() {
        return {PosX:(this.left+this.right)/2, PosY:(this.top+this.bottom)/2 };
    }

    containsPos(point) {
        return (this.left < point.PosX && point.PosX < this.right && 
            this.top < point.PosY && point.PosY < this.bottom)
    }

    activate(poss) {
        if (poss.some(p=>this.containsPos(p))) {
            this.isActive = true;
        }
    }

    draw(ctx, origin, scale) {
        if (this.isActive) {
            ctx.save();
            ctx.translate(-origin.PosX, -origin.PosY);
            ctx.fillStyle = "rgba(200, 200, 150, 0.30)";
            ctx.fillRect(this.left, this.top, this.right-this.left, this.bottom-this.top);
            ctx.font = "8px Arial";
            ctx.fillText(this.name ? this.name : '', this.left, this.top-1);
            ctx.restore();

            if (this.traps) {
                this.traps.forEach(t=>{
                    ctx.save();
                    ctx.translate(t.PosX-origin.PosX, t.PosY-origin.PosY);
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
            if (this.accursedHoards) {
                this.accursedHoards.forEach(t=>{
                    ctx.save();
                    ctx.translate(t.PosX-origin.PosX, t.PosY-origin.PosY);
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
            ctx.translate(-origin.PosX, -origin.PosY);
            ctx.fillStyle = "rgba(128, 128, 255, 0.10)";
            ctx.fillRect(this.left, this.top, this.right-this.left, this.bottom-this.top);
            ctx.restore();
        }
    }
}