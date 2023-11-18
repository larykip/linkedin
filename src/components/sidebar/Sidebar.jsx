import React from 'react'
import { Avatar } from '@mui/material'
import './sidebar.css'
import bcpic from '../images/color-code.jpg'

const Sidebar = () => {
    const recentItems = (topic) => {
        return (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
        )
    }
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={bcpic} alt='profile' />
            <Avatar className='sidebar__avatar' />
            <h2>Hillary Kiprotich</h2>
            <h4>Alumni at Karatina University</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>7,544</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,544</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItems('React JS')}
            {recentItems('Programming')}
            {recentItems('Software Engineering')}
            {recentItems('Design')}
            {recentItems('Developer')}
        </div>
    </div>
  )
}

export default Sidebar