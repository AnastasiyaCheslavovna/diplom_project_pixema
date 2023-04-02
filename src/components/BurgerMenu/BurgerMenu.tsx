import { CustomLink } from "components";
import { ToolBar, Title, Wrapper, CloseButton } from "./styles";
import { HomeIcon, FavoritesIcon, SettingsIcon, TrendsIcon, CloseIcons } from "assets/index";
import { ROUTE } from "routes";
import { Color } from "ui";
import { AnimatePresence } from "framer-motion";

interface IProps {
  setToggle: () => void;
  toggle: boolean;
}

