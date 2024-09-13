import { useEffect, useState } from "react";
import { Line1 } from "../icons/Line1";
import { Line2 } from "../icons/Line2";
import { Ognoo } from "../icons/Ognoo";

export const Cros = ({
  badge,
  description,
  handleBackBtn,
  handleFowardBtn,
  url1,
}) => {
  // const [articles, setArticles] = useState([]);
  // const [page, setPage] = useState(1);
  // const fetchData = () => {
  //   fetch(`4https://dev.to/api/articles?per_page=1&page=${page}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArticles(data);
  //     });
  // };
  // const handleBackBtn = () => {
  //   setPage((prevPage) => prevPage - 1);
  // };
  // const handleFowardBtn = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [page]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleFowardBtn();
  //   }, [page]);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="pt-[100px] flex justify-center ">
      <div className="flex flex-col">
        <div
          style={{
            backgroundImage: `url(${url1})`,
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
          className="  w-[1216px] h-[600px] pt-[333px] pl-3 "
        >
          <div className="w-[598px] h-[252px] bg-white rounded-md flex flex-col  gap-6 pl-10 pt-10">
            <div>
              <div className="w-[98px] h-[27px] bg-[#4B6BFB] text-white  flex flex-col rounded items-center ">
                {badge}
              </div>
              <div className="text-[18px] w-[350px] h-[80px] line-clamp-3">
                {description}
              </div>
            </div>
            <div>
              <Ognoo />
            </div>
          </div>
        </div>
        <div className="flex gap-2 pl-[1130px] pt-4">
          <button className="cursor-pointer hover:shadow-lg hover:shadow-black rounded-md" onClick={handleBackBtn}>
            <Line1 />
          </button>
          <button className="cursor-pointer  hover:shadow-lg hover:shadow-black rounded-md" onClick={handleFowardBtn}>
            <Line2 />
          </button>
        </div>
      </div>
    </div>
  );
};
