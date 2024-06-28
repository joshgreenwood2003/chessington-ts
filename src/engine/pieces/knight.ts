import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let available = new Array();
        const currentSquare = board.findPiece(this);
        const currentRow = currentSquare.row;
        const currentCol = currentSquare.col;

        available.push(new Square(currentRow - 1, currentCol + 2));
        available.push(new Square(currentRow - 1, currentCol - 2));
        available.push(new Square(currentRow + 1, currentCol + 2));
        available.push(new Square(currentRow + 1, currentCol - 2));
        available.push(new Square(currentRow - 2, currentCol + 1));
        available.push(new Square(currentRow - 2, currentCol - 1));
        available.push(new Square(currentRow + 2, currentCol + 1));
        available.push(new Square(currentRow + 2, currentCol - 1));

        return this.reduceMoves(board, available);
    }
}
