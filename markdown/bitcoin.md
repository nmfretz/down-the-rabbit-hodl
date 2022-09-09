---
title: "bitcoin protocol"
cover_image: "/banner-bitcoin_cropped.jpg"
cover_image_attribution: "Source: need a source"
cover_image_href: "https://waitbutwhy.com/2019/12/political-disney-world.html"
prev_page: "cypherpunks & digital money"
next_page: "blockchain & mining"
---

Congratulations on making it all the way to the Bitcoin Protocol section! By now, you should realize that Bitcoin wasn't a random phenomenon that was invented out of the blue, but was instead built on the shoulders of giants and created to solve a specific problem.

<img src="/bitcoin-prehistory.jpg"/>
<p><a class="attribution" href="https://twitter.com/AnselLindner" target="_blank rel="noreferrer"">Source: Ansel Lindner</a></p>

Before learning in detail about the individual components of the Bitcoin Protocol, I think it is best to have a general understanding of what Bitcoin is as a whole. Without this general understanding, it is difficult to see how the topic you are learning about fits into the bigger picture. With that in mind, watch the two videos below that do a fantastic job directly describing what Bitcoin is without introducing confusing analogies or focusing on price. Do not worry if some of the concepts seem confusing at this point, we will be diving into them later in the guide.

<div class="youtube-container-small">
<div>
<h3>But How Does Bitcoin Actually Work (26:21)</h3>
<p>You may have already watched this video by 3Blue1Brown on the Home page, but it is worth a second watch after learning about the initial challenges with creating a digital currency.</p>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/bBC-nXj3Ng4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div>
<div>
<h3>How Bitcoin Works Under the Hood (22:25)</h3>
<p>This video from back in 2013 has stood the test of time. There are a few out-of-date statements due to the evolving Bitcoin ecosystem (e.g., most modern user-focused wallet providers do not require you to personally download the history of the blockchain). This video is a great one to watch after the 3Blue1Brown video because it covers more aspects of the Bitcoin protocol.</p>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/Lx9zgZCMqXE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div>
</div>

## Satoshi Nakamoto

Read the article below on the creator of Bitcoin, Satoshi Nakamoto. It is a very common misconception that Satoshi Nakamoto invented proof-of-work and some of the other mechanisms of Bitcoin. Instead Satoshi connected various components like public key cryptography, merkle trees, proof-of-work, etc... to create a decentralized network that can achieve consensus without any central authority (a solution to the Byzantine Generals Problem).

- <a href="https://nakamoto.com/satoshi-nakamoto/" target="_blank" rel="noreferrer">Satoshi Nakamoto - Haseeb Qureshi (2019)</a>

## Byzantine Generals Problem

The Bitcoin Protocol is a solution to the Byzantine Generals Problem for a distributed network of computers. The Byzantine Generals Problem is an allegory and thought experiment in computer science that deals with the game theory involved in how a decentralized, distributed network of computers can achieve consensus without a central trusted authority. In the case of Bitcoin, the question becomes: how can everyone in the network agree on the current state of the blockchain?

First, watch this short video from Binance for a brief primer on what the Byzantine Generals Problem is and what a Byzantine Fault Tolerant System is.

<div class="youtube-container-small">
<div>
<h3>What is Byzantine Fault Tolerance (4:10)</h3>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/VWG9xcwjxUg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div>
</div>

Next, read this article for a more detailed understanding of the Byzantine Generals Problem and how it applies to the Bitcoin Protocol.

- <a href="https://komodoplatform.com/en/academy/byzantine-generals-problem/" target="_blank" rel="noreferrer">The Byzantine Generals Problem, Explained - Delton Rhodes (2020)</a>

## Bitcoin's Consensus Model (Nakamoto Consensus)

Yet another common misconception is that proof-of-work alone is what makes Bitcoin a Byzantine Fault Tolerant System and prevents the double-spending of bitcoin. Instead, proof-of-work is just one component of an overall consensus mechanism that results in the Bitcoin Protocol being Byzantine Fault Tolerant. The following excerpt from the open-source book <a href="https://github.com/bitcoinbook" target="_blank" rel="noreferrer">Mastering Bitcoin</a> by Andreas Antonopolous outlines the four components of Bitcoin's consensus mechanism.

<p class="quote">All traditional payment systems depend on a trust model that has a central authority providing a clearinghouse service, basically verifying and clearing all transactions. Bitcoin has no central authority, yet somehow every full node has a complete copy of a public ledger that it can trust as the authoritative record. The blockchain is not created by a central authority, but is assembled independently by every node in the network. Somehow, every node in the network, acting on information transmitted across insecure network connections, can arrive at the same conclusion and assemble a copy of the same public ledger as everyone else.</p>

<p class="quote">Satoshi Nakamoto’s main invention is the decentralized mechanism for emergent consensus. Emergent, because consensus is not achieved explicitly—there is no election or fixed moment when consensus occurs. Instead, consensus is an emergent artifact of the asynchronous interaction of thousands of independent nodes, all following simple rules. All the properties of bitcoin, including currency, transactions, payments, and the security model that does not depend on central authority or trust, derive from this invention.</p>

<p class="quote">Bitcoin’s decentralized consensus emerges from the interplay of four processes that occur independently on nodes across the network:</p>

<ul class="quote-list">
<li>Independent verification of each transaction, by every full node, based on a comprehensive list of criteria</li>
<li>Independent aggregation of those transactions into new blocks by mining nodes, coupled with demonstrated computation through a Proof-of-Work algorithm</li>
<li>Independent verification of the new blocks by every node and assembly into a chain</li>
<li>Independent selection, by every node, of the chain with the most cumulative computation demonstrated through Proof-of-Work</li>
</ul>

## The Bitcoin Whitepaper

Now read the original Bitcoin whitepaper. The technical jargon will likely be confusing if you do not have a computer science background and this is completely okay! The goal here should be to skim through and recognize all the components of the Bitcoin Protocol that we have learned about so far.

- <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noreferrer">Bitcoin - A Peer-to-peer Electronic Cash System - Satoshi Nakamoto (2008)</a>

<p>This short description of how Bitcoin works from <a href="https://en.bitcoin.it/wiki/Main_Page" target="_blank" rel="noreferrer">Bitcoin Wiki</a> should be starting to make sense to you.</p>

<p class="quote">Bitcoin uses public-key cryptography, peer-to-peer networking, and proof-of-work to process and verify payments. Bitcoins are sent (or signed over) from one address to another with each user potentially having many, many addresses. Each payment transaction is broadcast to the network and included in the blockchain so that the included bitcoins cannot be spent twice. After an hour or two, each transaction is locked in time by the massive amount of processing power that continues to extend the blockchain.</p>

## Taking a Non-Technical Break

Before delving further into the technical details of Bitcoin, I highly recommend watching the following three talks by Andreas Antonopoulos that provide non-technical context around why Bitcoin matters (obviously subjective). In my opinion, no one is a better communicator of this concept than Andreas Antonopoulos. The timstamps shown next to the video titles below are the length of the talks excluding the question and answer periods.

<div class="youtube-container-small">

<!-- <div>
<h3>What is Bitcoin? (20:27)</h3>
<p>This video is good because blah blah blah. blah blah blah.</p>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/LA9A1RyXv9s?start=20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div> -->

<!-- <div>
<h3>Introduction to Bitcoin: what is bitcoin and why does it matter? (25:00)</h3>
<p>This video is good because it introduces revolutionary implications for society.</p>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/l1si5ZWLgy0?start=15" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div> -->

<div>
<h3>How Bitcoin is Changing the World (18:00)</h3>
<p>This talk is a good introduction to the revolutionary implications of Bitcoin for society.</p>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/T2zH-T_hmLs?end=1080" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div>

<div>
<h3>Bitcoin Security: Bubble Boy and the Sewer Rat (24:10)</h3>
<p>This video compares the open, public, and decentralized Bitcoin network with closed, proprietary, centralized systems from a security standoint.</p>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/810aKcfM__Q?end=1450" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div>

<div>
<h3>Blockchain vs Bullshit (30:20)</h3>
<p>This talk tackles the hype around "blockchain" and "blockchain technology".</p>
<div class="youtube-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/SMEOKDVXlUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
</div>

</div>

## Additional Resources

- <a href="https://michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/" target="_blank" rel="noreferrer">How the Bitcoin Protocol Actaully Works - Michael Nielsen (2013)</a>
- <a href="https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch02.asciidoc" target="_blank" rel="noreferrer">Chapter 1</a> and <a href="https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch01.asciidoc" target="_blank" rel="noreferrer">Chapter 2</a> of Mastering Bitcoin - Andreas Antonopoulos
