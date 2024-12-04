import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

type PropTypes = {
  Icon: IconType;
  text: string;
  link?: string;
  onClick?: () => void;
};

const DropDownItem: React.FC<PropTypes> = ({ Icon, text, onClick, link }) => {
  const wishlist = useAppSelector(state => state.wishlist);

  if (link) {
    return (
      <Link to={link}>
        <div
          onClick={onClick}
          className="min-w-max flex items-center gap-2 py-2 px-4 hover:bg-[#f9f9f9]">
          <Icon className="w-4 h-4" />
          <span>{text}</span>
          {text === "Wishlist" && wishlist.length > 0 && (
            <span>({wishlist.length})</span>
          )}
        </div>
      </Link>
    );
  }
  return (
    <div
      onClick={onClick}
      className="min-w-max flex items-center gap-2 py-2 px-4 hover:bg-[#f9f9f9]">
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
};

export default DropDownItem;
