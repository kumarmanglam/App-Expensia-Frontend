import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllIncomesPaginatedAndSortedThunk,
  getPaginatedIncomeThunk,
  resetIncomes,
} from "../../Store/reducers/income";
import {
  selectIncomeList,
  selectIncomeTotalNoOfElements,
} from "../../Store/selectors/income";
import { selectSummary } from "../../Store/selectors/transaction";
import Navbar from "../../components/core/Navbar";

import { ReactComponent as Bag } from "../../assets/icons/bag.svg";
import { TABLE_HEADER_CONFIG_INCOME } from "../../components/Table/headerConfig";

import {
  selectSortingOrder,
  selectorderByField,
} from "../../Store/selectors/orderBy";
import useInfiniteScroll from "../../common/useInfiniteScroll";
import Table from "../../components/Table";
import AddBtn from "../../components/core/AddBtn";
import Card from "../../components/core/Card";
import { getAllTransactionsThunk } from "../../Store/reducers/transaction";
import LoadingBar from "react-top-loading-bar";
export const SORT_ORDER_BY_CONFIG = {
  0: "",
  1: "asc",
  2: "desc",
};

function Income() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const summary = useSelector(selectSummary);
  const incomeList = useSelector(selectIncomeList);
  const [pageNum, setPageNum] = useState(0);
  const sortField = useSelector(selectorderByField);
  const orderBy = useSelector(selectSortingOrder);
  const [searchQuery, setSearchQuery] = useState("");
  //0 means default
  //1 means up
  //2 means down
  const totalNoOfRecords = useSelector(selectIncomeTotalNoOfElements);

  const handleRef = useInfiniteScroll(() => {
    // console.log("infinte scroll ran");
    setPageNum((prev) => prev + 1);
  });

  useEffect(() => {
    ref.current.continuousStart();
  }, []);

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
        dispatch(getPaginatedIncomeThunk({ offset: pageNum, pageSize: 20 }));
      } else {
        dispatch(
          getAllIncomesPaginatedAndSortedThunk({
            offset: pageNum,
            pageSize: 20,
            sortByField: sortField,
            orderBy: SORT_ORDER_BY_CONFIG[orderBy],
          })
        );
      }
    }
    ref.current.complete();
  };
  const filteredData = incomeList.filter((expense) =>
    expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="nav-app">
      <LoadingBar ref={ref} color="#bb86fc" transitionTime={1000} />
      <Navbar label="Income" />
      <div className="app-wrapper ">
        {/* <TestTable /> */}
        <div className="summary">
          <p className="  font-semibold text-xl">Summary</p>
          <div className="dashboard-view my-3">
            <Card label="Total Income" icon={Bag} stats={summary.totalIncome} />
          </div>
          {/* <div className="flex gap-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setSortField("amount");
                setOrderBy(true);
              }}
            >
              Sort By AMOUNT in Ascending order
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setSortField("amount");
                setOrderBy(false);
              }}
            >
              Sort By AMOUNT in descending order
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setSortField("description");
                setOrderBy(true);
              }}
            >
              Sort By DESCRIPTION in Ascending order
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setSortField("description");
                setOrderBy(false);
              }}
            >
              Sort By DESCRIPTION in descending order
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setSortField("date");
                setOrderBy(true);
              }}
            >
              Sort By DATE in Ascending order
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setSortField("date");
                setOrderBy(false);
              }}
            >
              Sort By DATE in descending order
            </button>
          </div> */}
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
    </div>
  );
}

export default Income;
