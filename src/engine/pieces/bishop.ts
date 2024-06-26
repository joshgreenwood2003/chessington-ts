import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
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
