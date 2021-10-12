import React from 'react'
import { Link } from 'react-router-dom';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Coin = ({ coin, deleteCoin }) => {

    let percent = coin.price_change_percentage_24h.toFixed(4)

    return (
        <Link to={`/coins/${coin.id}`}>
            <li className="coinlist-item list-group-item list-group-item-action d-flex 
            justify-content-between align-items-center text-dark coin">
                
                <img className="coinList-image" src={coin.image} alt="logo" />
                <span className="text-decoration-none">{coin.current_price} --- </span>

                <span className="text-success mr-2">
                   {percent > 0 ? (<span className="success"><ArrowDropUpIcon style={{color: 'green'}} />{percent}%</span>) 
                   :
                   (<span className="danger"><ArrowDropDownIcon style={{color: 'red' }}/>{percent}%</span>) 
                   }
                </span>

                <i onClick={(e) => {
                        e.preventDefault()
                    deleteCoin(coin.id)
                }}>
                <DeleteForeverIcon />
                </i>
            </li>
        </Link>
    )
}

export default Coin;
