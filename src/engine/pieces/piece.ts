import Player from '../player';
import Board from '../board';
import Square from '../square';

export default abstract class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public abstract getAvailableMoves(board: Board): Square[];
    public abstract pieceCallback(board:Board,toSquare: Square,fromSquare:Square): void;

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    public reduceMoves(board: Board, moves: Array<Square>) {

        moves = moves.filter(move => {
            return (move.col >= 0 && move.col <= 7 && move.row >= 0 && move.row <= 7);
        })

        moves = moves.filter(space => {
            const piece = board.getPiece(space)
            return (!piece || (piece.player != this.player && piece.constructor.name != "King"))
        })

        return moves
    }




    public checkDirection(directionVector: Array<number>, currentSquare:Square, board: Board) {
       
        let available = new Array();
        let squarePointer = [currentSquare.row, currentSquare.col]
        while (squarePointer[0] >= 0 && squarePointer[0] <= 7 && squarePointer[1] >= 0 && squarePointer[1] <= 7) {
            squarePointer[0] += directionVector[0];
            squarePointer[1] += directionVector[1];
            let square = new Square(squarePointer[0], squarePointer[1])
            let piece = board.getPiece(square)
            if (!piece) {
                available.push(square);
            }
            else {
                if (piece.player != this.player && piece.constructor.name != "King") {
                    available.push(square);
                }
                break;
            }
        }
        return this.reduceMoves(board,available);
    }

    public getVerticalMoves(board: Board) {

        let available = new Array();
        const currentSquare = board.findPiece(this);
        
        available = available.concat(this.checkDirection([0, 1], currentSquare, board))
        available = available.concat(this.checkDirection([0, -1], currentSquare, board))
        available = available.concat(this.checkDirection([1, 0], currentSquare, board))
        available = available.concat(this.checkDirection([-1, 0], currentSquare, board))
        return available;

    }



    public getDiagonalMoves(board: Board) {

        let available = new Array();
        const currentSquare = board.findPiece(this);
        available = available.concat(this.checkDirection([1, 1], currentSquare, board))
        available = available.concat(this.checkDirection([-1, -1], currentSquare, board))
        available = available.concat(this.checkDirection([1, -1], currentSquare, board))
        available = available.concat(this.checkDirection([-1, 1], currentSquare, board))
        return available;

    }



}
