"use client";
import React from "react";
import { VERIFIED, BELL, USER_DEFAULT_IMAGE } from "../../../constants/icons";
import { useRouter } from "next/navigation";
import { editProfilePic } from "../../../services/user-login";
import Loader from "../Loader/Loader";
import { usePathname } from "next/navigation";
const UserSection = ({ User }) => {
  const pathname = usePathname();

  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(User);
  const [button, setButton] = React.useState(null);
  const router = useRouter();
  const handleNavigation = (url, button) => {
    setLoading(pathname != url);
    setButton(button);
    router.push(url);
  };
  const handleProfileImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const changeProfile = await editProfilePic(file);
    if (changeProfile.updatedUser) {
      setUser((prevUser) => ({
        ...prevUser,
        image: changeProfile.imageUrl,
      }));
    }
  };
  return (
    <>
      <span className="w-full text-center bg-[#F2F2F2] text-[#E3BB59] mb-12 py-2">
        My Account
      </span>
      <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between w-full">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between  w-full mb-8">
          <div className="flex flex-row items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.image ? user.image : USER_DEFAULT_IMAGE.image}
                alt={user.name}
              />
            </div>
            <div className="flex flex-col items-start ml-4">
              <div className="flex flex-row items-center">
                <p className="lato-700 text-[16px] md:text-[14px] lg:text-[16px] 2xl:text-[20px] capitalize">
                  {user.name}
                </p>
                <img
                  className="w-3 h-3 md:w-4 md:h-4 ml-2"
                  src={VERIFIED.image}
                  alt={VERIFIED.name}
                />
              </div>
              <span className="text-[12px] md:text-[14px]">Verified</span>
              {/* <span className="text-[12px] md:text-[14px] underline text-[#2176BD]  cursor-pointer">
                      Edit profile
                    </span> */}
              <label className="text-[12px] md:text-[14px] underline text-[#2176BD] cursor-pointer">
                Edit profile
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center mt-4 md:mt-0">
            <span
              className="underline text-[#2176BD]  mr-1 sm:mr-4 cursor-pointer text-[11px] sm:text-[14px] md:text-[14px] lg:text-[16px]"
              onClick={() =>
                handleNavigation(
                  "/my-account/track-my-orders",
                  "Track My Orders"
                )
              }
            >
              {loading && button == "Track My Orders" ? (
                <Loader color={"#E3BB59"} />
              ) : (
                "Track My Orders"
              )}
            </span>
            {loading && button == "Notifications" ? (
              <Loader
                color={"#E3BB59"}
                className={"w-4 h-4 lg:w-6 lg:h-6  mr-1 sm:mr-4"}
              />
            ) : (
              <img
                className="w-4 h-4 lg:w-6 lg:h-6  mr-1 sm:mr-4  cursor-pointer"
                src={BELL.image}
                alt={BELL.name}
                onClick={() =>
                  handleNavigation("/my-account/notifications", "Notifications")
                }
              />
            )}
            <button
              className="button text-[10px] sm:text-[16px] bg-[#E3BB59] text-white py-[3px] lg:py-[6px] px-2 mr-1 sm:mr-4 rounded-md border border-[#E3BB59] min-w-[55px] sm:min-w-[100px]"
              onClick={() => handleNavigation("/my-account/my-shop", "My Shop")}
            >
              {loading && button == "My Shop" ? (
                <Loader className={" py-[3px]   px-2 mr-1 "} />
              ) : (
                "My Shop"
              )}
            </button>
            <button
              className="button text-[10px] sm:text-[16px] bg-white text-[#E3BB59] py-[3px] lg:py-[6px] px-2 border border-[#E3BB59]  rounded-md  min-w-[90px] sm:min-w-[150px]"
              onClick={() =>
                handleNavigation(
                  "/my-account/account-settings",
                  "Account Settings"
                )
              }
            >
              {loading && button == "Account Settings" ? (
                <Loader color={"#E3BB59"} className={"py-[3px]"} />
              ) : (
                "Account Settings"
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
    </>
  );
};

export default UserSection;
