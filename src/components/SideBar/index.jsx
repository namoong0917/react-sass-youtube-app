import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../helpers/useWindowSize';
import SmallSideBar from './SmallSideBar';
import BigSideBar from './BigSideBar';
import { SideBarContext } from '../../context/SideBarContext';

const SideBar = () => {
	const {width} = useWindowSize();
	const { isToggled, setIsToggled } = useContext(SideBarContext);

	useEffect(() => {
		width <= 1300 // width가 1300보다 작거나 같을때는
			? setIsToggled(false) // setIsToggled 을 false 로
			: location.pathname.startsWith('/video') // location.pathname: 비디오 재생할때 얻는 url키값
			? setIsToggled(false)
			: setIsToggled(true); // 아닐 때는 setIsToggled 을 true로
	}, [location.pathname, setIsToggled, width]);

	return (
		<>
			{location.pathname.startsWith('/video/') ? ( // 비디오페이지
					// 기본 화면에서 영상을 클릭하고 페이지를 이동했다면 큰 사이드바를 호출
					isToggled ? ( // 비디오페이지에서 isToggled 일때만
							<BigSideBar /> // 를보여주고
						) : null // 아닐때는 null
					// 비디오 페이지가 아닐경우에는 아래의로직 // width가 792px 보다 작을때는 null
					) : width < 792 ? null : isToggled ? (
						<BigSideBar />
					) : (
						<SmallSideBar />
			)}
		</>
	);
};

export default SideBar;