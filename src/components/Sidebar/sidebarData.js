import { RiHome2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export const menu = [
  {
    text: "Home",
    icon: <RiHome2Line size={28} />,
    path: "/",
  },
  {
    text: "Watchlist",
    icon: <BsBookmark size={28} />,
    path: "/watchlist",
  },
  {
    text: "Favorites",
    icon: <AiOutlineHeart size={28} />,
    path: "/favorites",
  },
];
