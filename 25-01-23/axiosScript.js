function getDataAxios() {
    axios.get('https://dummyjson.com/products').then(response => {
        console.log(response);
    })
}

function setDataAxios() {
    axios.post("https://dummyjson.com/products/add", {
        title: 'Fragrant hair oil',
        description: "hair oil with a refreshing fragrance of jasmine and lily mixed with organic methods which repair and nourish hair and provide intense shine and strength"
    }).then(response => {
        console.log(response);
    })
}
