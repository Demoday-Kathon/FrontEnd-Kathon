import React from "react";
import HamburgerMenu from "./HamburgerMenuInterno";
import LogoKathon from "../../assets/imgs/LogoKathonCompleta.png";

function HeaderFeed() {
  const links = [
    { path: "/feed", name: "feed" },
    { path: "/hackathonsinterno", name: "Hackathons" },
    { path: "/nivelDesafioInterno", name: "Empresas" },
    { path: "/Perfil_aluno", name: "Desafios" },
  ];

  return <HamburgerMenu links={links} logo={LogoKathon} />;
}

export default HeaderFeed;
