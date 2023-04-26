import "./App.css";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState("");
  const [getItem, setGetItem] = useState([]);
  const [edit, setEdit] = useState(false);

  const OnchangeHandler = (e) => {
    setData(e.target.value);
  };
  console.log(data);
  const OnClickHandler = () => {
    setGetItem((val) => {
      return [...val, data];
    });
    setData("");
  };
  const onRemove = (v, i) => {
    const delets = getItem.filter((v, index) => {
      return index !== i;
    });
    setGetItem(delets);
  };
  const oneditHandler = (v, i) => {
    setEdit(i);
    setData(v);
  };

  const onUpdateHanlder = () => {
    const update = getItem.map((v, i) => {
      return edit === i ? data : v;
    });
    setGetItem(update);
    setData("");
  };
  return (
    <div className="App py-5">
      <h1 className="fw-bold">Todo</h1>
      <input type="text" value={data} onChange={OnchangeHandler} />
      <button
        disabled={data.length === 0}
        className="mx-2 btn btn btn-dark"
        onClick={OnClickHandler}
      >
        Add
      </button>
      <button className="btn btn btn-dark" onClick={onUpdateHanlder}>
        update
      </button>
      <ol>
        {getItem.map((v, i) => {
          return (
            <>
              <li className="text-white fs-4 fw-400">{v}</li>
              <button
                className="mx-2 btn btn btn-dark"
                onClick={() => oneditHandler(v, i)}
              >
                edit
              </button>

              <button className="btn btn btn-dark" onClick={() => onRemove(i)}>
                Delete
              </button>
            </>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
