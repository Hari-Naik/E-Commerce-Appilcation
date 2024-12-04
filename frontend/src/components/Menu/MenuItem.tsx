import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type PropTypes = {
  Icon: IconType;
  text: string;
  link?: string;
};

const MenuItem: React.FC<PropTypes> = ({ text, Icon, link }) => {
  return link ? (
    <Link to={link}>
      <Item Icon={Icon} text={text} />
    </Link>
  ) : (
    <Item Icon={Icon} text={text} />
  );
};

const Item = ({ Icon, text }: PropTypes) => {
  return (
    <div className="flex items-center gap-3 p-2 text-[#353535]/65">
      <Icon className="w-4 h-4" />
      <span className="text-[15px] font-medium">{text}</span>
    </div>
  );
};

export default MenuItem;
