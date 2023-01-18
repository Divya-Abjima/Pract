//taking input from user and storing in array
let name = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");
let age = prompt("Enter your age:");
alert("Name = " + name + " " + lastname + " Age: " + age);

//numerical array methods
const num = [33, 444, 4423, 1133, 133];

//compare function for ascending order
function asc(a,b) {
    return a - b;
}

//reduce for sum of the array
function sum(a,b) {
    return a + b;
}

//push an element in array
function addNew() {
    var element = prompt("Enter the element to be pushed:");
    element = Number.parseInt(element);
    num.push(element);
    return num;
}
document.getElementById('sort').innerHTML = "[" + num.sort(asc) + "]";
document.getElementById('reduced').innerHTML = num.reduce(sum);
document.getElementById('push').innerHTML = addNew();
document.getElementById('pop').innerHTML = num.pop() + "<br>Array: " + num;