import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";
import AllocationForm from "./components/AllocationForm";
import Currency from "./components/Currency";

import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          {/* Add Budget component here */}
          <div className="col-sm">
            <Budget />
          </div>

          {/* Add Remaining component here*/}
          <div className="col-sm">
            <Remaining />
          </div>

          {/* Add ExpenseTotal component here */}
          <div className="col-sm">
            <ExpenseTotal />
          </div>

          {/* Add Currency component here */}
          <div className="col-sm">
            <Currency />
          </div>
        </div>

        {/* Add Allocation heading here */}
        <h3 className="mt-3">Allocation</h3>

        {/* Add ExpenseList component here */}
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        {/* Add Change Allocation heading here */}
        <h3 className="mt-3">Change Allocation</h3>

        {/* Add AllocationForm component here under */}
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
