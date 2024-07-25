import React from "react";

const AccountDeletetionConfirmation = ({ handleBackdropClose }) => {
  return (
    <div className="form-container flex flex-col items-center w-11/12 sm:w-8/12 bg-white p-4 sm:p-8 rounded-sm h-[90vh] overflow-y-auto">
      <div className="w-full flex flex-col items-end">
        <button
          onClick={() => {
            handleBackdropClose();
          }}
          className="text-black"
        >
          X
        </button>
      </div>
      <h4 className="text-center w-full text-gray-900 lato-700 text-[22px] sm:text-[16px] md:text-[20px]">Important !</h4>
      <p className="text-center w-full text-gray-900 lato-700 text-[18px] sm:text-[14px]">
        This action is irreversible.
      </p>
      <ul className="list-disc pl-5 space-y-2 w-full ml-2 mt-4 text-gray-700">
        <li>
          All your data, including your profile information, product listings,
          and other content, will be permanently removed.
        </li>
        <li>You will not be able access to your account.</li>
        <li>This action cannot be undone.</li>
      </ul>
      <div className="flex flex-row items-center justify-center mt-4 sm:mt-12">
        <button
          className=" mr-2 button p-1 px-2 text-[14px] sm:text-[16px] sm:p-2 bg-white text-[#E3BB59] border border-[#E3BB59] hover:text-white hover:border-[#E3BB59] hover:bg-[#E3BB59] transition-all duration-300 rounded-md w-auto  sm:w-[150px]"
          onClick={() => setAccountDeletionClicked(true)}
        >
          Delete
        </button>
        <button className=" ml-2 button p-1 px-2 text-[14px] sm:text-[16px] sm:p-2 bg-red-600 text-white border border-red-600 hover:text-red-600 hover:border-red-600 hover:bg-white transition-all duration-300 rounded-md w-auto  sm:w-[150px]">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountDeletetionConfirmation;
