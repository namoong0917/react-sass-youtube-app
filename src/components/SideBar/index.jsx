import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize';
import SmallSideBar from './SmallSideBar';
import BigSideBar from './BigSideBar';
import { SideBarContext } from '../../context/SideBarContext';

const SideBar = () => {
	const {width} = useWindowSize();
	const {isToggled, setIsToggled} = useContext(SideBarContext);

	useEffect(() => {
		width <= 1300 // width가 1300보다 작거나 같을때는
		? setIsToggled(false) // setIsToggled 을 false 로
		: setIsToggled(true); // 아닐 때는 setIsToggled 을 true로
	}, [])

	return (
		<>
			{width < 792 // width가 792px 보다 작을때는 null
			? null
			: (
				isToggled
					? <BigSideBar />
					: <SmallSideBar />
				)
			}
		</>
	);
};

export default SideBar