import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

const initialState = {
  expensesList: [],
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expensesList: [...state.expensesList, action.data],
      };
    }
    case DELETE_EXPENSE: {
      const { data } = action;
      const updateList = state.expensesList.filter(
        (item) => item.createdat !== data.createdat
      );
      return {
        ...state,
        expensesList: updateList,
      };
    }
    default:
      return state;
  }
};
