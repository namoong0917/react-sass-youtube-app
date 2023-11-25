import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import VideoCard from '../../components/VideoCard';
import { getVideoInfo } from "../../helpers/fetchingData";
import { SideBarContext } from "../../context/SideBarContext";

const MainPage = () => {
  const stroedVideos = JSON.parse(localStorage.getItem("mainVideos"));
  const [mainVideos, setMainVideos] = useState(stroedVideos || []); // 정보 담아줄 state
  const { setIsToggled } = useContext(SideBarContext);

	// 비동기 요청을 위해 async 로 감싸줌
	// 컴포넌트가 다시 랜더링 될때 디펜던시 array[stroedVideos] 에있는게 변하지 않으면 다시 생성 못하게
  const getMainVideos = useCallback(async () => {
    try {
      if (mainVideos.length === 0) {
        // === !stroedVideos
        // localStorage에 저장된 데이터가 없을때만 다음을 실행
        const res = await axios.get(
          `/search?part=snippet&maxResults=10&q=beautiful%20place`
        );
        let videosArray = await res.data.items;
        videosArray = await getVideoInfo(videosArray);
        setMainVideos(videosArray);

        localStorage.setItem("mainVideos", JSON.stringify(videosArray));
      }
    } catch (err) {
      console.log(err);
    }
  }, [stroedVideos]);

  useEffect(() => {
    // 비디오 페이지 들어가고 다시 메인페이지 돌아오면 사이드바 보이도록
    setIsToggled(true);
  }, []);

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos]);

  useEffect(() => {
    setIsToggled(true);
  }, [])

  return (
    <section className="mainGallery">
      {mainVideos.map( video => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          video={video}
          img={video.snippet.thumbnails.medium.url}
          info={video.snippet}
          extraInfo={video.extraInfo}
          channelInfo={video.channelInfo}
        />
      ))}
    </section>
  );
};

export default MainPage;