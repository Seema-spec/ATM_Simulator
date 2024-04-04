import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainView from './component/MainView';
import BalanceEnquiry from './component/BalanceEnquiry';
import Deposit from './component/Deposit';
import Withdrawal from './component/Withdrawal';

const App = () => {
  return (
    <Routes>
      {/* Define routes here */}
      <Route path="/" element={<MainView />} /> 
      <Route path="/enquiry" element={<BalanceEnquiry />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdrawal" element={<Withdrawal />} />
    </Routes>
  );
};

export default App;
