let info = [];
//displaying as an array

for(i=0;i<4;i++) {
    info[i] = prompt("Enter element "+ i + ": ");
    console.log(info[i]);
}
document.getElementById('items').innerHTML = info;
const myInfo ={
    element1:"",
    element2: "",
    element3: "" ,
    element4: ""
};

//displaying as an object

function displayInfo() {
    let i = 0;
    for (const x in myInfo) {
    myInfo[x] = info[i];
    i++;
    }
    return Object.values(myInfo);
}
document.getElementById('object').innerHTML = displayInfo();