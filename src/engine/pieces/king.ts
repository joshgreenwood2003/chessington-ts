import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
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

        return this.reduceMoves(board, available);
    }
}
