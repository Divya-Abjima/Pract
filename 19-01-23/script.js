// changing the color of the first li element of navigation bar (nav element)
document.getElementsByTagName('nav')[0].firstElementChild.firstElementChild.style.color = "red";

//changing the color of first and last children to green
document.getElementsByTagName('nav')[0].firstElementChild.firstElementChild.style.color = "green";
document.getElementsByTagName('nav')[0].firstElementChild.lastElementChild.style.color = "green";

//changing background color of li to cyan
Array.from(document.getElementsByTagName('li')).forEach(element => {
    element.style.background = "cyan";
});
console.log(document.getElementById('caption').textContent);
function showValue(){
 console.log(document.getElementById('text').value);
 document.getElementById('text').value = '';
}

//calculation part 
function getSum() {
    let x = document.getElementById('num01').value;
    let y = document.getElementById('num02').value;
    x = Number.parseInt(x);
    y = Number.parseInt(y);
    return document.getElementById('result').innerHTML = (x + y);
}
function getDif() {
    let x = document.getElementById('num01').value;
    let y = document.getElementById('num02').value;
    x = Number.parseInt(x);
    y = Number.parseInt(y);
    return document.getElementById('result').innerHTML = (x - y);
}
function getProd() {
    let x = document.getElementById('num01').value;
    let y = document.getElementById('num02').value;
    x = Number.parseInt(x);
    y = Number.parseInt(y);
    return document.getElementById('result').innerHTML = (x * y);
}
function getDiv() {
    let x = document.getElementById('num01').value;
    let y = document.getElementById('num02').value;
    x = Number.parseInt(x);
    y = Number.parseInt(y);
    return document.getElementById('result').innerHTML = (x / y);
}
function getMod() {
    let x = document.getElementById('num01').value;
    let y = document.getElementById('num02').value;
    x = Number.parseInt(x);
    y = Number.parseInt(y);
    return document.getElementById('result').innerHTML = (x % y);
}
