export type ListType ={
    id:string;
    item:string,
    check:boolean
}

export type ContexType ={
    addList:(input: string)=>void,
    lists:ListType[],
    deleteItem:(id:string)=>void,
    editList:(list:ListType)=>void,
    checkHandler:(id:string)=>void,
  
}

export type ACTIONTYPE =
  | { type: "ADD"; payload:ListType }
  |{type:"DEL",payload:string}
   |{type:"EDIT",payload:ListType}
   |{type:"CHECK",payload:string}
   |{type:"COMPLETE",payload:boolean};
 
