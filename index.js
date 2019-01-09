const baseCurrencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];
let container = document.getElementById('container');
/*
 * Returns today's date for initial page loading.
 */

function todaysDate() {
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
    return date;
}

document.addEventListener('DOMContentLoaded', () => {
    let table = new Table('asc', baseCurrencies);

    let form = new Form('EUR', todaysDate(), table);
    form.mount(container, baseCurrencies);
    form.action();
})
