import React, { Component } from 'react';
import App from '../Components/App/App';
import Header from '../Components/Layouts/Header/Header';
import style from "./style.module.css";

export default class Home extends Component {
    render() {
        return (
            <div className={style.homeBg}>
                <Header></Header>
                <App></App>
            </div>
        )
    }
}
