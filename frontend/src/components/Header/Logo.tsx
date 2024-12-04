import React from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

type LogoProps = {
  handleShowMenu: () => void;
};

const LOGO_URL =
  "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg";

const Logo: React.FC<LogoProps> = ({ handleShowMenu }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <button onClick={handleShowMenu}>
        <BiMenu className="md:hidden w-6 h-6" />
      </button>
      <Link to="/">
        <img src={LOGO_URL} alt="flipkart logo" className="w-[110px]" />
      </Link>
    </div>
  );
};

export default Logo;
