import React from "react";
import '../component/MainView.css';

const Header = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const dateString = currentDate.toLocaleDateString();
    const timeString = currentDate.toLocaleTimeString();

    let greeting = "";
    if (currentHour >= 4 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return (
        <div className='header'>
            <div className='heading'>
                <h2>Hello, {greeting}</h2>
                <p>Please Select Your Transaction</p>
            </div>
            <div>
                <img src='./img/day-icon.svg' alt='' />
                <p>{dateString}<br />{timeString}</p>
            </div>
        </div>
    );
}

export default Header;
