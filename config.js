const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://downtherabbithodl.guide";

export const navLinks = {
  home: "/",
  "what is money": "/what-is-money",
  "cypherpunks & digital money": "/cypherpunks",
  "bitcoin protocol": "/bitcoin",
  "blockchain & mining": "/blockchain",
  "nodes & miners": "/nodes-and-miners",
  "wallets & keys": "/wallets-and-keys",
  "sending & receiving transactions": "/transactions",
  "energy debate": "/energy-debate",
  // "advanced bitcoin like merkle trees and taproot": "/advanced",
  // "lightning network": "/lightning-network",
  resources: "/resources",
};
