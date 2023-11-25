import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { SideBarContext } from '../../context/SideBarContext';
import { BiDislike, BiLike } from 'react-icons/bi';
import { RiFlagLine, RiShareForwardLine } from 'react-icons/ri';
import { MdPlaylistAdd } from 'react-icons/md';
import dayjs from 'dayjs';

const VideoPage = () => {
	const {videoId} = useParams();
	let location = useLocation();
	const {state: currentVideo} = location;

	const { setIsToggled } = useContext(SideBarContext);

	useEffect(() => {
		setIsToggled(false);
	},[])
	const onPlayerReady = (e) => {
		e.target.playVideo();
	}

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
		},
	};

  const videoHeaderMarkUp = (
    <div className="video_main_info">
      <div className="tags">
        {currentVideo?.snippet?.tags?.map((tag, i) => (
          <p className="tag" key={i}>#{tag}</p>
        ))}
      </div>
      <h1>{currentVideo.snippet.title}</h1>
      <div className="videoplayer_metadata">
        <span>{currentVideo.snippet.title} views</span>
        <span className="dot_separator"> &#8226; </span>
        <span>
          {dayjs(currentVideo.snippet.publishedAt).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );

	return (
		<section className="videoPage">
      <div className="columns_container">
        <div className="column column_1">
          <div className="youtube_player_container">
            <YouTube
              className="youtube_player"
              videoId={videoId}
              onPlay={onPlayerReady}
              opts={opts}
            />
          </div>
          <div className="videoplayer_info">
            {/* {videoHeaderMarkUp} */}
						{videoHeaderMarkUp}
            <div className="main_header_buttons">
              <div className="likes_container">
                <div className="likes">
                  <BiLike size={25} />
                  <span>likes</span>
                </div>
                <div className="dislikes">
                  <BiDislike size={25} />
                  <span>dislikes</span>
                </div>
              </div>
              <div className="share">
                <RiShareForwardLine size={25} />
                <span>SHARE</span>
              </div>
              <div className="save">
                <MdPlaylistAdd size={25} />
                <span>SAVE</span>
              </div>
              <div className="report">
                <RiFlagLine size={25} />
              </div>
            </div>
          </div>
          <div className="channel_video_info">
            <div className="channel_data">
              <div className="channel_avatar">
                <img
                  src={currentVideo.channelInfo.thumbnails.default.url}
                  alt="avatar"
                />
              </div>
              <div className="channel_title">
                <a href="/">{currentVideo.channelInfo.title}</a>
                <span>{currentVideo.channelInfo.subscriberCount} subscribers</span>
              </div>
              <div className="channel_subscribe">
                <button>SUBSCRIBED</button>
              </div>
            </div>
            <div className="video_description">
							{currentVideo.channelInfo.subscriberCount}
						</div>
          </div>
          <div className="video_comments_container">
            <div className="video_comments_count">
							{currentVideo.extraInfo.commentCount} Comments
						</div>
            <div className="video_comments">
							{/* {videoCommentsMarkUp} */}
							</div>
          </div>
        </div>
      </div>
    </section>
	)
}

export default VideoPage