import React, { useRef, useState } from "react";
import { useContextList } from "../store/ContextProvider";
import Items from "./Items";

const Lists = () => {
  const { lists } = useContextList();
  const [check, setCheck] = useState(false);

  const filteredList = () => {
    if (check) {
      return lists.filter((list) => !list.check);
    } else {
      return lists;
    }
  };

  const uncompletetak = lists.reduce(
    (count, list) => count + (list.check ? 0 : 1),
    0
  );

  return (
    <div>
      <section>
        <input
          type="checkbox"
          id="com"
          checked={check}
          onChange={() => setCheck((prev) => !prev)}
        />
        <label htmlFor="com">Only incomplete task</label>
        <h2>{uncompletetak} Uncomplete task</h2>
      </section>
      <ul>
        {filteredList().length > 0 ? (
          filteredList().map((list) => <Items key={list.id} list={list} />)
        ) : (
          <p className=" text-white">All task complete</p>
        )}
      </ul>
    </div>
  );
};

export default Lists;
