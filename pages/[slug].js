import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "../config";
import Head from "next/head";

export default function PostPage({ frontmatter: { title, prev_page, next_page }, slug, content }) {
  let capitalizedTitle = "";
  for (const word of title.split(" ")) {
    capitalizedTitle += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }

  return (
    <>
      <Head>
        <title>{capitalizedTitle}</title>
      </Head>
      <hr className="hr-top"></hr>
      <hr className="hr-bottom"></hr>
      <motion.div
        className="container"
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring", bounce: 0.4, ease: "easeIn" }}
      >
        {/* <img className="banner" src={cover_image} alt={cover_image_alt} />
        <a className="attribution" href={cover_image_href} target="_blank" rel="noreferrer">
          {cover_image_attribution}
        </a> */}

        {/* <DesktopNav order={order} title={title} /> */}

        <h1 className="title">{title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        <div className="guide-links-container">
          <Link href={`${navLinks[prev_page]}`} passHref>
            <motion.div
              className="guide-link"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* <img className="carrot-icon" src="/carrot-left2.png" /> */}
              <svg height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  transform="scale (-1, 1)"
                  transform-origin="center"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span>Prev</span>
              <span className="hidden-on-mobile">{` (${prev_page})`}</span>
            </motion.div>
          </Link>
          {navLinks[next_page] && (
            <Link href={`${navLinks[next_page]}`} passHref>
              <motion.div
                className="guide-link"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p>
                  <span>Next </span>
                  <span className="hidden-on-mobile">{`(${next_page})`}</span>
                </p>
                <svg height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {/* <img className="carrot-icon" src="/carrot-right2.png" /> */}
              </motion.div>
            </Link>
          )}
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("markdown"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("markdown", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
