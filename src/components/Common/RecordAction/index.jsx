import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsModalOpen,
  setModalData,
  setModalIsEditing,
} from "../../../Store/reducers/modal";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../../assets/icons/trash.svg";
import { selectModalData } from "../../../Store/selectors/modal";
import { deleteTransactionThunk, getAllTransactionsThunk } from "../../../Store/reducers/transaction";

function RecordAction({
  data: transaction,
}) {
  //send transaction to modal data state
  const dispatch = useDispatch();
  //insert tool tip
  return (
    <div className="flex gap-10 w-full  justify-center">
      <div
        className="cursor-pointer w-1 h-1"
        // style={{ width: "4px" }}
        onClick={() => {
          dispatch(setIsModalOpen());
          console.log(
            "edit clicked the received transaction id is " + transaction?.id
          );
          dispatch(setModalData(transaction));
          dispatch(setModalIsEditing(true));
        }}
      >
        <Edit className="w-4 h-4" />
      </div>
      <div className="cursor-pointer">
        <Delete
          className="w-4 h-4"
          onClick={() => {
            console.log("delete button clicked");
            dispatch(deleteTransactionThunk(transaction));
            dispatch(getAllTransactionsThunk());
          }}
        />
      </div>
    </div>
  );
}

export default RecordAction;
