import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeTitleAction, withParamsAction } from "../redux/actions";


function mainpage() {
   const title = useSelector(state => state.title)

   const dispatch = useDispatch()

   const changeTitle = () => {
      dispatch(changeTitleAction())
   }

   const withParams = () => {
      dispatch(withParamsAction("Hello Geeks!"))
   }

   return (
      <div>
         <h1></h1>
         <button onClick={changeTitle}>change title</button>
         <button>with params</button>
      </div>
   )
}

export default mainpage