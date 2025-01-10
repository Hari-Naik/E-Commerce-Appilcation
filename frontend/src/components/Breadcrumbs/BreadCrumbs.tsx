import { FaChevronRight } from "react-icons/fa6";
import { useLocation } from "react-router";
import { Link, useSearchParams } from "react-router-dom";

const Breadcrumbs = () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  let pathnames = pathname.split("/").slice(1);
  const orderId = searchParams.get("order_id") as string;

  let breadcrumPath = "";
  if (pathnames[0] === "order_details") {
    pathnames = ["account", "orders", orderId];
  }

  return (
    <div className="flex items-center gap-1 text-xs text-[#878787] mb-2">
      <span className="flex items-center gap-1">
        <Link to="/" className="hover:text-[#2874f0]">
          Home
        </Link>
        <FaChevronRight className="w-2 h-2 mt-[1px]" />
      </span>
      {pathnames.map((path, index) => {
        breadcrumPath += `/${path}`;
        if (index === pathnames.length - 1) {
          return (
            <span key={path} className="capitalize">
              {path === "account"
                ? "my account"
                : path === "orders"
                ? "my orders"
                : path}
            </span>
          );
        }
        return (
          <span key={path} className="flex items-center gap-1">
            <Link
              to={breadcrumPath}
              className="hover:text-[#2874f0] capitalize">
              {path === "account"
                ? "my account"
                : path === "orders"
                ? "my orders"
                : path}
            </Link>
            <FaChevronRight className="w-2 h-2 mt-[1px]" />
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
