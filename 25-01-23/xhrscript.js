function getData() {
    sentRequest('GET', "https://dummyjson.com/products")
}

function setData() {
    sentRequest('POST', "https://dummyjson.com/products/add", {
        title: 'Fragrant hair oil',
        description: "hair oil with a refreshing fragrance of jasmine and lily mixed with organic methods which repair and nourish hair and provide intense shine and strength"
    })
}

const sentRequest = (method, url, newdata) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';

    //to inform that we're sending json data
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
        if (xhr.status >= 400) {
            console.error('Error');
        }
        else {
            console.log('Loaded');
            console.log(xhr.response); //displays as a string
        }
    };
    xhr.send(JSON.stringify(newdata));
}