import React from "react";
import { AddForm } from "../../Components/addForm";
import Topfold from "../../Components/TopFold";
import "./addExpense.css";
export default function AddExpense() {
  return (
    <div className="add-expense">
      <Topfold />
      <AddForm />
    </div>
  );
}
