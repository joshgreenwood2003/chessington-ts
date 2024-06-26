import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    public reduceMoves(moves: Array<Square>){
        let newMoves = new Array();
        moves.forEach(move => {
            if (move.col >= 0 && move.col <= 7 && move.row >= 0 && move.row <= 7){
                newMoves.push(move)
            }
        });
        return newMoves
    }
}
