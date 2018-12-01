
// let base = document.getElementById('base');
// let submit = document.getElementById('submit');

// let currencyObjects = [];

document.addEventListener('DOMContentLoaded', () => {

    let useCurrencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];

    let currencies = useCurrencies.map(currency => {
        return new Currency(currency);
    })

    let table = new Table('asc');
    let container = document.getElementById('container');
    table.mount(container, currencies);

    let date = new Date();

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if(dd<10) {
        dd = '0' + dd
    } 

    if(mm<10) {
        mm = '0' + mm
    } 

    date = yyyy + '-' + mm + '-' + dd;

    let form = new Form('EUR', date, currencies, table);
    let formContainer = document.getElementById('form');
    form.mount(formContainer, currencies);
    form.action();

    // let tbody = document.getElementById('tbody');

 

    // console.log(currencyObjects);

    // currencyObjects.forEach(currencyObject => {
    //     console.log(currencyObject);
    //     // currencyObject.mount(tbody);
    // });

})

// if (currency.name !== this.base) {
//     fetch(`https://api.exchangeratesapi.io/${date}?base=${base}&symbols=${currency.name}`)
//     .then(response => response.json())
//     .then(json => {
//         // this.currencies.forEach(currency => {
//         console.log(json);
//         Object.keys(json.rates).forEach((key, rate) =>  {
//             console.log(rate);
//             if (key === currency.name) {
//                 console.log(key);
//                 currency.buy = rate - 1;
//                 currency.sell = rate + 1;
//             }
//         })
            
//         //     console.log(currency.buy);
//         // });
//         // console.log(currency.buy); //how to get specific rate?
//     });