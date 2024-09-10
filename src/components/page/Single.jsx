import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Singelblog } from "../accessories/Singelblog";

export const Single = ({ articles }) => {
  return (
    <div>
      <Header />

      <Singelblog
        badge={articles.tag_list}
        title={articles.description}
        date={articles.readable_publish_date}
        img={articles.cover_image}
      />

      <Footer />
    </div>
  );
};
