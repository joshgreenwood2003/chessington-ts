import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);
        if (this.player == Player.WHITE){
            if (currentSquare.row == 1){
                available.push(Square.at(currentSquare.row+2,currentSquare.col))
            }
            available.push(Square.at(currentSquare.row+1,currentSquare.col))
        }
        else{
            if (currentSquare.row == 6){
                available.push(Square.at(currentSquare.row-2,currentSquare.col))
            }
            available.push(Square.at(currentSquare.row-1,currentSquare.col))
        }
        
        return this.reduceMoves(available);
    }
}
