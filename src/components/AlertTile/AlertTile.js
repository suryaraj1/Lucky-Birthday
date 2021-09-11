import React from 'react';
import './AlertTile.css';

const AlertTile = ({ success }) => {
    return (
        <div className='alert-tile-wrapper'>
            {success ? (
            <div className='alert-tile'>
                <div className='alert-tile-img-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p>Congratulations!!🎉🎉 You have a lucky birthday!</p>
            </div>
            ) : (
            <div className='alert-tile failure'>
                <div className='alert-tile-img-wrapper failure'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p>Harsh Luck!😭 You don't have a lucky birthday..</p>
            </div>
            )}
        </div>
    )
}

export default AlertTile;