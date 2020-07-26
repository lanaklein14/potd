class Layout {
    constructor(rooms = []) {
        this.rooms = rooms;
        this.passages = [];
    }
    addPassage(roomAId, roomBId) {
        const roomA = this.rooms.find(r=>r.name==roomAId);
        const roomB = this.rooms.find(r=>r.name==roomBId);
        if (roomA && roomB) {
            this.passages.push(new Passage(roomA, roomB));
        }
        else {
            if (!roomA) { console.warn(`room ${roomAId} not found`); }
            if (!roomB) { console.warn(`room ${roomBId} not found`); }
        }
    }
    addTrap(x, y) {
        const pos = {PosX: x, PosY: y};
        const room = this.rooms.find(r=>r.containsPos(pos));
        if (room) {
            room.traps.push(pos);
        }
        else {
            console.warn(`trap pos(${x}, ${y}) is out of range`);
        }
    }
    addAccursedHoard(x, y) {
        const pos = {PosX: x, PosY: y};
        const room = this.rooms.find(r=>r.containsPos(pos));
        if (room) {
            room.accursedHoards.push(pos);
        }
        else {
            console.warn(`accursed hoard pos(${x}, ${y}) is out of range`);
        }
    }
    draw(ctx, origin, scale) {
        this.rooms.forEach(r=>r.draw(ctx, origin, scale));
        this.passages.forEach(r=>r.draw(ctx, origin));
    }
    concat(anotherLayout) {
        const layout = new Layout();
        layout.rooms = this.rooms.concat(anotherLayout.rooms);
        layout.passages = this.passages.concat(anotherLayout.passages);
        return layout;
    }
}

class BossFloorLayout extends Layout {
    constructor(rooms) {
        super(rooms);
        if (this.rooms.length >= 2) {
            this.passages.push(new Passage(this.rooms[0], this.rooms[1]));
        }
        
    }
}