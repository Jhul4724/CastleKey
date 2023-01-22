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
