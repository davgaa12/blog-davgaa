import { useEffect, useState } from "react";
import { Blogs } from "../accessories/Blogs";
import { Footer } from "../accessories/Footer";
import { Header } from "../accessories/header";
import { Corss } from "../accessories/Corss";
import { Tranding, Trann } from "../accessories/Tranding";

export const HomePage = () => {
  const [articles, SetArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=9")
      .then((response) => response.json())
      .then((data) => SetArticles(data));
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="relative">
      <Header />
      <Corss />
      <Tranding />
      <Blogs articles={articles} />
      <Footer />
    </div>
  );
};
