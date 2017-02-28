var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var flag = document.getElementsByTagName('li');
    flag = flag[flag.length - 1].innerHTML;
    flag = parseInt(flag.match(/\d+/)) + 1;
    var NewlistElem = document.createElement('li');
    list.appendChild(NewlistElem).innerHTML += 'item' + ' ' + flag;
})
