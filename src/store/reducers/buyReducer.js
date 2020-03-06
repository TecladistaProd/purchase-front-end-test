const initialState = {
  userData: {
    name: "",
    email: "",
    sex: ""
  },
  products: [],
  total: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FINISH":
      return {
        ...state,
        userData: action.payload
      };
    case "ADD_PRODUCT":
      return addProduct(state, action);
    default:
      return state;
  }
}

function addProduct(state, action) {
  const products = [...state.products];
  if (products.findIndex(i => i.id === action.payload.id) > -1) {
    products[products.findIndex(i => i.id === action.payload.id)].amount +=
      action.payload.amount;
  } else {
    products.push(action.payload);
  }
  let total = 0;
  products.forEach(i => {
    total += i.price * i.amount;
  });
  return {
    ...state,
    products,
    total
  };
}
