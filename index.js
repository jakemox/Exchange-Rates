document.addEventListener('DOMContentLoaded', () => {

    let baseCurrencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];

    // let currencies = useCurrencies.map(currency => {
    //     return new Currency(currency);
    // })

    let table = new Table('asc', baseCurrencies);
    // let container = document.getElementById('container');
    // table.mount(container, useCurrencies);

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

    let form = new Form('EUR', date, table);
    let formContainer = document.getElementById('form');
    form.mount(formContainer, baseCurrencies);
    form.action();
})
