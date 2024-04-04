import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withdraw } from '../store/BalanceSlice';
import Header from '../layout/Header';
import './MainView.css';
import { useNavigate } from 'react-router-dom';

const Withdrawal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const balance = useSelector((state) => state.balance.value);
  const notes = useSelector((state) => state.balance.notes);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalNotes, setWithdrawalNotes] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showNotes, setShowNotes] = useState(false);

  const handleBack = () => {
    navigate(-1)
  }

  const handleWithdrawal = () => {
    const amount = parseInt(withdrawalAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid withdrawal amount.');
      return;
    }
    if (amount > balance) {
      setError('Insufficient balance.');
      return;
    }

    let remainingAmount = amount;
    const dispensedNotes = {};

    // Sort the denominations in descending order
    const denominations = Object.keys(notes)
      .map(denom => parseInt(denom))
      .sort((a, b) => b - a);

    for (let denomination of denominations) {
      const numNotesAvailable = notes[denomination];
      if (numNotesAvailable > 0 && denomination <= remainingAmount) {
        const numNotesToDispense = Math.min(Math.floor(remainingAmount / denomination), numNotesAvailable);
        dispensedNotes[denomination] = numNotesToDispense;
        remainingAmount -= denomination * numNotesToDispense;
      }
    }

    if (remainingAmount !== 0) {
      setError('Unable to dispense exact amount. Please enter a different amount.');
      return;
    }
    console.log(dispensedNotes, "notes withdraw")
    setWithdrawalNotes(dispensedNotes)
    dispatch(withdraw({ amount: amount, note: dispensedNotes }));
    setMessage("Successfully withdraw amount")
    setShowNotes(true);
    setWithdrawalAmount('');
    setError('');
  };

  const handleChange = (e) => {
    setMessage('');
    setShowNotes(false)
    setError('')
    setWithdrawalAmount(e.target.value)
  }


  return (
    <div className="container">
      <div className='medium-box'><Header /></div>
      <div class="d-flex justify-content-center">
        <div class="card p-3">
          <div class="d-flex flex-row justify-content-between text-align-center">
            <img src="/img/withdrawalBlack.svg" alt="" className="fa-ellipsis-v" />
          </div>
          <p class="text-dark">Withdraw Money</p>
        </div>
        <div className="card-notes" style={{ flexDirection: "column" }}>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => handleChange(e)}
            placeholder="Enter withdrawal amount"
            className='card-input'
          />
          <div className='button-class'>
            <button onClick={handleBack} className='card-button-back'>Back</button>
            <button onClick={handleWithdrawal} className='card-button'>Withdraw</button>
          </div>
          {showNotes &&
            <div class="card-bottom pt-3 px-3 mb-2">
              <div class="d-flex flex-row justify-content-between text-align-center">
                <div class="d-flex flex-column">
                  <span></span><p><span class="text-white">
                    {Object.keys(withdrawalNotes).map((key, index) => (
                      <span key={index}>
                        <span className="denomination">{key} : </span>
                        <span className="count">{withdrawalNotes[key]} notes</span>
                        {index !== Object.keys(withdrawalNotes).length - 1 && ", "}
                      </span>
                    ))}
                  </span></p></div>
              </div>
            </div>
          }
        </div>
        {error ? <p style={{ color: 'red' }}>{error}</p> : <p style={{ color: 'red' }}>{message}</p>}
      </div>
    </div>
  );
};

export default Withdrawal;
