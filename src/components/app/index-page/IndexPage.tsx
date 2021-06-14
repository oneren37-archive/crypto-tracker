import React from "react";
import {Header} from "../header/Header";
import {CoinTable} from "./coin-table/CoinTable";


export class IndexPage extends React.Component<any, any>{

    private _coinData = {
        "coins": [
            {
                "title": "Bitcoin",
                "img": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
                "tag": "BTC",
                "cost": "$41,645.32",
                "h24": "34%",
                "marketcap": "$87,935,345.75"
            },
            {
                "title": "Bitcoin",
                "img": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
                "tag": "BTC",
                "cost": "$41,645.32",
                "h24": "34%",
                "marketcap": "$87,935,345.76"
            },
            {
                "title": "Bitcoin",
                "img": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
                "tag": "BTC",
                "cost": "$41,645.32",
                "h24": "34%",
                "marketcap": "$87,935,345.76"
            }
        ]
    }

    render() {
        return(
            <div>
                <Header />
                <main className="container">
                    <CoinTable
                        coins={this._coinData.coins}
                    />
                </main>
            </div>
        );
    }
}