import { Footer } from "../accessories/Footer";
import { Header } from "../accessories/header";
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
