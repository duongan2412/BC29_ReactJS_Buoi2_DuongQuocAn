import React, { Component } from 'react';
import style from "./style.module.css";

export default class ProductLst extends Component {
    render() {
        const { url } = this.props.item;
        return (
            <div className="col-2">
                <img onClick={() => {
                    this.props.selectedProduct(this.props.item);
                }}
                    src={url} className={`img-fluid ${style.products}`} alt="..." />
            </div>
        )
    }
}
