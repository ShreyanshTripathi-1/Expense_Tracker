import React from "react";
import ExpenseList from "../../Components/expense-list";
import Topfold from "../../Components/TopFold";

function Home() {
  return (
    <div>
      <Topfold />
      <ExpenseList />
    </div>
  );
}

export default Home;
