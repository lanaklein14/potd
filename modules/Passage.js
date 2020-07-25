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
    draw(ctx, origin, activeRoomNames=null) {
        if (activeRoomNames == null || 
            (activeRoomNames.has(this.roomA.name) && activeRoomNames.has(this.roomB.name))) {
        //if (this.roomA.isActive && this.roomB.isActive) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(200, 200, 150, 0.20)";
            ctx.lineWidth = 10;
            if (this.horizontal) {
                ctx.moveTo(this.roomA.right-origin.PosX,(this.roomA.bottom+this.roomA.top)/2-origin.PosY);
                ctx.lineTo(this.midX-origin.PosX,(this.roomA.bottom+this.roomA.top)/2-origin.PosY);
                ctx.lineTo(this.midX-origin.PosX,(this.roomB.bottom+this.roomB.top)/2-origin.PosY);
                ctx.lineTo(this.roomB.left-origin.PosX,(this.roomB.bottom+this.roomB.top)/2-origin.PosY);
            }
            else {
                ctx.moveTo((this.roomA.right+this.roomA.left)/2-origin.PosX,this.roomA.bottom-origin.PosY);
                ctx.lineTo((this.roomA.right+this.roomA.left)/2-origin.PosX,this.midY-origin.PosY);
                ctx.lineTo((this.roomB.right+this.roomB.left)/2-origin.PosX,this.midY-origin.PosY);
                ctx.lineTo((this.roomB.right+this.roomB.left)/2-origin.PosX,this.roomB.top-origin.PosY);
            }
            ctx.stroke();
            ctx.closePath();
        }
    }
}