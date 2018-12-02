var self;

class Table {
    constructor(alphOrder, baseCurrencies) {
        this.alphOrder = alphOrder;
        this.base = '';
        this.mounted = false;
        this.baseCurrencies = baseCurrencies;
    }

    compare(a, b) {
        const nameA = a.name;
        const nameB = b.name;

        let comparison = 0;

        if (nameA > nameB) {
            comparison = self.alphOrder === 'asc' ? 1 : -1;
        } else if (nameA < nameB) {
            comparison = self.alphOrder === 'asc' ? -1 : 1;
        }

        return comparison;
    }

    alphabet(currencies) {
        self = this;
        currencies.sort(this.compare);
    }

    rowsHTML(currencies, base) {
        return (
            currencies.map((currency) => {
                if (currency.name !== base) {
                    let className = 'currency';
                    if (this.baseCurrencies.indexOf(currency.name) !== -1) {
                        className += ' base';
                    }
                    return (
                        `<tr class="${className}" id="row-${currency.name}">
                            <td>${currency.name}</td>
                            <td class="buy">${currency.buy}</td>
                            <td class="sell">${currency.sell}</td>
                        </tr>`
                    )
                }
            }).join('')
        );
    }

    updateHTML(currencies, base) {
        this.alphabet(currencies);

        tbody.innerHTML = this.rowsHTML(currencies, base);
    }

    render(currencies, base) {
        let tableElm = document.createElement('table');
        tableElm.innerHTML =  
            `<thead>
                <th class="currency-th">Currency
                    <button id="asc" class="arrows">
                        <span>&#9650;</span>
                        <span>&#9660;</span>
                    </button>
                </th>
                <th>Buy</th>
                <th>Sell</th>
            </thead>
            <tbody id="tbody">
                ${this.rowsHTML(currencies, base)}   
            </tbody>`  
        return tableElm;
    }

    mount(parent, currencies) {
        this.alphabet(currencies);
        let tableElm = this.render(currencies, this.base);
        parent.appendChild(tableElm);
        this.mounted = true;

        let ascBtn = document.getElementById('asc');
        ascBtn.addEventListener('click', () => {
            if (this.alphOrder === 'asc') {
                this.alphOrder = 'desc';
                this.updateHTML(currencies);
            } else {
                this.alphOrder = 'asc';
                this.updateHTML(currencies);
            }
        })
    }
}