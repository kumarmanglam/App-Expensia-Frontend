import React, { useEffect } from "react";
import { TABLE_HEADER_CONFIG } from "../../components/Table/headerConfig";
import { TABLE_COMPONENT_CONFIG } from "../../components/Table/headerConfig";
import Table from "../../components/Table";
import { selectTransactionList } from "../../Store/selectors/transaction";
import {
  createTransactionThunk,
  getAllTransactionsThunk,
} from "../../Store/reducers/transaction";
import { useDispatch, useSelector } from "react-redux";

function TestTable() {
  const mockData = [
    {
      id: 1,
      amount: 500.0,
      date: "2024-01-15",
      category: "Stocks",
      description: "Stocks Investment 1",
      type: "Investment",
    },
    {
      id: 2,
      amount: 700.0,
      date: "2024-01-15",
      category: "Mutual Funds",
      description: "Mutual Funds Investment 1",
      type: "Investment",
    },
    {
      id: 3,
      amount: 300.0,
      date: "2024-01-16",
      category: "Bonds",
      description: "Bonds Investment 1",
      type: "Investment",
    },
    {
      id: 4,
      amount: 800.0,
      date: "2024-01-16",
      category: "Gold",
      description: "Gold Investment 1",
      type: "Investment",
    },
    {
      id: 5,
      amount: 600.0,
      date: "2024-01-17",
      category: "Real estate",
      description: "Real Estate Investment 1",
      type: "Investment",
    },
    {
      id: 6,
      amount: 450.0,
      date: "2024-01-17",
      category: "Other",
      description: "Miscellaneous Investment 1",
      type: "Investment",
    },
    {
      id: 7,
      amount: 550.0,
      date: "2024-01-18",
      category: "Stocks",
      description: "Stocks Investment 2",
      type: "Investment",
    },
    {
      id: 8,
      amount: 650.0,
      date: "2024-01-18",
      category: "Mutual Funds",
      description: "Mutual Funds Investment 2",
      type: "Investment",
    },
    {
      id: 9,
      amount: 350.0,
      date: "2024-01-19",
      category: "Bonds",
      description: "Bonds Investment 2",
      type: "Investment",
    },
    {
      id: 10,
      amount: 900.0,
      date: "2024-01-19",
      category: "Gold",
      description: "Gold Investment 2",
      type: "Investment",
    },
    {
      id: 11,
      amount: 750.0,
      date: "2024-01-20",
      category: "Real estate",
      description: "Real Estate Investment 2",
      type: "Investment",
    },
    {
      id: 12,
      amount: 480.0,
      date: "2024-01-20",
      category: "Other",
      description: "Miscellaneous Investment 2",
      type: "Investment",
    },
    {
      id: 13,
      amount: 590.0,
      date: "2024-01-21",
      category: "Stocks",
      description: "Stocks Investment 3",
      type: "Investment",
    },
    {
      id: 14,
      amount: 710.0,
      date: "2024-01-21",
      category: "Mutual Funds",
      description: "Mutual Funds Investment 3",
      type: "Investment",
    },
    {
      id: 15,
      amount: 320.0,
      date: "2024-01-22",
      category: "Bonds",
      description: "Bonds Investment 3",
      type: "Investment",
    },
  ];

  // Assuming you want a total of 60 objects, repeat the mock data
  const totalMockData = [
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
    ...mockData,
  ].slice(0, 60);

  const dispatch = useDispatch();
  const list = useSelector(selectTransactionList);
  useEffect(() => {
    dispatch(getAllTransactionsThunk());
  }, []);
  function addData() {
    totalMockData.forEach((item) => {
      dispatch(createTransactionThunk(item)).then((result) => {
        console.log("Transaction created:", result);
      });
    });
  }
  const colWidth = ["60px", "120px", "60px", "60px", "60px"];
  return (
    <div>
      <button onClick={addData}> add data</button>
      <Table
        list={list}
        colWidths={colWidth}
        headers={TABLE_HEADER_CONFIG}
        components={TABLE_COMPONENT_CONFIG}
      />
    </div>
  );
}

export default TestTable;
