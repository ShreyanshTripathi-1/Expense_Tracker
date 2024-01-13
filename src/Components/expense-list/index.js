import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import "./expenselist.css";
export default function ExpenseList() {
  const { expensesList: list } = useSelector((state) => state.expenses);
  console.log("priyanshi", list);
  return (
    <div className="list-parent">
      {list.map((item) => {
        {
          console.log("priyanshi", item);
        }
        <Card item={item} />;
      })}
    </div>
  );
}
