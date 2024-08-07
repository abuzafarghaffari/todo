import React, { useState } from "react";
import { ListType } from "../types";
import { useContextList } from "../store/ContextProvider";

const Items: React.FC<{ list: ListType }> = ({ list }) => {
  const { deleteItem, editList,lists,checkHandler } = useContextList();
  const [inputValue, setInputValue] = useState(list.item);
  const [isEdit, setIsEdit] = useState(false);
 
console.log(lists)
  let content = <p className= {`grow ${list.check ? "line-through" :""}`} >{list.item}</p>;

  if (isEdit) {
    content = (
      <input
        type="text"
        value={inputValue}
        className="p-1 w-full"
        onChange={(e) => setInputValue(e.target.value)}
      />
    );
  }

  const deleteHandler = () => {
    deleteItem(list.id);
  };

  const saveHandler = () => {
    const inputlist = {
      id: list.id,
      item: inputValue,
      check:list.check
    };
    editList(inputlist);
    setIsEdit((prev) => !prev);
  };

  return (
    <li className=" flex gap-2 bg-orange-400 my-2 py-1 px-3 rounded items-center">
      <input type="checkbox" checked={list.check} onChange={()=>checkHandler(list.id)}/>
      {content}
      <button
        className={`px-2 py-1 bg-blue-400 text-white rounded hover:bg-blue-600 ${list.check ? "pointer-events-none opacity-80" :""}`}
        onClick={isEdit ? saveHandler : () => setIsEdit((prev) => !prev)}
      >
        {" "}
        {isEdit ? "Save" : "Edit"}
      </button>
      <button
        className="px-2 py-1 bg-orange-600 text-white rounded hover:bg-orange-900"
        onClick={deleteHandler}
      >
        Delete
      </button>
    </li>
  );
};

export default Items;
