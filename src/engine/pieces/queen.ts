import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {













        let available = new Array();
        const currentSquare = board.findPiece(this);

        for(let i = 0;i<8;i++){
            if (i != currentSquare.row){
                available.push(Square.at(i,currentSquare.col))

                let d1pos = i-currentSquare.row+currentSquare.col;
                let d2pos = currentSquare.row+currentSquare.col-i;
                if(d1pos >= 0 && d1pos <= 7){
                    available.push(Square.at(i,d1pos))
                }
                if (d2pos >= 0 && d2pos <= 7){
                    available.push(Square.at(i,d2pos))
                }

            }    
            if (i != currentSquare.col){
                available.push(Square.at(currentSquare.row,i))
            }    
   
        }
        return available;
    }
}
