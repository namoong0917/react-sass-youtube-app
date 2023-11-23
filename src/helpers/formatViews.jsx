const formatViews = num => {
	if(num > 999 && num < 1000000) {
		return (num/1000).toFixed(0) + 'K'; // 1,000 = 1K (천)
	} else if (num > 100000) {
		return (num/100000).toFixed(0) + 'M'; // 1,000,000 = 1M (백만)
	} else {
		return num;
	}
}

export default formatViews;