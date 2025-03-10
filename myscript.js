var button = document.getElementById('myButton');
var logo = document.getElementById('headerLogo');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var conetent = document.getElementById('myContent')
var test = document.getElementById('test');


button.onclick = function () {
    modal.style.display = "block";
    conetent.style.opacity = "1";
}
close.onclick = function () {
    modal.style.display = "none";
}

test.onclick = function () {
    test.style.backgroundColor = "red";
    test.style.marginLeft = "100px";
}

function opacity1() {
    conetent.style.opacity = "1";
}

button.onclick = function () {
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}