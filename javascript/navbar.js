const toogleButton = document.getElementById('toogleButton');
const navPhone     = document.getElementById('navPhone');
const content      = document.getElementById('content');

toogleButton.onclick = function(){
    navPhone.style.display = 'flex';
}
content.onclick = function(){
    navPhone.style.display = 'none';
}