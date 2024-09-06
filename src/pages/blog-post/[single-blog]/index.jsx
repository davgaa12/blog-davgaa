import { Single } from "@/components/page/Single";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function SingleBlog() {
  const router = useRouter();
  const [articles, SetArticles] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.singleblog}`)
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  };
  useEffect(() => {
    fetchData();
  });

  return <Single articles={articles} />;
}
