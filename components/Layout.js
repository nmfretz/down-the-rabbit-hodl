import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* consider adding meta with next.seo package */}
      <div className="layout">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
