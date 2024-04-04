import React from "react";
import { useSelector } from "react-redux";
import './BalanceEnquiry.css';
import Header from '../layout/Header'
import { useNavigate } from "react-router-dom";

const BalanceEnquiry = () => {
    const navigate = useNavigate();
    const balance = useSelector((state) => state.balance.value);
    const notes = useSelector((state) => state.balance.notes);

    const notesArray = Object.entries(notes);

    const handleBack = () =>{
        navigate(-1)
    }
    return (
        <div className="container">
            <div className='medium-box'><Header/></div>
            <div class="d-flex justify-content-center">
                <div class="card p-3">
                    <div class="d-flex flex-row justify-content-between text-align-center">
                    <img src="/img/walletBlack.svg" alt="" className="fa-ellipsis-v"/>
                    </div>
                    <p class="text-dark">Account Balance</p>
                    <div class="card-bottom pt-3 px-3 mb-2">
                    <div class="d-flex flex-row justify-content-between text-align-center">
                        <div class="d-flex flex-column"><span>Balance amount</span><p>₹<span class="text-white"> {balance}</span></p></div>
                    </div>
                    </div>
                </div>
                <div className="card-notes">
                {notesArray.map(([denomination, count]) =>
                <div class="card-bottom pt-3 px-3 mb-2">
                    <div class="d-flex flex-row justify-content-between text-align-center">
                        <div class="d-flex flex-column">
                            <span></span><p>₹<span class="text-white"> 
                            <span className="denomination">{denomination} : </span>
                            <span className="count">{count} notes</span>
                            </span></p></div>
                    </div>
                    </div>
                )}
                </div>
    </div>
    <div className='button-class'>
        <button onClick={handleBack} className='card-button-back'>Back</button>
        </div>
    </div>
    );
}

export default BalanceEnquiry;
