import React from "react";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";

function AddBtn({ label }) {
  return (
    <div className="addbtn p-2 rounded-full flex justify-center items-center text-4xl cursor-pointer">
      <Plus />
    </div>
  );
}

export default AddBtn;
