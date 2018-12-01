class Currency {
    constructor(name) {
        this.name = name;
        this.buy = '';
        this.sell = '';
    }

    // getData(base, date) {
    //     console.log(this.name);
        
    //     fetch(`https://api.exchangeratesapi.io/${date}?base=${base}&symbols=${this.name}`)
    //     .then(response => response.json())
    //     .then(json => {
    //         this.buy = json.rates;
    //         this.sell = json.rates;
    //         console.log(json);
    //     });
    // }
}