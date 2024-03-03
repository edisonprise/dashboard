//Icons
import { RiEdit2Line, RiShieldCheckLine } from "react-icons/ri";

const Profile = () => {
  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
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
                <p className="text-gray-500 text-sm">
                  Allowed file types: png, jpg, jpeg
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                {" "}
                Full Name<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                {" "}
                Name of the Company<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 ">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Company"
              />
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                {" "}
                Contact phone<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 ">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Contact phone"
              />
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                {" "}
                Company Site<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 ">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Company Site"
              />
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                {" "}
                Country<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 ">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Argentina" selected>
                  Argentina
                </option>
                <option value="Brazil">Brazil</option>
                <option value="Colombia">Colombia</option>
                <option value="Mexico">Mexico</option>
                <option value="Peru">Peru</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                {" "}
                City<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 ">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Buenos Aires" selected>
                  Buenos Aires
                </option>
                <option value="Brazilia">Brazilia</option>
                <option value="Bogota">Bogota</option>
                <option value="Mexico-city">Mexico City</option>
                <option value="Lima">Lima</option>
                <option value="Caracas">Caracas</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Save
          </button>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <h1 className="text-xl text-gray-100">Sign-in Method</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Email</h5>
              <p className="text-gray-500 text-sm">edisonprise@hotmail.com</p>
            </div>
            <div>
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover: text-gray-100 transition-colors ">
                Change Email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Password</h5>
              <p className="text-gray-500 text-sm">************</p>
            </div>
            <div>
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover: text-gray-100 transition-colors ">
                Change Password
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
          <div className="flex-justify-center">
            <RiShieldCheckLine className="text-4xl text-green-500" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl mb-2">Secure your Account</h5>
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in addition you´ll need to provide a 6 digit
              code
            </p>
          </div>
          <div className="flex-justify-center">
            <button className="bg-green-600/70 hover:bg-green-600 trasition-colors py-2 px-4 rounded-lg text-gray-100">
              Enable
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
