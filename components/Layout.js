import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* add meta either manually or with next.seo package */}
      {/* <Meta /> */}
      <div className="display-flex flex-direction-column">
        <Header />
        <div className="layout | display-flex">
          <aside className="aside">
            <Nav />
          </aside>
          <main className="main">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
