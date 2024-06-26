import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);
        for(let i = 0;i<8;i++){
            if (i != currentSquare.row){
                available.push(Square.at(i,currentSquare.col))
            }     
        }
        for(let i = 0;i<8;i++){
            if (i != currentSquare.col){
                available.push(Square.at(currentSquare.row,i))
            }     
        }

        return available;
    }
}
