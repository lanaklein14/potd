class Room {
    constructor(left, top, right, bottom, label, traps, hidden) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.isActive = false;
        this.label = label;
        this.traps = traps;
        this.hidden = hidden;
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