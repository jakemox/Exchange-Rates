class Currency {
    constructor(name) {
        this.name = name;
        this.buy = [];
        this.sell = [];
    }

    getData(base, date) {
        fetch(`https://api.exchangeratesapi.io/${date}?base=${base}&symbols=EUR,USD,GBP,AUD,CAD,JPY`)
        .then(response => response.json())
        .then(json => {
            this.buy = 
            json.forEach(item => {
                myList.innerHTML += `<li>${item.title}</li>`;
                console.log(item.title);
            });
            console.log(json);
        });
    }
}