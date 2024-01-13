import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";
export const addExpense = (data) => {
  console.log("priyanshi", data);
  return {
    type: ADD_EXPENSE,
    data: data,
  };
};
export const deleteExpense = (id, data) => {
  return {
    type: DELETE_EXPENSE,
    data: data,
  };
};
