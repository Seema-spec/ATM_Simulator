import React from 'react';
import './MainView.css';
import { Box, Card, CardContent, Typography } from '@mui/material';
import CustomCard from './CustomCard';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';

const MainView = () => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(route)
    }

    return (
        <div className='container'>
            <div className='medium-box'>
                <Header/>
                <div className='inner-container'>
                    <div className='left-container'>
                        <Card className='transaction-card' >
                            <CardContent>
                                <Box className='transaction-content'>
                                    <img src='./img/money-withdrawal.svg' alt='' />
                                    <Typography variant="h6" component="div" className='transaction-title'>
                                        Money Withdrawal
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Card className='transaction-card'>
                            <CardContent>
                                <Box className='transaction-content'>
                                    <img src='./img/deposit.svg' alt='' />
                                    <Typography variant="h6" component="div" className='transaction-title'>
                                        Money Deposit
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='right-container'>
                        <CustomCard
                            iconSrc="./img/wallet.svg"
                            title="Balance Enquiry"
                            onClick={() => handleNavigate("/enquiry")}
                        />
                        <CustomCard
                            iconSrc="./img/withdrwal.svg"
                            title="Withdrawal"
                            onClick={() => handleNavigate("/withdrawal")}
                        />
                        <CustomCard
                            iconSrc="./img/depositIn.svg"
                            title="Deposit"
                            onClick={() => handleNavigate("/deposit")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainView;
