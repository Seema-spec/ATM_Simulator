import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit } from "../store/BalanceSlice";
import Header from '../layout/Header';
import './MainView.css';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const [denomination, setDenomination] = useState('100');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleDeposit = () => {
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid Number of Notes.');
      return;
    }
    const depositAmount = parseInt(amount) * parseInt(denomination);
    dispatch(deposit({ amount: depositAmount, note: denomination, numNotes: parseInt(amount) }));
    setAmount(0);
    setDenomination('100');
    setError('')
    setMessage('Succesfully Deposit Money')
  };
  const handleBack = () =>{
    navigate(-1)
  }

  const handleChange = (e) =>{
    setAmount(e.target.value);
    setMessage('');
  }

  return (
    <div className="container">
      <div className='medium-box'><Header/></div>
      <div class="d-flex justify-content-center">
        <div class="card p-3">
          <div class="d-flex flex-row justify-content-between text-align-center">
            <img src="/img/withdrawalBlack.svg" alt="" className="fa-ellipsis-v" />
          </div>
          <p class="text-dark">Deposit Money</p>
        </div>
        <div className="card-notes">
          <div className='inner-card-notes'>
          <label>
            Denomination
          </label>
          <select value={denomination} onChange={(e) => setDenomination(e.target.value)} >
              <option value="100">Rs. 100</option>
              <option value="500">Rs. 500</option>
              <option value="1000">Rs. 1000</option>
              <option value="2000">Rs. 2000</option>
            </select>
          </div>
          <div className='inner-card-notes'>
          <label>
            Number of Notes
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => handleChange(e)}
            placeholder="Enter deposit amount"
            className='card-input'
          />
          </div>
        </div>
        <div className='button-class'>
        <button onClick={handleBack} className='card-button-back'>Back</button>
        <button onClick={handleDeposit} className='card-button'>Deposit</button>
        </div>
        {error ? <p style={{ color: 'red' }}>{error}</p> : <p style={{ color: 'red' }}>{message}</p>}
      </div>
    </div>

  );
};

export default Deposit;
