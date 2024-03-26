import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      
      <div className="post__body">
        <p>{message}</p>
        <img src={imageUrl} alt="" className="post__image" />
      </div>
      
      <div className="post__buttons">
        <div className="post__button">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__button">
          <ChatOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__button">
          <ShareOutlinedIcon />
          <p>Share</p>
        </div>
        <div className="post__button">
          <SendOutlinedIcon />
          <p>Send</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
