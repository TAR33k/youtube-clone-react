import React, { useEffect, useState } from "react";
import "./Search.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API_KEY } from "../../data";
import moment from "moment";

const Search = ({ sidebar }) => {
  const { query } = useParams();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(0);
  const navigate = useNavigate();

  const fetchData = async () => {
    const search_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=${API_KEY}`;

    await fetch(search_url)
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => {
        console.error("Error fetching search data:", error);
        navigate("/error", { state: { error } });
      });
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <div className="feed">
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/video/${item.snippet.categoryId || "0"}/${
                  item.id.videoId
                }`}
                className="card"
              >
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{moment(item.snippet.publishedAt).fromNow()}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
