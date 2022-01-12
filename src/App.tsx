import React, {useState} from 'react';

import './App.css';
import Flight from "./components/Flight";
import {FlightProps, AppState} from './interfaces'
import Filters from "./components/Filters";
import axios from "axios";


function App() {
    const tickets: FlightProps[] = require('./tickets.json').tickets;
    const [filters, setFilters] = useState<AppState>({currency: 'RUB', transfers: []})
    const [currencyExchange,setCurrencyExchange ] = useState<number>(1)
    React.useEffect( () => {
        const fetchDataAsync = async () => {
            const response = await axios.get(`https://free.currconv.com/api/v7/convert?apiKey=cd2ff852330c08894153&q=${filters.currency}_RUB&compact=ultra`).then(res => res.data)
            setCurrencyExchange(response[Object.keys(response)[0]])
        }
        fetchDataAsync()

    }, [filters.currency])

    return (
        <div className="container">
            <Filters currency={filters.currency} transfers={filters.transfers} setFilters={setFilters}/>
            <ul className='flights'>
                {filters.transfers.length ? filters.transfers.map(filter => tickets.filter(el => el.transfers === filter)).flat().map(el =>
                    <Flight key={el.id} fromCity={el.fromCity} fromTime={el.fromTime}
                            fromDate={el.fromDate} toCity={el.toCity} toTime={el.toTime}
                            toDate={el.toDate} transfers={el.transfers} price={Math.round(el.price/currencyExchange)}
                            id={el.id} currency={filters.currency}/>) : tickets.map(el =>
                    <Flight key={el.id} fromCity={el.fromCity} fromTime={el.fromTime}
                            fromDate={el.fromDate} toCity={el.toCity} toTime={el.toTime}
                            toDate={el.toDate} transfers={el.transfers} price={Math.round(el.price/currencyExchange)} id={el.id} currency={filters.currency}/>)}


            </ul>
        </div>
    );
}

export default App;


