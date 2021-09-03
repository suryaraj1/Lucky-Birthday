import React from 'react';
import './AlertTile.css';

const AlertTile = ({ success }) => {
    return (
        <div className='alert-tile-wrapper'>
            {success ? (
            <div className='alert-tile'>
                <div className='alert-tile-img-wrapper'>
                    <img src="/image/tick-img.png" alt="alert-img"/>
                </div>
                <p>Congratulations!!🎉🎉 You have a lucky birthday!</p>
            </div>
            ) : (
            <div className='alert-tile failure'>
                <div className='alert-tile-img-wrapper failure'>
                    <img src="/image/cross-img.svg" alt="alert-img"/>
                </div>
                <p>Harsh Luck!😭 You don't have a lucky birthday..</p>
            </div>
            )}
        </div>
    )
}

export default AlertTile;