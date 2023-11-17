import React from 'react'
import LeftNav from './LeftNav/index';
import SearchBar from './SearchBar/index';
import RightNav from './RigthNav/index';

const NavigationBar = () => {
	return (
		<nav className='Navbar'>
			<LeftNav />
			<SearchBar />
			<RightNav />
		</nav>
	)
}

export default NavigationBar