import { createContext, ReactNode, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { ContexType, ACTIONTYPE, ListType } from "../types";

const intitalState = Array(3)
  .fill(0)
  .map(() => ({
    id: faker.string.uuid(),
    item: faker.lorem.sentence(4),
    check:false
  }));

const listContex = createContext<ContexType>({
  addList: (_list) => {},
  lists: [],
  deleteItem:(_id:string)=>{},
  editList:(_:ListType)=>{},
  checkHandler:(_id:string)=>{},

})

const reducer = (state: typeof intitalState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "ADD": {
      const newList = [action.payload, ...state];
      return newList;
    }
    case "DEL":{
                return   state.filter((list)=>list.id !==action.payload)
    }
    case "EDIT":{
        return state.map((list)=>list.id===action.payload.id?{...action.payload,check:false}:list)
    }
    case "CHECK":{
        return state.map((list)=>{
            if(list.id===action.payload){
              return {
                ...list,
                check:!list.check
              }
            }else{
                return list
            }
        })
    }
   
    default: {
      return state;
    }
  }
};

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lists, dispachList] = useReducer(reducer, intitalState);

  const addList = (input: string) => {
const list = {
    id: faker.string.uuid(),
item:input,
check:false
}
    dispachList({
      type: "ADD",
      payload: list,
    });
  };

const editList = (list:ListType)=>{
dispachList({
    type:"EDIT",
    payload:list
})
}
const checkHandler =(id:string)=>{
dispachList({
    type:"CHECK",
    payload:id
})
}
// const completeHandler = (isComplete:boolean) => {
//     dispachList({
//         type:"COMPLETE",
//         payload:isComplete
//     })
// }
const deleteItem =(id:string)=>{
dispachList({
    type:"DEL",
    payload:id
})
}

  const value = {
    addList,
    lists,
    deleteItem,
    editList,
    checkHandler,
    
  };
  return <listContex.Provider value={value}>{children}</listContex.Provider>;
};

export default ContextProvider;

export function useContextList() {
  const stateDetail = useContext(listContex);
  if (!stateDetail) {
    throw new Error("context must be call from provider");
  }

  return stateDetail;
}
