import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { navLinks } from "../config";
import Head from "next/head";
import { DesktopNav } from "../components/DesktopNav";

export default function PostPage({
  frontmatter: {
    title,
    order,
    cover_image,
    cover_image_attribution,
    cover_image_href,
    cover_image_alt,
    prev_page,
    next_page,
  },
  slug,
  content,
}) {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  let capitalizedTitle = "";
  for (const word of title.split(" ")) {
    capitalizedTitle += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }

  return (
    <>
      <Head>
        <title>{capitalizedTitle}</title>
      </Head>
      <div className="container">
        {/* <img className="banner" src={cover_image} alt={cover_image_alt} />
        <a className="attribution" href={cover_image_href} target="_blank" rel="noreferrer">
          {cover_image_attribution}
        </a> */}

        <DesktopNav order={order} title={title} />

        <h1 className="title guide-title">{title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        <div className="guide-links-container">
          <Link href={`${navLinks[prev_page]}`} passHref>
            <div className="guide-link">
              <img className="carrot-icon" src="/carrot-left2.png" />
              <span>Prev</span>
              <span className="hidden-on-mobile">{` (${prev_page})`}</span>
            </div>
          </Link>
          {navLinks[next_page] && (
            <Link href={`${navLinks[next_page]}`} passHref>
              <div className="guide-link">
                <p>
                  <span>Next </span>
                  <span className="hidden-on-mobile">{`(${next_page})`}</span>
                </p>
                <img className="carrot-icon" src="/carrot-right2.png" />
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
