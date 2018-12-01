class Table {
    constructor(order) {
        this.order = order;
        this.base = '';
    }

    updateHTML(currencies, base) {
        currencies.forEach(currency => {
            if (currency.name !== base) {
                document.getElementById(`row-${currency.name}`).innerHTML = (
                    `<td class="currency">${currency.name}</td>
                    <td class="buy">${currency.buy}</td>
                    <td class="sell">${currency.sell}</td>`
                );
            }
        });
    }

    render(currencies) {
        console.log(currencies);
        let tableElm = document.createElement('table');
        tableElm.innerHTML =  
            `<thead>
                <th class="currency">Currency</td>
                <th class="buy">Buy</td>
                <th class="sell">Sell</td>
            </thead>
            <tbody id="tbody">
                ${
                    currencies.map((currency, i) => {
                        if (currency.name !== this.base) {
                            return (
                                `<tr id="row-${currency.name}">
                                    <td class="currency">${currency.name}</td>
                                    <td class="buy">${currency.buy}</td>
                                    <td class="sell">${currency.sell}</td>
                                </tr>`
                            )
                        }
                    }).join('')
                }   
            </tbody>`  
       
            
        return tableElm;
    }

    mount(parent, currencies) {
        let tableElm = this.render(currencies);
        parent.appendChild(tableElm);
    }
}