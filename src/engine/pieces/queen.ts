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



        let blockNE = false;
        let blockNW= false;
        for(let row = currentSquare.row + 1 ;row<8;row++){
            if (row != currentSquare.row){
                let d1pos = row-currentSquare.row+currentSquare.col;
                let d2pos = currentSquare.row+currentSquare.col-row;
                let possibleSquare = Square.at(row,d1pos)
                let possibleSquare2 = Square.at(row,d2pos)
               if(blockNE == false){
                if (typeof board.getPiece(possibleSquare) === "undefined"){
                    available.push(possibleSquare)
                }
                else{
                    blockNE = true
                }

               }
               if (blockNW == false){
                if (typeof board.getPiece(possibleSquare2) === "undefined"){
                    available.push(possibleSquare2)
                }
                else{
                    blockNW = true
                }
               }
               
            }     
        }
        let blockSW = false;
        let blockSE = false;
        for(let row = currentSquare.row -1 ;row>=0;row--){
            if (row != currentSquare.row){
                let d1pos = row-currentSquare.row+currentSquare.col;
                let d2pos = currentSquare.row+currentSquare.col-row;
                let possibleSquare = Square.at(row,d1pos)
                let possibleSquare2 = Square.at(row,d2pos)
               if(blockSW == false){
                if (typeof board.getPiece(possibleSquare) === "undefined"){
                    available.push(possibleSquare)
                }
                else{
                    blockSW = true
                }

               }
               if (blockSE == false){
                if (typeof board.getPiece(possibleSquare2) === "undefined"){
                    available.push(possibleSquare2)
                }
                else{
                    blockSE = true
                }
               }
            }       
        }
        available = this.reduceMoves(available)
        return available;
      
    }
}
