import React from 'react'
import './headeroptions.css'
import { Avatar } from '@mui/material'

const HeaderOptions = ({avatar, Icon, title}) => {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption__icon'/>}
            {avatar && <Avatar className='headerOption__icon' src = {avatar} />}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
      )
}

export default HeaderOptions