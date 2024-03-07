import { RiTicketLine, RiMore2Fill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";


const CardTicket = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/*Card*/}
        <div className="bg-secondary-100 p-8 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <RiTicketLine className="text-4xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl" />
            </div>
            <div>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-900 p-2 rounded-lg transition-colors">
                    <RiMore2Fill />
                  </MenuButton>
                }
                align="end"
                arrow
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/profile"
                    className=" rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Show tickets
                 </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/profile"
                    className=" rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Information
                 </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
          {/*Number of tickets*/}
          <div>
            <h1 className="text-4xl text-white font-bold mb-4">145,000</h1>
            <p>Total Tickets </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTicket