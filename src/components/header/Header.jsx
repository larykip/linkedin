import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../images/linkedin.png'
import myprofile from '../images/0D2A0698.JPG'
import HeaderOptions from '../hoptions/HeaderOptions'
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@mui/icons-material'


const Header = () => {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={logo} alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type='text' />
            </div>
        </div>
        <div className="header__right">
            <HeaderOptions Icon={Home} title = 'Home' />
            <HeaderOptions Icon={SupervisorAccount} title = 'My Network'/>
            <HeaderOptions Icon={BusinessCenter} title='Jobs' />
            <HeaderOptions Icon={Chat} title = 'Messaging' />
            <HeaderOptions Icon={Notifications} title='Notifications' />
            <HeaderOptions avatar={myprofile} title='me' />
        </div>
    </div>
  )
}

export default Header