import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import LogoKathon from "../../assets/imgs/LogoKathonCompleta.png";

function HeaderFeed() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/hackathons", name: "Hackathons" },
    { path: "/empresas", name: "Empresas" },
    { path: "/nivelDesafio", name: "Desafios" },
    { path: "/sobre", name: "Sobre Nós" },
  ];

  return <HamburgerMenu links={links} logo={LogoKathon} />;
}

export default HeaderFeed;
