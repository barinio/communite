import lightIconDropDown from "@/images/light-icon-drop-down.svg";
import darkIconDropDown from "@/images/dark-icon-drop-down.svg";
import useDarkMode from "@/hooks/useDarkMode";

const ButtonDropOpen = () => {
  const isDark = useDarkMode();

  return (
    <div className="px-0 min-w-8 h-9 rounded-none dark:bg-[#1D1D1F] bg-[#1d1d1f1a] border-[#424245b3] dark:border-[#424245] border-1 flex justify-center">
      <img
        src={isDark ? darkIconDropDown : lightIconDropDown}
        alt="social drop down img"
        width={24}
        height={9}
      />
    </div>
  );
};

export default ButtonDropOpen;
