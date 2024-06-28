import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import Piece from './pieces/piece';
import Pawn from './pieces/pawn';
import { updateChessBoard } from '../frontend/js/chessington';

export default class Board {
    public currentPlayer: Player;
    private readonly board: (Piece | undefined)[][];
    public constructor(currentPlayer?: Player) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    public setPiece(square: Square, piece: Piece | undefined) {
        this.board[square.row][square.col] = piece;
    }

    public getPiece(square: Square) {
        if (square.col > 7 || square.col <0 ||square.row > 7 || square.row < 0){
            return undefined;
        }
        return this.board[square.row][square.col];
    }

    public findPiece(pieceToFind: Piece) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    public movePiece(fromSquare: Square, toSquare: Square) {
        const movingPiece = this.getPiece(fromSquare);    
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);

            if (movingPiece instanceof Pawn){
                let possiblecapture = this.getPiece(new Square(fromSquare.row,toSquare.col))
                if(possiblecapture instanceof Pawn){
                    console.log("Found pawn in right place")
                    if (possiblecapture.enPassantable){
                        
                        this.setPiece(Square.at(fromSquare.row,toSquare.col),undefined);
                        updateChessBoard();
                    }
                }    
            }
           
            this.board.forEach(row => {
                row.forEach(piece=>{
                    if(!!piece){
                        if (piece instanceof Pawn){
                            piece.enPassantable = false;
                        }
                    }
                })
            });

            if (movingPiece instanceof Pawn){
                if (Math.abs(toSquare.row-fromSquare.row) === 2){
                    movingPiece.enPassantable = true;
                }
               
            }




            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
            
        }
    }

    private createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }
}
