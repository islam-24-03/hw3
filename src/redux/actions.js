import { types } from "./types"

export function changeTitleAction () { 
   return {
      type: types.CHANGE_TITLE
   }
}
 
export function withParamsAction(title){
   return {
      type: types.WITH_PARAMS,
      payload: title
   }
}

export function changeInputAction(value) {
   return {
      type: types.VALUE,
      payload: value
   }
}

export function addAction (name) {
   return {
      type: types.ADD,
      payload: name
   }
}

export const clearAction = () => {
   return {
      type: types.CLEAR,
   };
};


export function deleteAction() {
   return {
     type: types.DELETE,
   };
 }
 