import React, { useEffect, useState } from 'react'
import {store} from './redux/store/store'
import { Provider } from "react-redux";


//CSS
import "./App.css";

const App=()=>{

   return (

    <Provider store={store}>
        <div>App</div>
    </Provider>
  )
}

export default App 