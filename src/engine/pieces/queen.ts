import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }
public pieceCallback(board:Board,toSquare: Square,fromSquare:Square): void {
    return;
}
    public getAvailableMoves(board: Board) {
        let available= this.getDiagonalMoves(board);
        return available.concat(this.getVerticalMoves(board));
    }
}
