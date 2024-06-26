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

        for(let row = 0;row<8;row++){
            if (row != currentSquare.row){
                let d1pos = row-currentSquare.row+currentSquare.col;
                let d2pos = currentSquare.row+currentSquare.col-row;
                if(d1pos >= 0 && d1pos <= 7){
                    available.push(Square.at(row,d1pos))
                }
                if (d2pos >= 0 && d2pos <= 7){
                    available.push(Square.at(row,d2pos))
                }
            }     
        }
        return available;
    }
}
