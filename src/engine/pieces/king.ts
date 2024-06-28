import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import Rook from './rook';
import { updateChessBoard } from '../../frontend/js/chessington';
export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }
    public pieceCallback(board:Board,toSquare: Square,fromSquare:Square): void {

        if (this.player === Player.BLACK){
            board.CastleKsB = false;
            board.CastleQsB = false;
        }
        else {
            board.CastleKsW = false;
            board.CastleQsW = false;
        }



        if(fromSquare.col == 4 && toSquare.col == 6){
            if (this.player == Player.BLACK){
                let rook = board.getPiece(new Square(7,7));
                board.setPiece(new Square(7,7),undefined);
                board.setPiece(new Square(7,5),rook);
                updateChessBoard();

            }
            else{
                let rook = board.getPiece(new Square(0,7));
                board.setPiece(new Square(0,7),undefined);
                board.setPiece(new Square(0,5),rook);
                updateChessBoard();
            }
        }
        
        if(fromSquare.col == 4 && toSquare.col == 2){
            if (this.player == Player.BLACK){
                let rook = board.getPiece(new Square(7,0));
                board.setPiece(new Square(7,0),undefined);
                board.setPiece(new Square(7,3),rook);
                updateChessBoard();

            }
            else{
                let rook = board.getPiece(new Square(0,0));
                board.setPiece(new Square(0,0),undefined);
                board.setPiece(new Square(0,3),rook);
                updateChessBoard();
            }
        }
       









        return;
          
    }
    public getAvailableMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);
        const currentRow = currentSquare.row;
        const currentCol = currentSquare.col;

        available.push(new Square(currentRow - 1, currentCol + 1));
        available.push(new Square(currentRow - 1, currentCol - 1));
        available.push(new Square(currentRow - 1, currentCol));
        available.push(new Square(currentRow + 1, currentCol + 1));
        available.push(new Square(currentRow + 1, currentCol - 1));
        available.push(new Square(currentRow + 1, currentCol));
        available.push(new Square(currentRow, currentCol + 1));
        available.push(new Square(currentRow, currentCol - 1));


        if (this.player === Player.BLACK){
            if(board.CastleKsB){
                if (!board.getPiece(new Square(7,5))&&!board.getPiece(new Square(7,6))){
                    available.push(new Square(7,6));
                }
            }
            if(board.CastleQsB){
                if (!board.getPiece(new Square(7,3))&&!board.getPiece(new Square(7,2))&& !board.getPiece(new Square(7,1))){
                    available.push(new Square(7,2));
                }
            }
        }
        else{
            if(board.CastleKsW){
                if (!board.getPiece(new Square(0,5))&&!board.getPiece(new Square(0,6))){
                    available.push(new Square(0,6));
                }
            }
            if(board.CastleQsW){
                if (!board.getPiece(new Square(0,3))&&!board.getPiece(new Square(0,2))&& !board.getPiece(new Square(0,1))){
                    available.push(new Square(0,2));
                }
            }
        }
        

        return this.reduceMoves(board, available);
    }
}
