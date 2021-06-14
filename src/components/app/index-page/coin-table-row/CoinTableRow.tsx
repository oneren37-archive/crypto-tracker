import React from "react";
import "./CoinTableRow.scss"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export class CoinTableRow extends React.Component<any, any>{
    render(){
        return(
            <tr>
                <td className="title coins-table-fix-col">
                    <div className="title__favourite"><FontAwesomeIcon icon={faStar} /></div>
                    <img className="title__img" src={this.props.coinInfo.img} alt="" />
                    <h4 className="title__title">{this.props.coinInfo.title}</h4>
                    <span className="title__tag">{this.props.coinInfo.tag}</span>
                </td>
                <td className="coins-table-cost">{this.props.coinInfo.cost}</td>
                <td className="coins-table-24h"> {this.props.coinInfo.h24} </td>
                <td className="coins-table-cap"> {this.props.coinInfo.marketcap} </td>
            </tr>
        )
    }
}