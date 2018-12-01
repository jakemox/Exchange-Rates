

class Form {
    constructor(base, date, currencies, table) {
        this.base = base;
        this.date = date;
        this.currencies = currencies;
        this.table = table;
    }



    getData(base, date) {
        // console.log(this.name);
        let currencyString = [];
        this.currencies.forEach(currency => {
            if (currency.name !== this.base) {
                currencyString.push(currency.name);
            }
        });
        
        fetch(`https://api.exchangeratesapi.io/${date}?base=${base}&symbols=${currencyString.join(',')}`)
        .then(response => response.json())
        .then(json => {
            this.currencies.forEach(currency => {
                currency.buy = json.rates[currency.name] - (json.rates[currency.name] * 5 / 100);
                currency.sell = json.rates[currency.name] + (json.rates[currency.name] * 5 / 100);
                // 
                // currency.sell = json.rates;
            //     console.log(currency.buy);
            });
            this.table.updateHTML(this.currencies, this.base);
            console.log(this.rates); //how to get specific rate?
        });
        
    }

    action() {
        this.base = document.getElementById('base').value;
        this.date = document.getElementById('date').value;
        
           
        this.getData(this.base, this.date);
        console.log(this.currencies);  
        
        // this.updateHTML();
        // console.log(this.base);
        // console.log(this.date);
    }

    render() {
        console.log(this.currencies);
        
        let formElm = document.createElement('div');
        formElm.innerHTML = (
            `Base:
            <select name="base" id="base">
                ${ 
                    this.currencies.map((currency, i) => {
                        return `<option value="${currency.name}">${currency.name}</option>`
                    }).join('')
                }
            </select><br><br>
            Date:
            <input type="date" id="date" ><br><br>
            <button id="submit">Display</button>`
        );

        return formElm;
    }

    mount(parent) {
        let formElm = this.render();
        parent.appendChild(formElm);

        let baseElm = document.getElementById('base');
        let dateElm = document.getElementById('date');

        dateElm.value = this.date;

        let submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', () => {
            this.action();
        });
    }
}