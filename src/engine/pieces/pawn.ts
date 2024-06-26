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
            let nextSquare = Square.at(currentSquare.row + 1,currentSquare.col)
            let secondNextSquare = Square.at(currentSquare.row + 2,currentSquare.col)
            let diagNext1 = Square.at(currentSquare.row+1,currentSquare.col - 1)
            let diagNext2 = Square.at(currentSquare.row+1,currentSquare.col + 1)
            if (currentSquare.row == 1){
                if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                    available.push(secondNextSquare)
                }  
            }
            if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                available.push(nextSquare)
            }  

            let piece = board.getPiece(diagNext1)
            if (typeof piece != "undefined"){
                if(piece.player != this.player&& piece.constructor.name != "King"){
                    available.push(diagNext1); 
                }
            }
            piece = board.getPiece(diagNext2)
            if (typeof piece != "undefined"){
                if(piece.player != this.player&& piece.constructor.name != "King"){
                    available.push(diagNext2); 
                }
            }

            // CHECK FOR DIAG PIECES

        }


        if (this.player == Player.BLACK){
            let nextSquare = Square.at(currentSquare.row - 1,currentSquare.col)
            let secondNextSquare = Square.at(currentSquare.row -2,currentSquare.col)
            let diagNext1 = Square.at(currentSquare.row-1,currentSquare.col - 1)
            let diagNext2 = Square.at(currentSquare.row-1,currentSquare.col + 1)
            if (currentSquare.row == 6){
                if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                    available.push(secondNextSquare)
                }  
            }
            if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                available.push(nextSquare)
            }  

            let piece = board.getPiece(diagNext1)
            if (typeof piece != "undefined"){
                if(piece.player != this.player&& piece.constructor.name != "King"){
                    available.push(diagNext1); 
                }
            }
            piece = board.getPiece(diagNext2)
            if (typeof piece != "undefined"){
                if(piece.player != this.player&& piece.constructor.name != "King"){
                    available.push(diagNext2); 
                }
            }


            //CHECK FOR DIAG PIECES
        }



        return this.reduceMoves(available);
    }
}
