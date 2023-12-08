import React, { createContext, useState } from "react";
export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState({
    input: "",
    video: [],
  }); // 검색을하면 검색한 내용 조회

	const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false); // 사이드 메뉴 컨트롤

	return (
		<SearchContext.Provider
			value={{
				showSpecialSearchBar,
        setShowSpecialSearchBar,
        searchQuery,
        setSearchQuery,
			}} {...props} 
		/>
	)
}