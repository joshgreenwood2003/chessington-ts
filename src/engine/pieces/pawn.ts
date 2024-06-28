import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';
export default class Pawn extends Piece {
    public enPassantable;
    public constructor(player: Player) {
        super(player);
        this.enPassantable = false;
    }

    public getAvailableMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);
        let nextSquare: Square;
        let secondNextSquare: Square;
        let diagNext1: Square;
        let diagNext2: Square;
        let leftside: Square = Square.at(currentSquare.row,currentSquare.col -1);
        let rightside:Square = Square.at(currentSquare.row,currentSquare.col + 1);
        let startingFile: Number;

        // Determine relative positions based on the pawn colour
        if (this.player == Player.WHITE) {
            nextSquare = Square.at(currentSquare.row + 1, currentSquare.col)
            secondNextSquare = Square.at(currentSquare.row + 2, currentSquare.col)
            diagNext1 = Square.at(currentSquare.row + 1, currentSquare.col - 1)
            diagNext2 = Square.at(currentSquare.row + 1, currentSquare.col + 1)
            startingFile = 1
        }
        else {
            nextSquare = Square.at(currentSquare.row - 1, currentSquare.col)
            secondNextSquare = Square.at(currentSquare.row - 2, currentSquare.col)
            diagNext1 = Square.at(currentSquare.row - 1, currentSquare.col - 1)
            diagNext2 = Square.at(currentSquare.row - 1, currentSquare.col + 1)
            startingFile = 6
        }


        // Move 1 square forward, or two
        if(!board.getPiece(nextSquare)){
            available.push(nextSquare)
            if (currentSquare.row == startingFile&& !board.getPiece(secondNextSquare)) {
                available.push(secondNextSquare)
            }
        }

        let piece;

        // Take to the left
        piece = board.getPiece(diagNext1)
        if (!!piece) {
            if (piece.player != this.player && !(piece instanceof King)) {
                available.push(diagNext1);
            }
        }

        // Take to the right
        piece = board.getPiece(diagNext2)
        if (!!piece) {
            if (piece.player != this.player && !(piece instanceof King)) {
                available.push(diagNext2);
            }
        }

        // En passant to the left
        piece = board.getPiece(leftside)
        if (!!piece) {
            if (piece.player != this.player && (piece instanceof Pawn)) {
                if(piece.enPassantable){
                    available.push(diagNext1)
                }
            }
        }

        // En passant to the right
        piece = board.getPiece(rightside)
        if (!!piece) {
            if (piece.player != this.player && (piece instanceof Pawn)) {
                if(piece.enPassantable){
                    available.push(diagNext2)
                }
            }
        }










        return this.reduceMoves(available);
    }
}
