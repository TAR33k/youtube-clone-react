import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_converter } from "../../data";
import { Link, useNavigate, useParams } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=BA&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items))
      .catch((error) => navigate("/error", { state: { error } }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData
        .filter((item) => item.id !== videoId)
        .map((item, index) => {
          return (
            <Link
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              key={index}
              className="side-video-list"
            >
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} Views</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Recommended;
