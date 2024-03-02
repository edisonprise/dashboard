//Icons
import { RiEdit2Line } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <h1 className="text-xl text-gray-100">Profile</h1>
      <hr className="my-8 border-gray-500" />
      <form>
        <div className="flex items-center">
          <div className="w-1/4">
            <p className="">Avatar</p>
          </div>
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-enthusiastic-office-manager-showing-her-presentation-laptop-pointing-screen-smiling-amused_1258-59145.jpg"
                className="w-28 h-28 object-cover rounded-lg"
              />
              <label
                htmlFor="avatar"
                className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
              >
                <RiEdit2Line />
              </label>
              <input type="file" className="hidden" id="avatar" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
