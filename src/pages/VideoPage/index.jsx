import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { SideBarContext } from '../../context/SideBarContext';

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

	return (
		<div>
			<YouTube className='youtube-player' videoId={videoId} onPlay={onPlayerReady} opts={opts} />
		</div>
	)
}

export default VideoPage