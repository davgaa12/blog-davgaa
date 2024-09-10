import { useEffect, useState } from "react";
import Link from "next/link";
import { Cros } from "./Cros";

export const Corss = () => {
  const [articless, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=1&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  };
  const handleBackBtn = () => {
    setPage((prevPage) => prevPage - 1);
  };
  const handleFowardBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      {articless.map((article, index1) => {
        return (
          <Cros
            key={index1}
            badge={article.title}
            description={article.description}
            handleBackBtn={handleBackBtn}
            handleFowardBtn={handleFowardBtn}
            url1={article?.cover_image}
          />
        );
      })}
      ;
    </div>
  );
};
