import Link from "next/link";
import { Blog } from "./Blog";
import { useEffect, useState } from "react";

export const Blogs = ({ articles }) => {
  const [articless, SetArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?")
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center pt-24">
      <div className="  flex flex-col justify-center ">
        <div className=" flex flex-col gap-[32px]">
          <div className="text-[24px]">All Blog Post</div>
          <div className="flex">
            <div className="flex gap-5 pb-10">
              <div className="text-[#D4A373] text-[12px]">All</div>
              <div className="text-[#495057] text-[12px]">Desing</div>
              <div className="text-[#495057] text-[12px]">Travel</div>
              <div className="text-[#495057] text-[12px]">Fashion</div>
              <div className="text-[#495057] text-[12px]">Technology</div>
              <div className="text-[#495057] text-[12px]">Branding</div>
            </div>
            <Link
              href={"/blogpost"}
              className="text-[#495057] text-[12px] pl-[830px]"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 justify-center items-center ">
          {articles.map((cardt, index) => {
            return (
              <Link href={`/blogpost/${cardt.id}`}>
                <Blog
                  key={index}
                  badge={cardt.tag_list[0]}
                  title1={cardt.description}
                  date={cardt.readable_publish_date}
                  url={cardt.cover_image}
                />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center pb-20 pt-10">
          <div className="w-[123px] h-[48px] bg-[#696A754D] rounded-md items-center flex justify-center ">
            Load More
          </div>
        </div>
      </div>
    </div>
  );
};
