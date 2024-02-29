import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine ,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-x-2">
        <button className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
          <RiNotification3Line />
          <span className="absolute -top-0.5 -right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
            2
          </span>
        </button>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              <img
                src="https://img.freepik.com/free-photo/happy-optimistic-handsome-latin-sales-manager-pointing-aside-looking-camera_1262-12679.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Edinson Cespedes</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className=" rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 ´py-2 px-6 flex-1"
            >
              <img
                src="https://img.freepik.com/free-photo/happy-optimistic-handsome-latin-sales-manager-pointing-aside-looking-camera_1262-12679.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Edinson Cespedes</span>
                <span className="text-xs text-gray-500">
                  Edisonprise@hotmail.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500"/>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/config"
              className=" rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line />
              Config
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/log-out"
              className=" rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine />
              Log Out
            </Link>
          </MenuItem>

        </Menu>
      </nav>
    </header>
  );
};

export default Header;
