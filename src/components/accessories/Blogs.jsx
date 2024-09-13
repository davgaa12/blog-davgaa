import Link from "next/link";
import { Blog } from "./Blog";
import { useEffect, useState } from "react";

export const Blogs = ({ articles }) => {
  const [articless, SetArticles] = useState([]);
  const [tag, setTag] = useState("");
  const [newsNumber, setNewsNumber] = useState(9);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?${tag === "" ? "" : "tag=" + tag}`)
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  };
  console.log("articles:", articless);
  useEffect(() => {
    fetchData();
  }, [tag]);

  return (
    <div className="flex justify-center pt-24">
      <div className="  flex flex-col justify-center ">
        <div className=" flex flex-col gap-[32px]">
          <div className="text-[24px]">All Blog Post</div>
          <div className="flex">
            <div className="flex gap-5 pb-10">
              <button
                className={`text-[#495057] text-[12px] ${
                  tag === "" ? "text-orange-300" : "text-[#495057]"
                }`}
                onClick={() => {
                  setTag("");
                }}
              >
                All
              </button>
              <button
                className={`text-[#495057] text-[12px] ${
                  tag === "discuss" ? "text-orange-300" : "text-[#495057]"
                }`}
                onClick={() => {
                  setTag("discuss");
                }}
              >
                Desing
              </button>
              <button
                className={`text-[#495057] text-[12px] ${
                  tag === "top7" ? "text-orange-300" : "text-[#495057]"
                }`}
                onClick={() => {
                  setTag("top7");
                }}
              >
                Travel
              </button>
              <button
                className={`text-[#495057] text-[12px] ${
                  tag === "ruby" ? "text-orange-300" : "text-[#495057]"
                }`}
                onClick={() => {
                  setTag("ruby");
                }}
              >
                Fashion
              </button>
              <button
                className={`text-[#495057] text-[12px] ${
                  tag === "githubcopilot" ? "text-orange-300" : "text-[#495057]"
                }`}
                onClick={() => {
                  setTag("githubcopilot");
                }}
              >
                Technology
              </button>
              <button
                className={`text-[#495057] text-[12px] ${
                  tag === "performance" ? "text-orange-300" : "text-[#495057]"
                }`}
                onClick={() => {
                  setTag("performance");
                }}
              >
                Branding
              </button>
            </div>
            <Link
              href={"/blog-post"}
              className="text-[#495057] text-[12px] pl-[830px] hover:text-orange-500"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 justify-center items-center ">
          {articless.slice(0, newsNumber).map((cardt, index) => {
            return (
              <Link href={`/blog-post/${cardt.id}`}>
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
          {newsNumber + 3 < articless.length && (
            <button
              className="w-[123px] h-[48px] bg-[#696A754D] rounded-md items-center flex justify-center  hover:bg-black hover:text-white "
              onClick={() => {
                // if (newsNumber + 3 < articless.length) {
                setNewsNumber((n) => n + 3);
                // }
              }}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
