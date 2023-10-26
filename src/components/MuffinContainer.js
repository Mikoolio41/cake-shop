import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyMuffin } from "../redux/muffin/muffinAction";

function MuffinContainer() {
  const numOfMuffin = useSelector((state) => state.muffin.numOfMuffin);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Muffins - {numOfMuffin}</h2>
      <button onClick={() => dispatch(buyMuffin())}>Buy muffin</button>
    </div>
  );
}

export default MuffinContainer;
