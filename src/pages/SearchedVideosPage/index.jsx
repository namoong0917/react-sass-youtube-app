import React, { useCallback, useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { SideBarContext } from "../../context/SideBarContext";
import { getVideoInfo } from "../../helpers/fetchingData";
import VideoCard from "../../components/VideoCard";

const SearchedVideosPage = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const { searchQuery } = useContext(SearchContext);
  const { setIsToggled } = useContext(SideBarContext);

  const loadVideos = useCallback(async () => {
    setIsToggled(true);
    const videos = await getVideoInfo(searchQuery.videos);
    setSearchVideos(videos);
  }, [searchQuery.videos, setIsToggled]);

  const searchedVideoMarkup = searchVideos?.map((video) => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      img={video.snippet.thumbnails.medium.url}
      info={video.snippet}
      extraInfo={video.extraInfo}
      channelInfo={video.channelInfo}
    />
  ));

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  return <section className="searchedVideos">{searchedVideoMarkup}</section>;
};

export default SearchedVideosPage;
