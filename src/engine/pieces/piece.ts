import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    public reduceMoves(moves: Array<Square>){
        let newMoves = new Array();
        moves.forEach(move => {
            if (move.col >= 0 && move.col <= 7 && move.row >= 0 && move.row <= 7){
                newMoves.push(move)
            }
        });
        return newMoves
    }







    public getVerticalMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);

        let blocked = false;
        for(let i = currentSquare.col - 1; i >= 0; i--){
            if (!blocked){
                let piece = board.getPiece(Square.at(currentSquare.row,i))
                if (typeof piece === "undefined"){
                    available.push(Square.at(currentSquare.row,i));
                }
                else{
                    if(piece.player != this.player&& piece.constructor.name != "King"){
                        available.push(Square.at(currentSquare.row,i)); 
                    }
                    blocked = true;
                }

            }

        }
        blocked = false;
        for(let i = currentSquare.col +1; i <=7 ; i++){
            if (!blocked){
                let piece = board.getPiece(Square.at(currentSquare.row,i))
                if (typeof piece === "undefined"){
                    available.push(Square.at(currentSquare.row,i));
                }
                else{
                    if(piece.player != this.player&& piece.constructor.name != "King"){
                        available.push(Square.at(currentSquare.row,i)); 
                    }
                    blocked = true;
                }

            }

        }


        blocked = false;
        for(let i = currentSquare.row - 1; i >= 0; i--){
            if (!blocked){
                let piece = board.getPiece(Square.at(i,currentSquare.col))
                if (typeof piece === "undefined"){
                    available.push(Square.at(i,currentSquare.col));
                }
                else{
                    if(piece.player != this.player&& piece.constructor.name != "King"){
                        available.push(Square.at(i,currentSquare.col)); 
                    }
                    blocked = true;
                }

            }

        }
        blocked = false;
        for(let i = currentSquare.row +1; i <=7 ; i++){
            if (!blocked){
                let piece = board.getPiece(Square.at(i,currentSquare.col))
                if (typeof piece === "undefined"){
                    available.push(Square.at(i,currentSquare.col));
                }
                else{
                    if(piece.player != this.player && piece.constructor.name != "King"){
                        available.push(Square.at(i,currentSquare.col)); 
                    }
                    blocked = true;
                }

            }

        }
      
        return available;
    }



    public getDiagonalMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);

        let blockNE = false;
        let blockNW = false;
        for (let row = currentSquare.row + 1; row < 8; row++) {
            if (row != currentSquare.row) {
                let d1pos = row - currentSquare.row + currentSquare.col;
                let d2pos = currentSquare.row + currentSquare.col - row;
                let possibleSquare = Square.at(row, d1pos)
                let possibleSquare2 = Square.at(row, d2pos)
                if (blockNE == false) {

                    let piece = board.getPiece(possibleSquare)
                    if (typeof piece === "undefined") {
                        available.push(possibleSquare);
                    }
                    else {
                        if (piece.player != this.player && piece.constructor.name != "King") {
                            available.push(possibleSquare);
                        }
                        blockNE = true;
                    }

                }
                if (blockNW == false) {
                    let piece = board.getPiece(possibleSquare2)
                    if (typeof piece === "undefined") {
                        available.push(possibleSquare2);
                    }
                    else {
                        if (piece.player != this.player && piece.constructor.name != "King") {
                            available.push(possibleSquare2);
                        }
                        blockNW = true;
                    }

                }
            }
        }
        let blockSW = false;
        let blockSE = false;
        for (let row = currentSquare.row - 1; row >= 0; row--) {
            if (row != currentSquare.row) {
                let d1pos = row - currentSquare.row + currentSquare.col;
                let d2pos = currentSquare.row + currentSquare.col - row;
                let possibleSquare = Square.at(row, d1pos)
                let possibleSquare2 = Square.at(row, d2pos)
                if (blockSW == false) {
                    let piece = board.getPiece(possibleSquare)
                    if (typeof piece === "undefined") {
                        available.push(possibleSquare);
                    }
                    else {
                        if (piece.player != this.player && piece.constructor.name != "King") {
                            available.push(possibleSquare);
                        }
                        blockSW = true;
                    }

                }
                if (blockSE == false) {
                    let piece = board.getPiece(possibleSquare2)
                    if (typeof piece === "undefined") {
                        available.push(possibleSquare2);
                    }
                    else {
                        if (piece.player != this.player && piece.constructor.name != "King") {
                            available.push(possibleSquare2);
                        }
                        blockSE = true;
                    }
                }
            }
        }
        available = this.reduceMoves(available)
        return available;
    }



}
