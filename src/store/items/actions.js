export const ITEM_ADDED = 'add new item';
export const ITEM_REMOVED = 'remove this item';
export const ITEM_PRICE_UPDATED = 'item price updated';
export const ITEM_QUANTITY_UPDATED = 'ITEM_QUANTITY_UPDATED';

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: ITEM_REMOVED,
  payload: { uuid }
});

export const updatePrice = (uuid, price) => ({
  type: ITEM_PRICE_UPDATED,
  payload: {
    uuid,
    price
  }
});

export const updateQuantity = (uuid, quantity) => {
  return {
    type: ITEM_QUANTITY_UPDATED,
    payload: {
      uuid,
      quantity
    }
  };
};
