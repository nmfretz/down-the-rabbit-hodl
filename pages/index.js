import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "../config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Down the Rabbit Hodl</title>
      </Head>
      <motion.hr
        className="hr-top"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
      ></motion.hr>
      <motion.hr
        className="hr-bottom"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.6, duration: 0.5 }}
      ></motion.hr>
      <motion.div
        className="container"
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ delay: 1, duration: 0.5, type: "spring", bounce: 0.4, ease: "easeIn" }}
      >
        <div className="content">
          <h1 className="title">a guide to learning about Bitcoin</h1>
          <div className="banner-container">
            <img className="banner-img" src="/banner-home_cropped.jpg" alt="alice in wonderland" />
            <a
              className="attribution"
              href="https://www.dreamstime.com/stock-illustration-falling-alice-down-rabbit-hole-image78805336#_"
              target="_blank"
              rel="noreferrer"
            >
              Falling Alice - Anna Velichkovsky
            </a>
          </div>
          <p className="">
            Welcome! This website serves as a compiled guide to learning about Bitcoin. It is not an exhaustive list of
            resources, but rather a curated list of materials that were formative for me. I am by no means a subject
            matter expert on Bitcoin, nor am I advocating for investing in Bitcoin. This website is purely educational.
          </p>

          <p>
            There is a lot of material here. If you are completely new to Bitcoin it may take significant effort on your
            part to wrap your head around the subject, and that is completely normal! A proper understanding of Bitcoin
            requires bringing together concepts from computer programming, cryptography, money, economics, economic
            incentives, and game theory.
          </p>

          <div className="guide-img">
            <a href="/conviction-knowledge.jpg" target="_blank">
              <img src="/conviction-knowledge.jpg" />
            </a>

            <p>
              <a
                className="attribution"
                href="https://waitbutwhy.com/2019/12/political-disney-world.html"
                target="_blank"
                rel="noreferrer"
              >
                Rollercoaster of Learning - Wait But Why
              </a>
            </p>
          </div>

          <p>
            My goal is that by the end of this guide you will understand, in detail, the following descriptions of
            Bitcoin.
          </p>

          <p className="quote">
            Bitcoin is an open, public, borderless, neutral, and censorship resistant network based on decentralized
            trust.
          </p>

          <p className="quote">
            Bitcoin uses public-key cryptography, peer-to-peer networking, and proof-of-work to process and verify
            payments. Bitcoins are sent (or signed over) from one address to another with each user potentially having
            many, many addresses. Each payment transaction is broadcast to the network and included in the blockchain so
            that the included bitcoins cannot be spent twice. After an hour or two, each transaction is locked in time
            by the massive amount of processing power that continues to extend the blockchain.
          </p>

          <p>
            The topic of the actual Bitcoin protocol does not appear until a few sections into this guide. This is
            because there is some background and history that will help put Bitcoin into context for you. That being
            said, if you are feeling a bit impatient and want a quick primer on what Bitcoin is before going further, I
            recommend watching the video below by 3Blue1Brown. This is the video that sent me down the Bitcoin rabbit
            hole back in 2017. I think it does a fantastic job directly describing what Bitcoin is without introducing
            confusing analogies or focusing on price.
          </p>
        </div>

        <div className="youtube-container">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/bBC-nXj3Ng4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="guide-links-container guide-links-container-home">
          <Link href={navLinks["what is money"]} passHref>
            <motion.div
              className="guide-link"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p>
                <span>Next </span>
                <span className="hidden-on-mobile">(What is Money?)</span>
              </p>
              <svg height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              {/* <img className="carrot-icon" src="/carrot-right2.png" /> */}
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
