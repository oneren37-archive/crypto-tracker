import React from "react";
import "./CoinTable.scss"
import {CoinTableRow} from "../coin-table-row/CoinTableRow";

export class CoinTable extends React.Component<any, any>{
    render(){
        return(
            <div className="coins-table-wrapper">
                <table className="coins-table">
                    <thead>
                    <tr>
                        <th className="coins-table-fix-col"><h4>Coin</h4></th>
                        <th><h4>Cost</h4></th>
                        <th><h4>24h%</h4></th>
                        <th><h4>Market cap</h4></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.coins.map(
                            coin => <CoinTableRow coinInfo={coin} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}