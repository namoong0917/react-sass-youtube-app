/* eslint-disable react/prop-types */
import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const VideoCard = ({id, video, img, info, extraInfo, channelInfo}) => {
	return (
		<div className='videoCard'>
			<Link to={`/video/${id}`} state={{...video }}>
				<div className='video_preview'>
					<img src={img} alt={info.title} />
					{
						extraInfo.duration ?
						<div className='video_duration'>
							<span>{extraInfo.duration}</span>
						</div>
						:
						null
					}
				</div>
				<div className='video_info_container'>
					<div className='avatar_container'>
						<img 
							src={img} 
							alt={`${info.channelTitle} avatar`}
							className='avatar'
						/>
					</div>
					<div className='video_text_container'>
						<h3>
							{
								info.title.length > 60
								? (info.title.substring(0, 60) + '...')
								: info.title
							}
						</h3>
						<div className='video_info'>
							<Link to={`/channel/${channelInfo.customUrl}`}>
								<div className='channelName'>
									{info.channelTitle}
								</div>
							</Link>
							<div className='video_metadata'>
								<span>{extraInfo.viewCount} views</span>
								<span className='dot_separator'> &#8226;</span>
								<span>{info.publishedAt}</span>
							</div>
						</div>
					</div>
					<div className='dots_container'>
						<BiDotsVerticalRounded size={25} className='dots'/>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default VideoCard