import React from 'react'
import './post.css'
import InputOption from '../inoptions/InputOption'
import { Avatar } from '@mui/material'
import ThumbsUpIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatIcon from '@mui/icons-material/ChatOutlined'
import ShareIcon from '@mui/icons-material/ShareOutlined'
import SendIcon from '@mui/icons-material/SendOutlined'

const Post = ({ name, description, message, photoUrl }) => {
    return (
      <div className='post'>
          <div className="post__header">
              <Avatar />
              <div className="post__info">
                  <h2>{ name }</h2>
                  <p>{ description }</p>
              </div>
          </div>
          <div className="post__body">
              <p>{ message }</p>
          </div>
          <div className="post__buttons">
              <InputOption Icon={ThumbsUpIcon} title='Like' color='gray' />
              <InputOption Icon={ChatIcon} title='Comment' color='gray' />
              <InputOption Icon={ShareIcon} title='Share' color='gray' />
              <InputOption Icon={SendIcon} title='Send' color='gray' />
          </div>
      </div>
    )
  }

export default Post