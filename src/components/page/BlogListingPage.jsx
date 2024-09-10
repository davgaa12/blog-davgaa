import { BlogList } from "../accessories/BlogList";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export default function BloglistingPage() {
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
