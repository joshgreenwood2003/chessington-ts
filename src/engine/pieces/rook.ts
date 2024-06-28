import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
export default class Rook extends Piece {
  public constructor(player: Player) {
    super(player);
  }
  public pieceCallback(board: Board, toSquare: Square,fromSquare:Square): void {
    if( board.findPiece(this).col == 0){
      this.player == Player.BLACK?board.CastleQsB = false:board.CastleQsW = false;
    }
    if( board.findPiece(this).col== 7){
      this.player==Player.BLACK?board.CastleKsB = false:board.CastleKsW = false;
    }
    return;

  }
  public getAvailableMoves(board: Board) {
    return this.getVerticalMoves(board);
  }
}
