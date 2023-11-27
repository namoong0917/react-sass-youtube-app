const formatNumber = num => {
	// 정규식으롷 이루고 싶은 목표 -> 숫자가 뒤에 3자리가 있으면 그 앞에 '.' 를 붙이기
	// 1689042 views -> 1.689.042 views로 변환
	num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export default formatNumber;