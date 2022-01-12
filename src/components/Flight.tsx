import React, {FC} from 'react';
import {FlightProps} from '../interfaces'
import '../App.css';
import {getPrice, getTransfers} from "../tools";

const Flight: FC<FlightProps> = ({fromTime, fromCity, fromDate, toCity, toDate, toTime, transfers, price, currency}) => {
    return (
        <li className='flight'>
            <div>
                <h2 className='flight_company'>Tiny Airlines</h2>
                <div className='flight_btn'>
                    <span className='flight_text'>Купить за </span>
                    <span className='flight_price'>{getPrice(price)}</span>
                    {currency === 'RUB' && <span>₽</span>}
                    {currency === 'USD' && <span>$</span>}
                    {currency === 'EUR' && <span>€</span>}
                </div>
            </div>
            <ul className='flight_list'>
                <li>
                    <time className='flight_time'>{fromTime}</time>
                    <h4>{fromCity}</h4>
                    <time>{fromDate}</time>
                </li>
                <li className='flight_transfers'>
                    <p>
                        {transfers} пересадк{getTransfers(transfers)}
                    </p>
                </li>
                <li>
                    <time className='flight_time'>{toTime}</time>
                    <h4>{toCity}</h4>
                    <time>{toDate}</time>
                </li>
            </ul>
        </li>
    );
};

export default Flight;