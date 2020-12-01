import React,{Fragment} from 'react';
import './CoinInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as Star } from '@fortawesome/free-solid-svg-icons'


<FontAwesomeIcon className='full-icon' icon={Star} />

function CoinInfo({coinList}) {
    console.log('list:',coinList);
    const renderCoin = coinList.map((coin,index)=>(
        <Fragment key={index}>
            <FontAwesomeIcon className='empty-icon' icon={faStar} />
            <li>{coin.symbol}</li>
        </Fragment>
    ))
    return (
        <div>
            <ul>
                <li>
                    <div className='coin-list-menu'>
                        <p>자산</p>
                        <p>Price</p>
                        <p>1H</p>
                        <p>24H</p>
                        <p>7D</p>
                        <p>24H Volume</p>
                    </div>
                </li>
                {renderCoin}
            </ul>
        </div>
    )
}

export default CoinInfo;
