import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as Star } from '@fortawesome/free-solid-svg-icons'
/* <FontAwesomeIcon className="full-icon" icon={Star} /> */

import './CoinInfo.css'

function CoinInfo({ coinList, currency }) {
    console.log('list:', coinList)
    const renderCoin = coinList.map((coin, index) => (
        <tr className="coin-list-tr" key={index}>
            <td>
                <FontAwesomeIcon className="empty-icon" icon={faStar} />
                {coin.name}
            </td>
            <td>{coin.symbol}</td>
            <td>
                {currency === 'krw' ? '₩' : '$'}
                {coin.current_price}
            </td>
            <td className="price_percent">
                {coin.price_change_percentage_1h_in_currency.toFixed(1)}%
            </td>
            <td className="price_percent">
                {coin.price_change_percentage_24h_in_currency.toFixed(1)}%
            </td>
            <td className="price_percent">
                {coin.price_change_percentage_7d_in_currency.toFixed(1)}%
            </td>
            <td>Seoul</td>
        </tr>
    ))
    return (
        <div>
            <table className="coin-list">
                <thead>
                    <tr className="coin-list-menu">
                        <th>자산</th>
                        <th>Price</th>
                        <th>1H</th>
                        <th>24H</th>
                        <th>7D</th>
                        <th>24H Volume</th>
                    </tr>
                </thead>
                <tbody>{renderCoin}</tbody>
            </table>
        </div>
    )
}

export default CoinInfo
