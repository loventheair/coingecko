import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { faStar as Star } from '@fortawesome/free-solid-svg-icons'
import './CoinInfo.css'

/* <FontAwesomeIcon className="full-icon" icon={Star} /> */
//detail: https://api.coingecko.com/api/v3/coins/bitcoin

function CoinInfo({ coinList, currency }) {
    
    const changePrice =(price)=>{
        let result =price.split('').reverse()
          .map((item,index)=>{
            if (index%3===2&&index!==price.split('').length-1) {
              item=`,${item}`
            }
            return item;
          }).reverse().join('');
        return result;
    }

    const renderCoin = coinList.map((coin, index) => (
        <tr className="coin-list-tr" key={index}>
            <td className="coin-name">
                <FontAwesomeIcon className="empty-icon" icon={faStar} />
                <Link to={`detail/${coin.id}`}>
                    <span>{coin.name}</span>
                </Link>
            </td>
            <td>
                <span>{coin.symbol}</span>
            </td>
            <td>
                <span>
                    {currency === 'krw' ? '₩' : '$'}
                    {changePrice(coin.current_price.toFixed(0))}
                </span>
            </td>
            <td className="price_percent">
                <span
                    className={
                        coin.price_change_percentage_1h_in_currency.toFixed(
                            1
                        ) >= 0
                            ? 'price-up'
                            : 'price-down'
                    }
                >
                    {coin.price_change_percentage_1h_in_currency.toFixed(1)}%
                </span>
            </td>
            <td className="price_percent">
                <span
                    className={
                        coin.price_change_percentage_24h_in_currency.toFixed(
                            1
                        ) >= 0
                            ? 'price-up'
                            : 'price-down'
                    }
                >
                    {coin.price_change_percentage_24h_in_currency.toFixed(1)}%
                </span>
            </td>
            <td className="price_percent">
                <span
                    className={
                        coin.price_change_percentage_7d_in_currency.toFixed(
                            1
                        ) >= 0
                            ? 'price-up'
                            : 'price-down'
                    }
                >
                    {coin.price_change_percentage_7d_in_currency.toFixed(1)}%
                </span>
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

export default CoinInfo;