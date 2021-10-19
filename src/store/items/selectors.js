import { createSelector } from 'reselect';

export const selectItem = (state, props) =>
  state.items.find((item) => item.uuid === props.uuid);

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.quantity * item.price
);

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, percentage) => subtotal * (percentage / 100)
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
