import { ADMIN_USER, SUPER_ADMIN_USER } from "../Constant";


export const getAdminData =(data)=>{
    return {
        type: ADMIN_USER,
        payload: data
    }
}


export const getSuperAdminData =(data)=>{
    return {
        type: SUPER_ADMIN_USER,
        payload: data
    }
}