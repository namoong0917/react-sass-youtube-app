import React, { useContext } from "react";
import LeftNav from './LeftNav/index';
import SearchBar from './SearchBar/index';
import RightNav from './RigthNav/index';
import { BiArrowBack } from 'react-icons/bi';
import { ImSearch } from 'react-icons/im';
import { MdKeyboardVoice } from "react-icons/md";
import { SearchContext } from '../../context/SearchContext';
import useWindowSize from '../../helpers/useWindowSize';

const NavigationBar = () => {

	const { width } = useWindowSize();
	const {
		showSpecialSearchBar, setShowSpecialSearchBar
	} = useContext(SearchContext);
	const specialSearchBarRender = (
		<div className='special_searchbar'>
			<button onClick={() => setShowSpecialSearchBar(false)}>
				<BiArrowBack size={25} />
			</button>
			<form>
				<input type="text" name='search' placeholder='Search' />
				<button type='submit'>
					<ImSearch size={20} />
				</button>
			</form>
			<button className='icon-container voiceIcon'>
				<MdKeyboardVoice size={25} />
			</button>
		</div>
	)

	return (
		<nav className='Navbar'>
			{width <= 640 && showSpecialSearchBar ? // 640 위면
			specialSearchBarRender // 이것을 보여주고
			: // 아니라면 아래 내용을 보여줌
			<>
				<LeftNav />
				<SearchBar />
				<RightNav />
			</>
		}
		</nav>
	)
}

export default NavigationBar