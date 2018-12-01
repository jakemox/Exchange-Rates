class Table {
    constructor(order) {
        this.order = order;
        this.base = '';
    }

    updateHTML() {

    }

    render(currencies) {
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
                        return (
                            `<tr>
                                <td class="currency">${currency.name}</td>
                                <td class="buy">${currency.buy}</td>
                                <td class="sell">${currency.sell}</td>
                            </tr>`
                        )
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