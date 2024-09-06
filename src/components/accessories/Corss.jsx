import { useEffect, useState } from "react";

import { Cros } from "./Cros";

export const Corss = () => {
  const [articles, SetArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=1&&top=1")
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {articles.map((card, index) => {
        return <Cros key={index} url1={card?.cover_image} />;
      })}
    </div>
  );
};
