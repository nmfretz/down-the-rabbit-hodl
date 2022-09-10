import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import { navLinks } from "../config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Down the Rabbit Hodl</title>
      </Head>
      <div className="container padding-400">
        <img className="banner" src="/banner-home_cropped.jpg" />
        <a className="banner-attribution" href="">
          Alice in Wonderland Art - Credit: Unknown
        </a>

        <div className="content">
          <h1 className="title">
            <span>Down The Rabbit Hodl - </span>
            <span className="subtitle">a guide to learning about Bitcoin</span>
          </h1>
          <p>
            Welcome! This website serves as a compiled guide to learning about Bitcoin. It is not an exhaustive list of
            resources, but rather a curated list of materials that were formative for me. I am by no means a subject
            matter expert on Bitcoin, nor am I advocating for investing in Bitcoin. This website is purely educational.
          </p>

          <p>
            There is a lot of material here. If you are completely new to Bitcoin it may take significant effort on your
            part to wrap your head around the subject, and that&apos;s completely normal! A proper understanding of
            Bitcoin requires bringing together concepts from computer programming, cryptography, money, economics,
            economic incentives, and game theory.
          </p>

          <div className="guide-img">
            <img src="/conviction-knowledge.jpg" />
            <p>
              <a
                className="attribution"
                href="https://waitbutwhy.com/2019/12/political-disney-world.html"
                target="_blank"
                rel="noreferrer"
              >
                Rollercoaster of Learning - Credit: Wait But Why
              </a>
            </p>
          </div>

          <p>
            My goal is that by the end of this guide you will understand, in detail, the underlying concepts in the
            following descriptions of Bitcoin.
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
            The topic of the actual Bitcoin protocol doesn&apos;t appear until a few sections into this guide. This is
            because there are specific background topics and history that will help put Bitcoin into context for you.
            That being said, if you are feeling a bit impatient and want a quick primer on what Bitcoin is before going
            further, I recommend watching the video below by 3Blue1Brown. This is the video that sent me down the
            Bitcoin rabbit hole back in 2017. I think it does a fantastic job directly describing what Bitcoin is
            without introducing confusing analogies or focusing on price.
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

        <div className="display-flex justify-content-end padding-top-400">
          <Link href={navLinks["what is money"]} passHref>
            <div className="guideLinks | display-flex align-items-center">
              <p>
                <span>Next </span>
                <span className="hidden-on-mobile">(What is Money?)</span>
              </p>
              <img className="carrot" src="/carrot-right2.png" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
