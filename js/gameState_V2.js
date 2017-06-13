class GameState {
    constructor() {
        this.i = { blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: 'cyan'   };
        this.j = { blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: 'blue'   };
        this.l = { blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: 'orange' };
        this.o = { blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: 'yellow' };
        this.s = { blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: 'green'  };
        this.t = { blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: 'purple' };
        this.z = { blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: 'red'    };

        this.board = { nx: 10, xy: 20, nu: 5 }
        this.speed = { start: 0.6, decrement: 0.005, min: 0.1 }

        this.pieces = [];
        this.invalid = {};

        this.dx, this.dy, 
        this.blocks,
        this.actions,
        this.playing,
        this.dt,
        this.current,
        this.next,
        this.score,
        this.rows,
        this.step;    
    }
    //iterates over all of the cells in the tetris grid that the piece will occupy
    eachblock(blockType, x, y, dir, fn){
        var bit, result, row = 0, col = 0, blocks = blockType.blocks[dir];
        for(bit = 0x8000; bit > 0; bit = bit >>1) {
            if (blocks & bit) {
                fn(x + col, y + row);
            }
            if (++col === 4){
                col = 0; 
                ++row;
            }
        }
    }

    //Checks movement left, right, and down to verify it is valid
    occupied(blockType, x, y, dir) {
        var result = false;
        this.eachBlock(type, x, y, dir, function(x, y){
            if((x < 0) || (x >=nx) || (y < 0) || (y >= ny) || this.getBlock(x, y))
                result = true;       
        });
        return result;
    }

    //This is what provides with the pieces. 
    //Selecting pieces at random could lead to long droughts. 
    //Selecting from four of each of the pieces, and removing the selection at random
        //reduces droughts, and repeats
    randomPiece(){
        if (pieces.length == 0)
            pieces = [i,i,i,i,j,j,j,j,l,l,l,l,o,o,o,o,s,s,s,s,t,t,t,t,z,z,z,z];
        var type = pieces.splice(random(0, pieces.length-1), 1)[0]; // remove a single piece
        return { type: type, dir: DIR.UP, x: 2, y: 0 };
    }

    keydown(ev){
        if(playing){
            switch(ev.keyCode){
                case KEY.LEFT:   actions.push(DIR.LEFT);  break;
                case KEY.RIGHT:  actions.push(DIR.RIGHT); break;
                case KEY.UP:     actions.push(DIR.UP);    break;
                case KEY.DOWN:   actions.push(DIR.DOWN);  break;
                case KEY.ESC:    this.lose();                  break;
            }
        }
        else if (ev.keyCode == KEY.SPACE) {
            this.play();
        }
    }

    handle(action){
        switch(action){
            case DIR.LEFT:  this.move(DIR.LEFT);  break;
            case DIR.RIGHT: this.move(DIR.RIGHT); break;
            case DIR.UP:    this.rotate();        break;
            case DIR.DOWN:  this.drop();          break;
        }
    }

    move(dir) {
        var x = current.x, y = current.y;
        switch(dir) {
            case DIR.RIGHT: x = x + 1; break;
            case DIR.LEFT:  x = x - 1; break;
            case DIR.DOWN:  y = y + 1; break;
        }
        if (unoccupied(current.blockType, x, y, current.dir)) {
            current.x = x;
            current.y = y; 
            invalidate();
            return true;
        }
        else {
            return false;
        }
    }

    rotate(dir){
        var newDir = (current.dir == DIR.MAX ? DIR.MIN: current.dir + 1);
        if (this.unocupied(current.blockType, curren.x, current.y, newDir)){
            current.dir = newdir; 
            invalidate();
        }
    }

    drop () {
        if (!move(DIR.DOWN)) {
            addScore(10);
            dropPiece();
            removeLines();
            setCurrentPiece(next);
            setNextPiece(randomPiece());
            if (ocupied(current.blockType, current.x, current.y, current.dir)) {
                lose();
            }
        }
    }

    dropPiece () {
        eachBlock(current.blockType, current.x, current.y, current.dir, (x, y) => {
            setBlock(x, y, current.blockType);
        });
    }
    setScore(n)             { this.score = n; invalidateScore(); };
    addScore(n)             { score = score + n; };
    setRows(n)              { rows = n; step = Math.max(speed.min, speed.start - (speed.decrement*rows)); invalidateRows(); };
    addRows(n)              { setRows(rows + n); };
    getBlock(x,y)           { return (blocks && blocks[x] ? blocks[x][y] : null); };
    setBlock(x,y,type)      { blocks[x] = blocks[x] || []; blocks[x][y] = type; invalidate(); };
    setCurrentPiece(piece)  { current = piece || randomPiece(); invalidate();     };
    setNextPiece(piece)     { next    = piece || randomPiece(); invalidateNext(); };

    //Stuff that Draws Stuff

    invalidate()        { this.invalid.court  = true; }
    invalidateNext()    { this.invalid.next   = true; }
    invalidateScore()   { this.invalid.score  = true; }
    invalidateRows()    { this.invalid.rows   = true; }



}