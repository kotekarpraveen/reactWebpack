
import { ADMIN_USER, SUPER_ADMIN_USER } from "../Constant";


const initialState = {
    adminData: [],
    superAdminData: [],
    errorMessage: "",

  };


  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_USER:
        return {
          ...state,
          adminData: action.payload,
        };
      case SUPER_ADMIN_USER:
        return {
          ...state,
          superAdminData: action.payload,
        };
      default:
        return state;
    }
  };
  export default adminReducer;