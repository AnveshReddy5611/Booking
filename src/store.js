import {configureStore} from "@reduxjs/toolkit"
import srmReducer from "./srmSlice"
export default configureStore({
    reducer:{
        srm:srmReducer
    },
})