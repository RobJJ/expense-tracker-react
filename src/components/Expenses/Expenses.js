import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  //
  const [filteredYear, setFilteredYear] = useState("2020");
  //
  const onYearChangeHandler = (year) => {
    setFilteredYear(year);
    // console.log("Is this working?", year);
  };
  //
  const filteredExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  //
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={onYearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
