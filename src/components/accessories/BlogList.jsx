import { useEffect, useState } from "react";
import Link from "next/link";
import { Blog2 } from "./Blog2";

export const BlogList = ({ articles }) => {
  const [articless, SetArticles] = useState([]);
  const [newsNumber, setNewsNumber] = useState(15);
  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col">
        <div className="pt-[100px] ">
          <div className=" flex flex-col gap-[32px]">
            <div className="text-[24px]">All Blog Post</div>
          </div>

          <div className="grid grid-cols-3 grid-rows-5 gap-4 justify-center items-center ">
            {articless.slice(0, newsNumber).map((cards, index) => {
              return (
                <Link href={`/blog-post/${cards.id}`}>
                  <Blog2
                    key={index}
                    badge={cards.tag_list[0]}
                    title={cards.description}
                    date={cards.readable_publish_date}
                    url={cards.cover_image}
                  />
                </Link>
              );
            })}
          </div>
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
