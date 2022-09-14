import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* consider adding meta with next.seo package */}
      <Header />
      <div className="layout">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
