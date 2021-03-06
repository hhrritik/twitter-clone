import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterFollowButton,
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterVideoEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1384541512298496004"} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='hhrritik'
          options={{ height: 400 }}
        />

        <TwitterVideoEmbed id={"560070183650213889"} />

        <TwitterFollowButton screenName={"hhrritik"} />
      </div>
    </div>
  );
}

export default Widgets;
