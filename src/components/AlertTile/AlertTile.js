import React from 'react';
import './AlertTile.css';

const AlertTile = ({ success }) => {
    return (
        <div className='alert-tile-wrapper'>
            {success ? (
            <div className='alert-tile'>
                <div className='alert-tile-img-wrapper'>
                    <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="alert-img"/>
                </div>
                <p>Congratulations!!🎉🎉 You have a lucky birthday!</p>
            </div>
            ) : (
            <div className='alert-tile failure'>
                <div className='alert-tile-img-wrapper failure'>
                    <img src="https://www.shareicon.net/data/2016/08/20/817729_close_395x512.png" alt="alert-img"/>
                </div>
                <p>Harsh Luck!😭 You don't have a lucky birthday..</p>
            </div>
            )}
        </div>
    )
}

export default AlertTile;