import React, { createContext, useState } from "react";
export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
	const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false); // 사이드 메뉴 컨트롤

	return (
		<SearchContext.Provider
			value={{
				showSpecialSearchBar,
				setShowSpecialSearchBar
			}} {...props} 
		/>
	)
}