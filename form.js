class Form {
    constructor(base, date, table) {
        this.base = base;
        this.date = date;
        this.table = table;
    }

    /*
     * Gets data from api and makes new array of currencies
     * with data then mounts table with currencies.
     */

    getData(base, date) {
        this.currencies = [];
        
        fetch(`https://api.exchangeratesapi.io/${date}?base=${base}`)
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            for (const currency in json.rates) {
                this.currencies.push(new Currency(currency));
            }

            // Loop through currencies and set 'buy' to 5% less than conversion.
            // Loop through currencies and set 'sell' to 5% more than conversion.
    
            this.currencies.forEach(currency => {
                currency.buy = (json.rates[currency.name] * 0.95).toFixed(4);
                currency.sell = (json.rates[currency.name] * 1.05).toFixed(4);
            });

            // If page is being loaded for first time, table mounts.
            // Otherwise table updates with new base of alphabet order.
            
            if (this.table.mounted === false) {
                this.table.mount(container, this.currencies);
            } else {
                this.table.updateHTML(this.currencies, this.base);
            }
        });
    }

    /*
     * Takes 'base' and 'date' values from form element and
     * calls getData with these values.
     */

    action() {
        this.base = document.getElementById('base').value;
        this.date = document.getElementById('date').value;
            
        this.getData(this.base, this.date);
        // console.log(this.currencies);  
    }

    /*
     * Creates form element HTML.
     */

    render(baseCurrencies) {
        let formElm = document.createElement('div');
        formElm.setAttribute('class', 'form');
        formElm.setAttribute('id', 'form');
        formElm.innerHTML = (
            `Base:
            <select name="base" id="base">
                ${ 
                    baseCurrencies.map((currency, i) => {
                        return `<option value="${currency}">${currency}</option>`
                    }).join('')
                }
            </select><br><br>
            Date:
            <input type="date" id="date" ><br><br>
            <button id="submit">Display</button>`
        );

        return formElm;
    }

    /*
     * Puts form element HTML onto page.
     * Allows click of submit button to call action method.
     */

    mount(parent, baseCurrencies) {
        let formElm = this.render(baseCurrencies);
        parent.appendChild(formElm);

        let dateElm = document.getElementById('date');
        dateElm.value = this.date;

        let submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', () => {
            this.action();
        });
    }
}