import { A404Ppage } from "../accessories/A404Ppage";
import { Footer } from "../accessories/Footer";
import { Header } from "../accessories/Header";

export default function A404Page() {
  return (
    <div className="max-h-screen">
      <Header />
      <A404Ppage />
      <Footer />
    </div>
  );
}
