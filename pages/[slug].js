import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { navLinks } from "../config";
import Head from "next/head";

export default function PostPage({
  frontmatter: { title, cover_image, cover_image_attribution, cover_image_href, cover_image_alt, prev_page, next_page },
  slug,
  content,
}) {
  let capitalizedTitle = "";
  for (const word of title.split(" ")) {
    capitalizedTitle += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }

  return (
    <>
      <Head>
        <title>{capitalizedTitle}</title>
      </Head>
      <div className="container padding-400">
        <img className="banner" src={cover_image} alt={cover_image_alt} />
        <a className="banner-attribution" href={cover_image_href} target="_blank" rel="noreferrer">
          {cover_image_attribution}
        </a>

        <h1 className="title">{title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        <div className="display-flex justify-content-space-between padding-top-400">
          <Link href={`${navLinks[prev_page]}`} passHref>
            <div className="guideLinks | display-flex align-items-center">
              <img className="carrot" src="/carrot-left2.png" />
              <span>Prev</span>
              <span className="hidden-on-mobile">{` (${prev_page})`}</span>
            </div>
          </Link>
          {navLinks[next_page] && (
            <Link href={`${navLinks[next_page]}`} passHref>
              <div className="guideLinks | display-flex align-items-center">
                <p>
                  <span>Next </span>
                  <span className="hidden-on-mobile">{`(${next_page})`}</span>
                </p>
                <img className="carrot" src="/carrot-right2.png" />
              </div>
            </Link>
          )}
        </div>
      </div>
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
