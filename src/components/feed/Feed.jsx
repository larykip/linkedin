import React, { useEffect, useState } from 'react'
import './feed.css'
import CreateIcon  from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewIcon from '@mui/icons-material/CalendarViewDay'
import InputOption from '../inoptions/InputOption'
import Post from '../posts/Post'
// import { db } from '../firebase'

const Feed = () => {
  const [posts, setPosts] = useState([])

//   useEffect(()=> {
//     db.collection('posts').onSnapshot(snapshot => (
//       setPosts(
//         snapshot.doc.map((doc) => ({
//           id: doc.id,
//           data: doc.data()
//         }))
//       )
//     ))
//   }, [])

  const sendPost = (e) => {
    e.preventDefault()
    setPosts([])
  }
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type='text' />
                    <button type='submit' onClick={sendPost} >Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
              <InputOption Icon={SubscriptionIcon} title='Video' color='#E7A33E' />
              <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
              <InputOption Icon={CalendarViewIcon} title='Write article' color='#7FC15E' />
            </div>
        </div>

        {posts.map((post) => {
          // post
        })}
        <Post name='Mac Tavish' description='Software Engineer' message='lorem ipsum kingfish' />
    </div>
  )
}

export default Feed