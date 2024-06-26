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

        let blocked = false;
        for(let i = currentSquare.col - 1; i >= 0; i--){
            if (!blocked){
                if (typeof board.getPiece(Square.at(currentSquare.row,i)) === "undefined"){
                    available.push(Square.at(currentSquare.row,i));
                }
                else{
                    blocked = true;
                }

            }

        }
        blocked = false;
        for(let i = currentSquare.col +1; i <=7 ; i++){
            if (!blocked){
                if (typeof board.getPiece(Square.at(currentSquare.row,i)) === "undefined"){
                    available.push(Square.at(currentSquare.row,i));
                }
                else{
                    blocked = true;
                }

            }

        }


        blocked = false;
        for(let i = currentSquare.row - 1; i >= 0; i--){
            if (!blocked){
                if (typeof board.getPiece(Square.at(i,currentSquare.col)) === "undefined"){
                    available.push(Square.at(i,currentSquare.col));
                }
                else{
                    blocked = true;
                }

            }

        }
        blocked = false;
        for(let i = currentSquare.row +1; i <=7 ; i++){
            if (!blocked){
                if (typeof board.getPiece(Square.at(i,currentSquare.col)) === "undefined"){
                    available.push(Square.at(i,currentSquare.col));
                }
                else{
                    blocked = true;
                }

            }

        }
      
        return available;
    }
}
