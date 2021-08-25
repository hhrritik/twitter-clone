import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Post2 from "./Post2";
function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      {/* TweetBOx */}
      <TweetBox />
      {/* Post */}

      <Post />
      <Post2 />
    </div>
  );
}

export default Feed;
