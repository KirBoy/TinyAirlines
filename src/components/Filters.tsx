import React, {FC} from 'react';
import {IFilters} from "../interfaces";
import '../App.css'


const Filters: FC<IFilters> = ({currency, transfers, setFilters}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.checked) {
            setFilters((prevState) => ({
                ...prevState,
                transfers: [...prevState.transfers, +e.target.value]
            }));
        } else {
            setFilters((prevState) => ({
                ...prevState,
                transfers: prevState.transfers.filter(el => el !== +e.target.value)
            }));
        }

    }

    const onClick = (e: React.MouseEvent<HTMLElement>, value: string) => {
        setFilters((prevState) => ({
            ...prevState,
            currency: value
        }));

    }

    const resetFilter = () => {
        setFilters((prevState) => ({
            ...prevState,
            transfers: []
        }));
    }

    const filterOnly = (e: React.MouseEvent<HTMLElement>, value: string) => {
        if (transfers.some(el => el === +value)) {
            setFilters((prevState) => ({
                ...prevState,
                transfers: prevState.transfers.filter(el => el === +value)
            }));
        } else {
            setFilters((prevState) => ({
                ...prevState,
                transfers: [+value]
            }));
        }

    }

    return (
        <div className='filters'>
            <h2 className='title'>Валюта</h2>
            <ul className='filters_currencies'>
                <li className={currency === 'RUB' ? 'filters_currency active' : 'filters_currency'}
                    onClick={(e) => onClick(e, 'RUB')}>RUB
                </li>
                <li className={currency === 'USD' ? 'filters_currency active' : 'filters_currency'}
                    onClick={(e) => onClick(e, 'USD')}>USD
                </li>
                <li className={currency === 'EUR' ? 'filters_currency active' : 'filters_currency'}
                    onClick={(e) => onClick(e, 'EUR')}>EUR
                </li>
            </ul>
            <h2>Количество пересадок</h2>
            <span onClick={resetFilter}>Сбросить фильтры</span>
            <ul className='filters_list'>
                <li className='filters_item'>
                    <label className='filters_label'>
                        <input className='filters_checkbox' type="checkbox" value='0'
                               checked={transfers.some(el => el === 0)} onChange={onChange}/>
                        <span className='filters_desc'>Без пересадок</span>
                    </label>
                    <span className='filters_only' onClick={(e) => filterOnly(e, '0')}>Только</span>
                </li>
                <li className='filters_item'>
                    <label className='filters_label'>
                        <input className='filters_checkbox' type="checkbox" value='1'
                               checked={transfers.some(el => el === 1)}
                               onChange={onChange}/>
                        <span className='filters_desc'>1 пересадка</span>
                    </label>
                    <span className='filters_only' onClick={(e) => filterOnly(e, '1')}>Только</span>
                </li>
                <li className='filters_item'>
                    <label className='filters_label'>
                        <input className='filters_checkbox' type="checkbox" value='2'
                               checked={transfers.some(el => el === 2)}
                               onChange={onChange}/>
                        <span className='filters_desc'>2 пересадки</span>
                    </label>
                    <span className='filters_only' onClick={(e) => filterOnly(e, '2')}>Только</span>
                </li>
                <li className='filters_item'>
                    <label className='filters_label'>
                        <input className='filters_checkbox' type="checkbox" value='3'
                               checked={transfers.some(el => el === 3)}
                               onChange={onChange}/>
                        <span className='filters_desc'> 3 пересадки</span>
                    </label>
                    <span className='filters_only' onClick={(e) => filterOnly(e, '3')}>Только</span>
                </li>
            </ul>
        </div>
    );
};

export default Filters;