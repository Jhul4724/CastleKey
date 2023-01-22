var container = document.querySelector('.container');
var main = document.querySelector('.main');

function toggleSidebar(){
    isShowingSidebar() ? hideSidebar() : showSidebar();
}

function showSidebar(){
    container.classList.add('show-sidebar');
}

function hideSidebar(){
    container.classList.remove('show-sidebar');
}

function isShowingSidebar(){
    return container.classList.contains('show-sidebar');
}

document.querySelector('.hamburger').addEventListener('click', toggleSidebar, false);

container.addEventListener('click', function(e){
    if(isShowingSidebar() && main.contains(e.target)){
        e.preventDefault();
        hideSidebar();
    }
}, true);

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