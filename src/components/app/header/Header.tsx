import React from "react";
import "./Header.scss"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Header extends React.Component {
    render() {
        return (
            <header className="header-wrapper">
                <div className="header container">
                    <h1 className="logo">Crypto Tracker</h1>
                    <ul className="header-menu">
                        <li className="header-search">
                            <FontAwesomeIcon className="search" icon={faSearch} />
                            <label>
                                <input
                                    type="text"
                                    className="header__search-input"
                                    placeholder="Search" />
                            </label>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
