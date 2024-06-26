import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);
        
        available.push(Square.at(currentSquare.row-1,currentSquare.col+1))
        available.push(Square.at(currentSquare.row-1,currentSquare.col-1))
        available.push(Square.at(currentSquare.row-1,currentSquare.col))
        available.push(Square.at(currentSquare.row+1,currentSquare.col+1))
        available.push(Square.at(currentSquare.row+1,currentSquare.col-1))
        available.push(Square.at(currentSquare.row+1,currentSquare.col))
        available.push(Square.at(currentSquare.row,currentSquare.col+1))
        available.push(Square.at(currentSquare.row,currentSquare.col-1))


        return this.reduceMoves(available);
    }
}
