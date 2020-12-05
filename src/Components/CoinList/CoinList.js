import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import CoinInfo from './CoinInfo'

function CoinList() {
    const [currency, setCurrency] = useState('krw')
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(50)
    const [coinList, setCoinList] = useState([])

    let INIT_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
    useEffect(() => {
        getData(INIT_URL);
        console.log('per Page:',perPage);
    }, [perPage])
    const getData = async (url) => {
        const result = await axios.get(url)
        const { data } = result
        let newList = data.map((coin) =>{
                return {
                    ...coin,
                    bookmark:false,
                }
        })
        setCoinList(newList);
    }
    const optionHandler = (e) =>{
        setPerPage(e.target.value);
    }
    return (
        <div className="coin-container">
            <NavBar />
            <div className='select-container'>
                <select>
                    <option value='all'>전체보기</option>
                    <option value='bookmark'>북마크 보기</option>
                </select>
                <select>
                    <option value=''>KRW보기</option>
                    <option>USD보기</option>
                </select>
                <select onChange={optionHandler} value={perPage}>
                    <option value='10'>10개</option>
                    <option value='30'>30개</option>
                    <option value='50'>50개</option>
                </select>
            </div>
            <CoinInfo coinList={coinList} currency={currency} />
        </div>
    )
}

export default CoinList
