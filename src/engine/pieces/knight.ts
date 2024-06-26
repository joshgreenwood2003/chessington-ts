import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);
        
        available.push(Square.at(currentSquare.row-1,currentSquare.col+2))
        available.push(Square.at(currentSquare.row-1,currentSquare.col-2))
        available.push(Square.at(currentSquare.row+1,currentSquare.col+2))
        available.push(Square.at(currentSquare.row+1,currentSquare.col-2))
        available.push(Square.at(currentSquare.row-2,currentSquare.col+1))
        available.push(Square.at(currentSquare.row-2,currentSquare.col-1))
        available.push(Square.at(currentSquare.row+2,currentSquare.col+1))
        available.push(Square.at(currentSquare.row+2,currentSquare.col-1))

        available = available.filter(space=>{

            let piece = board.getPiece(space)
            if (typeof piece === "undefined"){
                return true;
            }
            else{
                if(piece.player != this.player&& piece.constructor.name != "King"){
                    return true;
                }
            }
            return false;
        })

        return this.reduceMoves(available);
    }
}
