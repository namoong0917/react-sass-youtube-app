import axios from "axios";

const instance = axios.create({
	baseURL: "https://youtube.googleapis.com/youtube/v3",
	params
	: {
		key: import.meta.env.VITE_API_KEY
	}
})

// 다른곳에서 불러와 사용할수있게
export default instance;