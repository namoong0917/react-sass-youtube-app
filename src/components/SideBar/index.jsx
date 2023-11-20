import React from 'react'
import useWindowSize from '../../helpers/useWindowSize';
import SmallSideBar from './SmallSideBar';
import BigSideBar from './BigSideBar';

const SideBar = () => {
	const {width} = useWindowSize();
	return (
		<>
			{width <792 // width가 792px 보다 작을때는 null
			? null
			: (
				width < 1250 // width가 1250px 보다 작을경우
					? <SmallSideBar />
					: <BigSideBar />
				)
			}
		</>
	)
}

export default SideBar