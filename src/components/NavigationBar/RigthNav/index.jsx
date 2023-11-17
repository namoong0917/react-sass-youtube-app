import React from 'react';
import { MdApps, MdNotifications , MdVideoCall } from 'react-icons/md';
import { Tooltip } from "react-tooltip";

const RightNav = () => {
	return (
		<div className='buttons'>
			<button className='icon-container'>
				<MdVideoCall size={25} data-tip='create' data-for='navbar' />
			</button>
			<button className='icon-container'>
				<MdApps size={25} />
			</button>
			<button className='icon-container'>
				<MdNotifications size={25} />
			</button>

			<Tooltip
        id="navbar"
        backgroundColor="grey"
        effect="solid"
        delayHide={150}
        arrowColor="transparent"
      />
		</div>
	)
}

export default RightNav