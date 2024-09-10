import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ childer }) => {
  return (
    <div>
      <Header />
      {childer}
      <Footer />
    </div>
  );
};
export default MainLayout;
