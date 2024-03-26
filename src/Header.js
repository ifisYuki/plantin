import React from 'react';
import './Header.css';
import HeaderOption from "./HeaderOption";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
function Header() {
    return (
        <div className='header'>
            <h1></h1>

            <div className="header__left">
                <img 
                    src="https://yukizhuyue.com/wp-content/uploads/2024/03/logo.png" 
                    alt=""
                />

                <div className="header__search">
                    <SearchOutlinedIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://th.bing.com/th/id/R.bc5a6bf2d3de82c1df8dfac81e59cacb?rik=HrPh5PqeYzKTWQ&riu=http%3a%2f%2fwww.phytoimages.siu.edu%2fusers%2fCusman1%2f6_10_13%2fArabidopsisthaliana5.jpg&ehk=0TBdRhPS3jCaW%2b1N52rLgdBi0CYbOtN%2bq1fRViVnJ7Q%3d&risl=&pid=ImgRaw&r=0" title='Me' />
            </div>
        </div>
    );
}

export default Header;