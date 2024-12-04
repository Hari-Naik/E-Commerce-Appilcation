import { useState } from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Menu from "../Menu/Menu";
import NavItems from "./NavItems";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  return (
    <header className="sticky top-0 z-[99] bg-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between md:justify-start md:gap-4">
        {/* Logo */}
        <Logo handleShowMenu={handleShowMenu} />

        {/* Search Bar */}
        <SearchBar hidden="hidden md:block" />

        {/* User Account and Cart */}
        <NavItems />
      </div>

      {/* mobile devices */}
      <SearchBar hidden="block md:hidden mt-4" />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Header;
