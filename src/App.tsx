import React from "react";
import nameof from "ts-nameof.macro";

import "./App.css";

interface IBar {
  prop1: boolean;
  prop2: boolean;
}
interface IFoo {
  prop1: boolean;
  bar: IBar;
}

export const baz = {
  path1: nameof.toArray<IBar>(o => [o.prop1, o.prop2]),
  path2: nameof.full<IFoo>(o => o.bar.prop1)
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{baz.path1}</p>
        <p>{baz.path2}</p>
      </header>
    </div>
  );
}

export default App;
