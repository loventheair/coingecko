import React, {useState,useEffect} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import CoinInfo from './CoinInfo';


function CoinList() {
    const [currency,setCurrency] = useState('krw');
    const [currentPage,setCurrentPage] = useState(1);
    const [perPage,setPerPage] = useState(50);
    const [coinList,setCoinList] = useState([]);

    let INIT_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
    useEffect(() => {
        getData(INIT_URL)
    }, []);
    const getData  = async (url) => {
        const result = await axios.get(url);
        const { data } = result;
        setCoinList(data);
        console.log('data:',data);
    }
    return (
        <div className='coin-container'>
            <NavBar />
            <CoinInfo coinList={coinList} />
        </div>
    )
}

export default CoinList
