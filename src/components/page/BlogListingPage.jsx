import { Bloglisting } from "../accessories/BlogList";
import { Footer } from "../accessories/Footer";
import { Header } from "../accessories/header";

export default function BloglistingPage() {
  return (
    <div>
      <Header />
      <Bloglisting />
      <Footer />
    </div>
  );
}
