
// let base = document.getElementById('base');
// let submit = document.getElementById('submit');

// let currencyObjects = [];

document.addEventListener('DOMContentLoaded', () => {

    let useCurrencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];

    let currencies = useCurrencies.map(currency => {
        return new Currency(currency);
    })

    let form = new Form('EUR', "2018-04-08", currencies);
    let formContainer = document.getElementById('form');
    form.mount(formContainer, currencies);

    let table = new Table('asc');
    console.log(table);
    let container = document.getElementById('container');
    table.mount(container, currencies);

    // let tbody = document.getElementById('tbody');

 

    // console.log(currencyObjects);

    // currencyObjects.forEach(currencyObject => {
    //     console.log(currencyObject);
    //     // currencyObject.mount(tbody);
    // });

})