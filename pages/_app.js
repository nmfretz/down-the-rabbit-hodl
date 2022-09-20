import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import "../styles/globals.css";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  return (
    <Layout>
      <AnimatePresence>
        <motion.div key={asPath} exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
