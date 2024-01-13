import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { categories } from "../../constants/add-expense";
import { addExpense } from "../../redux/actions/expenses";
import "./addForm.css";
export const AddForm = () => {
  const cat = categories;
  const [catopen, setcatopen] = useState(false);
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [mycat, setmycat] = useState("");
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    settitle(e.target.value);
  };
  const handlesubmit = () => {
    if (title === "" || amount === "" || !mycat) {
    }
    const data = {
      title,
      amount,
      mycat,
      createdat: new Date(),
    };
    dispatch(addExpense(data));
  };
  const handlecategort = (category) => {
    console.log("priy");
    setmycat(category);
  };
  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="expenditure"
          value={title}
          onChange={(e) => {
            handleTitle(e);
          }}
        ></input>
      </div>
      <div className="form-item">
        <label>Amount</label>
        <input
          placeholder="expenditure"
          onChange={(e) => {
            setamount(e.target.value);
          }}
        ></input>
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div className="category-dropdown">
            <label onClick={() => setcatopen(!catopen)}>category</label>
          </div>
          {catopen &&
            categories.map((item) => (
              <div
                className="category-item"
                onClick={() => handlecategort(item)}
              >
                {item.title}
              </div>
            ))}
        </div>
        <div className="form-add-btn" onClick={() => handlesubmit()}>
          <label>ADd</label>
        </div>
      </div>
    </div>
  );
};
