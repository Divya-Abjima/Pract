function styleChange() {
    document.getElementById('body').style.backgroundImage = "url('420902.png')";
    document.getElementById('body').style.color = "white";
    document.getElementById('body').style.lineHeight = "50px";
    document.getElementById('body').style.borderRadius = "10px";
}
function fontChange() {
    document.getElementById('body').style.fontFamily = "'Noto Serif', serif";
}
function changeMode() {
    document.getElementById('page').style.backgroundColor = "black";
    document.getElementById('head2').style.borderColor = "rgb(28, 252, 244)";
    document.getElementById('head2').style.backgroundColor = "black";
    document.getElementById('head2').style.color = "rgb(28, 252, 244)";
    document.getElementById('border').style.borderColor = "rgb(33, 235, 55)";
    document.getElementById('border').style.backgroundColor = "black";
    document.getElementById('border').style.color = "rgb(33, 235, 55)";
    document.getElementById('section').style.color = "white";
    document.getElementById('dark').style.backgroundColor = "white";
    document.getElementById('dark').style.color = "black";
    document.getElementById('dark').innerHTML = "Light Mode";
}