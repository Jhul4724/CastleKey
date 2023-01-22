var config = {
    showNotation: false,
    position: 'start',
    draggable: true,
    dropOffBoard: 'snapback',
    onDrop: onDrop,
  }
var board = Chessboard('board', config)
function onDrop (source, target, piece, newPos, oldPos, orientation) {
    const target = target;
    const piece = piece;
    const stringPiece = 
    console.log('Target: ' + target)
    console.log('Piece: ' + piece)
  }