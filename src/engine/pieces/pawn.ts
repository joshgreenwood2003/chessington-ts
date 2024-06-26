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
            if (currentSquare.row == 1){
                if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                    available.push(secondNextSquare)
                }  
            }
            if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                available.push(nextSquare)
            }  
        }


        if (this.player == Player.BLACK){
            let nextSquare = Square.at(currentSquare.row - 1,currentSquare.col)
            let secondNextSquare = Square.at(currentSquare.row -2,currentSquare.col)
            if (currentSquare.row == 6){
                if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                    available.push(secondNextSquare)
                }  
            }
            if (typeof board.getPiece(nextSquare) == "undefined" && typeof board.getPiece(secondNextSquare) == "undefined"){
                available.push(nextSquare)
            }  
        }

        return this.reduceMoves(available);
    }
}
