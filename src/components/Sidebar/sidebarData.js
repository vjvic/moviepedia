import { RiHome2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export const menu = [
  {
    text: "Home",
    icon: <RiHome2Line />,
    path: "/",
  },
  {
    text: "Watchlist",
    icon: <BsBookmark />,
    path: "/watchlist",
  },
  {
    text: "Favorites",
    icon: <AiOutlineHeart />,
    path: "/favorites",
  },
];
