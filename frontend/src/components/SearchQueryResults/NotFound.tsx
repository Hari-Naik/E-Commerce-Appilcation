const NotFound = () => {
  return (
    <li className="w-full h-full flex flex-col items-center justify-center gap-2">
      <span className="text-base text-[#212121] font-medium">
        Sorry, no results found!
      </span>
      <span className="text-sm text-[#878787]">
        Please check the spelling or try searching for something else
      </span>
    </li>
  );
};

export default NotFound;
