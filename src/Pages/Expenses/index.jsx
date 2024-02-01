import React, { useEffect } from "react";
import Card from "../../components/core/Card";
import Navbar from "../../components/core/Navbar";

import { useState } from "react";
import AddBtn from "../../components/core/AddBtn";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllExpensesPaginatedAndSortedThunk,
  getPaginatedExpenseThunk,
} from "../../Store/reducers/expense";
import {
  selectExpenseList,
  selectExpenseTotalNoElements,
} from "../../Store/selectors/expense";
import {
  selectSortingOrder,
  selectorderByField,
} from "../../Store/selectors/orderBy";
import { selectSummary } from "../../Store/selectors/transaction";
import useInfiniteScroll from "../../common/useInfiniteScroll";
import Table from "../../components/Table";
import { TABLE_HEADER_CONFIG_INCOME } from "../../components/Table/headerConfig";
import { SORT_ORDER_BY_CONFIG } from "../Income";
import { getAllTransactionsThunk } from "../../Store/reducers/transaction";

function Expenses() {
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const expenselist = useSelector(selectExpenseList);
  const [pageNum, setPageNum] = useState(0);
  const totalNoOfRecords = useSelector(selectExpenseTotalNoElements);
  const sortField = useSelector(selectorderByField);
  const orderBy = useSelector(selectSortingOrder);
  const [searchQuery, setSearchQuery] = useState("");

  const handleRef = useInfiniteScroll(() => {
    setPageNum((prev) => prev + 1);
  });

  useEffect(() => {
    setPageNum(0);
  }, [orderBy, sortField]);

  useEffect(() => {
    loadMoreData();
  }, [pageNum, sortField, orderBy]);

  // useEffect(() => {
  //   dispatch(getAllTransactionsThunk());
  // }, []);

  const loadMoreData = () => {
    if (pageNum * 20 <= totalNoOfRecords) {
      if (sortField == "default" || orderBy === 0) {
        console.log("default is called");
        dispatch(getPaginatedExpenseThunk({ offset: pageNum, pageSize: 20 }));
      } else {
        dispatch(
          getAllExpensesPaginatedAndSortedThunk({
            offset: pageNum,
            pageSize: 20,
            sortByField: sortField,
            orderBy: SORT_ORDER_BY_CONFIG[orderBy],
          })
        );
      }
    }
  };
  const filteredData = expenselist.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="nav-app">
      <Navbar label="Expenses" />
      <div className="app-wrapper">
        {/* <TestTable /> */}
        <div className="summary">
          <p className="font-semibold text-xl">Summary</p>
          <div className=" dashboard-view py-3">
            <Card label="Total Spent" stats={summary.totalExpense} />
          </div>
        </div>
        <div className="pt-7  w-min">
          <input
            className="search-bar"
            type="text"
            placeholder="Filter by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Table
          headers={TABLE_HEADER_CONFIG_INCOME}
          list={filteredData}
          handleRef={handleRef}
        />
      </div>
      <AddBtn />
    </div>
  );
}

export default Expenses;
