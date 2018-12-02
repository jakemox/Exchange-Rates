class Form {
    constructor(base, date, table) {
        this.base = base;
        this.date = date;
        this.table = table;
    }

    getData(base, date) {
        this.currencies = [];
        
        fetch(`https://api.exchangeratesapi.io/${date}?base=${base}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for (const currency in json.rates) {
                this.currencies.push(new Currency(currency));
            }
            //push all api currencies into new array to display
            this.currencies.forEach(currency => {
                currency.buy = (json.rates[currency.name] - (json.rates[currency.name] * 5 / 100)).toFixed(4);
                currency.sell = (json.rates[currency.name] + (json.rates[currency.name] * 5 / 100)).toFixed(4);
            });

            let container = document.getElementById('container');
            
            if (this.table.mounted === false) {
                this.table.mount(container, this.currencies);
            } else {
                this.table.updateHTML(this.currencies, this.base);
            }
        });
    }

    action() {
        this.base = document.getElementById('base').value;
        this.date = document.getElementById('date').value;
            
        this.getData(this.base, this.date);
        console.log(this.currencies);  
    }

    render(baseCurrencies) {
        console.log(baseCurrencies);
        
        let formElm = document.createElement('div');
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

    mount(parent, baseCurrencies) {
        let formElm = this.render(baseCurrencies);
        parent.appendChild(formElm);

        // let baseElm = document.getElementById('base');
        let dateElm = document.getElementById('date');
        dateElm.value = this.date;

        let submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', () => {
            this.action();
        });
    }
}