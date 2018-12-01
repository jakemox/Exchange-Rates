

class Form {
    constructor(base, date, currencies) {
        this.base = base;
        this.date = date;
        this.currencies = currencies;
    }

    // getData() {
        
    // }

    action() {
        this.base = document.getElementById('base').value;
        this.date = document.getElementById('date').value;
        this.currencies.forEach(currency => {
            currency.getData(this.base, this.date);
        });

        console.log(this.base);
        console.log(this.date);
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
            <input type="date" id="date"><br><br>
            <button id="submit">Display</button>`
        );

        return formElm;
    }

    mount(parent) {
        let formElm = this.render();
        parent.appendChild(formElm);

        let submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', () => {
            this.action();
        });
    }
}