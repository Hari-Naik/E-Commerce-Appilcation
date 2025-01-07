import { FaUser } from "react-icons/fa6";

import { useToken } from "../../hooks/useToken";

type MenuHeaderProps = {
  handleNaviageToLoginPage: () => void;
};

export const MOBILE_LOGO_URL =
  "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png";

const MenuHeader: React.FC<MenuHeaderProps> = ({
  handleNaviageToLoginPage,
}) => {
  const { token } = useToken();
  return (
    <div
      onClick={handleNaviageToLoginPage}
      className="w-full h-[60px] flex items-center justify-between bg-gradient-to-r from-[#2874f0] to-[#0065c5] p-2">
      <div className="flex items-center gap-3 text-[#f3f8ff] text-[17px]">
        <FaUser />
        <span className="font-medium">
          {token ? "Welcome!" : "Login & Signup"}
        </span>
      </div>
      <img src={MOBILE_LOGO_URL} alt="logo" className="w-5 h-5" />
    </div>
  );
};

export default MenuHeader;
