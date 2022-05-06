import { data } from "../product components/Productdata";
import { loadData, saveData } from "../utils/loacalStorage";
import {
  ADD_DATA,
  FILTER_DATA,
  INC_QTY,
  SORT_ASC,
  SORT_DESC,
  DEC_QTY,
  DELETE_ITEM,
  UPDATE_PRICE,
  EMPTY_CART,
} from "./action";
let inits = {
  productsdata: data,
  filterdata: loadData("filterdata") || [],
  cartdata: loadData("cartData") || [],
  totalprice: loadData("totalprice") || 0,
};

export const reducer = (state = inits, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SORT_ASC: {
      return {
        ...state,
        productsdata: [...state.productsdata].sort((a, b) => {
          return a.price - b.price;
        }),
      };
    }
    case SORT_DESC: {
      return {
        ...state,
        productsdata: [...state.productsdata].sort((a, b) => {
          return b.price - a.price;
        }),
      };
    }
    case FILTER_DATA: {
      let catfilter = state.productsdata.filter((item) => {
        return item.category === payload;
      })
      saveData("filterdata",catfilter)
      return {
        ...state,
        filterdata: catfilter
      };
    }
    case ADD_DATA: {
      let updatecart = [...state.cartdata, payload];
      saveData("cartData", updatecart);
      let total = updatecart.reduce((acc, el) => {
        return acc + el.price;
      }, 0);
      saveData("totalprice", total);
      return {
        ...state,
        cartdata: updatecart,
        totalprice: total,
      };
    }

    case INC_QTY: {
      console.log(payload);
      let updateinc = state.cartdata.map((el) => {
        if (el.id === payload) {
          el.qty += 1;
        }
        return el;
      });
      saveData("cartData", updateinc);
      return {
        ...state,
        cartdata: updateinc,
      };
    }
    case DEC_QTY: {
      console.log(payload);
      let updatedec = state.cartdata.map((el) => {
        if (el.id === payload) {
          if (el.qty > 1) {
            el.qty -= 1;
          }
        }
        return el;
      });
      saveData("cartData", updatedec);
      return {
        ...state,
        cartdata: updatedec,
      };
    }
    case DELETE_ITEM: {
      let updatedel = state.cartdata.filter((el) => {
        return el.id !== payload;
      });
      
      saveData("cartData", updatedel);
      let updatetotal = updatedel.reduce((acc, el) => {
        return acc + el.payprice;
      }, 0);
      saveData("totalprice", updatetotal);
      return {
        ...state,
        cartdata: updatedel,
        totalprice: updatetotal,
      };
    }
    case UPDATE_PRICE: {
      let updateprice = state.cartdata.map((el) => {
        el.payprice = el.qty * el.payprice;
        return el;
      });
      let updatetotal = state.cartdata.reduce((acc, el) => {
        return acc + el.payprice;
      }, 0);
      saveData("totalprice", updatetotal);
      saveData("cartData", updateprice);
      return { ...state, cartdata: updateprice, totalprice: updatetotal };
    }
    case EMPTY_CART: {
      let emptycart = [];
      let tp = 0;
      saveData("totalprice", tp);
      saveData("cartData", emptycart);
      return {
        ...state,
        cartdata: emptycart,
        totalprice: tp,
      };
    }

    default:
      return state;
  }
};
