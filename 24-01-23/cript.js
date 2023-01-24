function checkIfvalid() {
    const inp = document.getElementById('num');
    if (inp.checkValidity()) {
        document.getElementById('result').innerHTML = "Valid input";
    }
    else {
        document.getElementById('result').innerHTML = inp.validationMessage;
    }
}

//add using callback
function addNum(num1, num2, callFunc) {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);
    let sum=num1+num2;
    displayResult(sum);
}
function displayResult(sum) {
    
    //promise
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log('Promise resolved');
            resolve(sum);
        }, 2000);
    });
    p.then((value)=>{
        console.log(p);
    })
    p.then((error)=>{
        console.error('Promise rejected');
    })
    setTimeout(()=>{
        document.getElementById('sum').innerHTML = sum;
    }, 1000);
}

//changing text of a div by fetching a .txt file

function changeText() {
    let file = "file.txt"
    fetch(file)
    .then(x => x.text())
    .then(y => document.getElementById('para').innerHTML = y);
    document.getElementById('message').innerHTML = "<i>Text changed!</i>";
}