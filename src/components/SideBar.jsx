import {
  MdBroadcastOnHome,
  MdHelp,
  MdHome,
  MdLiveTv,
  MdSettings,
  MdSports,
  MdSubscriptions,
} from "react-icons/md";
import {
  SiCoursera,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
  SiYoutubestudio,
} from "react-icons/si";
import { AiOutlineHistory, AiOutlinePlayCircle } from "react-icons/ai";
import {
  FaFilm,
  FaFlag,
  FaGalacticSenate,
  FaGamepad,
  FaMusic,
  FaNewspaper,
  FaRegThumbsUp,
  FaShoppingBag,
  FaShoppingCart,
  FaYoutube,
} from "react-icons/fa";
import { RiFeedbackLine, RiPlayList2Fill } from "react-icons/ri";
import { GiFlamingArrow, GiShoppingCart } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
const menuSections = [
  {
    title: "Main",
    items: [
      { id: 1, icon: <MdHome size={"25px"} />, label: "Home" },
      { id: 2, icon: <SiYoutubeshorts size={"23px"} />, label: "Shorts" },
      {
        id: 3,
        icon: <MdSubscriptions size={"25px"} />,
        label: "Subscriptions",
      },
    ],
  },
  {
    title: "Library",
    items: [
      { id: 4, icon: <AiOutlineHistory size={"25px"} />, label: "History" },
      { id: 5, icon: <RiPlayList2Fill size={"25px"} />, label: "Playlists" },
      {
        id: 6,
        icon: <FaVideo size={"25px"} />,
        label: "Your videos",
      },
      {
        id: 7,
        icon: <RiTimerFill size={"25px"} />,
        label: "Watch later",
      },
      { id: 8, icon: <AiFillLike size={"25px"} />, label: "Liked videos" },
    ],
  },

  {
    title: "Explore",
    items: [
      { id: 17, icon: <IoMdTrendingUp size={"25px"} />, label: "Trending" },
      { id: 18, icon: <FaShoppingCart size={"25px"} />, label: "Shopping" },
      { id: 19, icon: <FaMusic size={"25px"} />, label: "Music" },
      { id: 20, icon: <FaFilm size={"25px"} />, label: "Movies" },
      { id: 21, icon: <MdLiveTv size={"25px"} />, label: "Live" },
      { id: 22, icon: <FaGamepad size={"25px"} />, label: "Gaming" },
      { id: 23, icon: <FaNewspaper size={"25px"} />, label: "News" },
      { id: 24, icon: <MdSports size={"25px"} />, label: "Sports" },
      { id: 25, icon: <SiCoursera size={"25px"} />, label: "Courses" },
      {
        id: 26,
        icon: <FaShoppingBag size={"25px"} />,
        label: "Fashion & Beauty",
      },
      { id: 27, icon: <MdBroadcastOnHome size={"25px"} />, label: "Podcasts" },
    ],
  },
  {
    title: "More from YouTube",
    items: [
      {
        id: 28,
        icon: <FaYoutube size={"25px"} className="text-red-600" />,
        label: "YouTube Premium",
      },
      {
        id: 29,
        icon: <SiYoutubestudio size={"25px"} className="text-red-600" />,
        label: "YouTube Studio",
      },
      {
        id: 30,
        icon: <SiYoutubemusic size={"25px"} className="text-red-600" />,
        label: "YouTube Music",
      },
      {
        id: 31,
        icon: <SiYoutubekids size={"25px"} className="text-red-600" />,
        label: "YouTube Kids",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      { id: 32, icon: <MdSettings size={"25px"} />, label: "Settings" },
      { id: 33, icon: <FaFlag size={"25px"} />, label: "Report history" },
      { id: 34, icon: <MdHelp size={"25px"} />, label: "Help" },
      {
        id: 35,
        icon: <RiFeedbackLine size={"25px"} />,
        label: "Send feedback",
      },
    ],
  },
];

const Menu = () => (
  <div className="px-6 w-[20%] space-y-8 h-[calc(100vh-6.25rem)]  overflow-y-scroll overflow-x-hidden transition-all duration-300">
    {menuSections.map((section, id) => (
      <div key={id} className="space-y-4">
        <h3 className="font-bold text-gray-600">{section.title}</h3>
        <div className="space-y-2">
          {section.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-2 space-x-4 duration-300 hover:bg-gray-400 rounded-xl"
            >
              {item.icon && item.icon}
              <span className="cursor-pointer">{item.label}</span>
            </div>
          ))}
          <hr />
        </div>
      </div>
    ))}
    <div className="flex flex-wrap items-start gap-1 stify-between ga">
      <span>About</span>
      <span>Press</span>
      <span>Copyright</span>
      <span>Contact us</span>
      <span>Creaters</span>
      <span>Advertise</span>
      <span>Developer</span>
    </div>

    <div className="flex flex-wrap items-start gap-1 stify-between ga">
      <span>Terms</span>
      <span>PrivacyPolicy</span>
      <span> & SafetyHow </span>
      <span>YouTube</span>
      <span>worksTest </span>
      <span>new </span>
      <span>features</span>
    </div>

    <div>
      <p className="font-bold ">© 2024 Google LLC</p>
    </div>
  </div>
);

export default Menu;
