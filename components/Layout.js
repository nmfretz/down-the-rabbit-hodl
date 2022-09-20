import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* consider adding meta with next.seo package */}
      <Header />
      <motion.div className="layout">
        <main>{children}</main>
      </motion.div>
      <Footer />
    </>
  );
};

export default Layout;
