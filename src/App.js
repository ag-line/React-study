/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [제목, 제목변경] = useState(["강남", "용산", "인천"]); //array[값,수정함수]
  let [cnt, cnt_revise] = useState(0);
  let day = "2022-11-04";

  return (
    <div className="App">
      <div className="black-Nav">Area</div>
      <div className="list">
        <h3>
          {제목[0]}
          <span
            onClick={() => {
              cnt_revise(cnt + 1);
            }}
          >
            👍 {cnt}
          </span>
        </h3>
        <p>{day}</p>
        <hr />
      </div>
      <div className="list">
        <h3>{제목[1]}</h3>
        <p>{day}</p>
        <hr />
      </div>
      <div className="list">
        <h3>{제목[2]}</h3>
        <p>{day}</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="Modal">
      <h3>제-목</h3>
      <p>yy-mm-dd</p>
      <p>상세내용</p>
      <hr />
    </div>
  );
}

export default App;
