var container = document.querySelector(".container");
var main = document.querySelector(".main");

function toggleSidebar() {
  isShowingSidebar() ? hideSidebar() : showSidebar();
}

function showSidebar() {
  container.classList.add("show-sidebar");
}

function hideSidebar() {
  container.classList.remove("show-sidebar");
}

function isShowingSidebar() {
  return container.classList.contains("show-sidebar");
}

function showicon() {
  var t = document.getElementsByClassName("line3");
  console.log(t);
  for(let i = 0; i < t.length; i++){
  if (t[i].value == "YES") {
    t[i].value = "NO";
    t[i].classList.remove("yesvalue");
    t[i].classList.add("novalue");
  } else {
    t[i].value = "YES";
    t[i].classList.remove("novalue");
    t[i].classList.add("yesvalue");
  }
}
}
