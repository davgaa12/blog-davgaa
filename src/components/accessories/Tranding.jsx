import { useEffect, useState } from "react";
import { Tran } from "./Tran";

export const Tranding = (articless) => {
  const [articles, SetArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&&top=2")
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" pt-[100px] flex  justify-center ">
      <div className="flex flex-col">
        <div className="pt-[100px]">
          <div className="text-[24px] pb-10">Trending</div>
          <div className="flex gap-5">
            {articles.map((card, index) => {
              return (
                <Tran
                  key={index}
                  tag={card?.tag_list[0]}
                  tag2={card?.description}
                  url={card?.cover_image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
