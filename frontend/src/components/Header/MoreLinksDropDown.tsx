import { BsDownload } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import DropDownItem from "./DropDownItem";

const MoreLinksDropDown = () => {
  return (
    <div className="hidden group-hover:block absolute top-10 right-[4px] z-[999] bg-white w-fit h-fit shadow-3xl rounded-b-lg text-sm">
      <DropDownItem Icon={IoNotificationsOutline} text="24x7 Customer Care" />

      <DropDownItem
        Icon={RiCustomerServiceLine}
        text="Notification Preferences"
      />
      <DropDownItem Icon={HiArrowTrendingUp} text="Advertise" />
      <DropDownItem Icon={BsDownload} text="Download App" />
    </div>
  );
};

export default MoreLinksDropDown;
