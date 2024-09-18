import "./App.css";
import React, { useState } from "react";
// import Header  from "./components/Header";
// import {C} from "./components/Para";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";

// const Para = () => (
//   <p>
//     Hello<code>src/App.js</code> and save to reload.
//   </p>
// );

// class Para extends React.Component {
//   render() {
//     return (
//     <p>
//       Hello<code>src/App.js</code> and save to reload.
//     </p>
//     );
//   }
// }

// function Para() {
//   return (
//     <p>
//       Hello<code>src/App.js</code> and save to reload.
//     </p>
//   );
// }

const add = (a, b) => a + b;

function App() {
  const [isVisible, setVisible] = useState(true);

  const handleVisibility = () => {
    setVisible(!isVisible);
  };

  const ButtonText = isVisible ? "Hide" : "Show";
  const slider = isVisible ? (
    <ImageSlider />
  ) : (
    <div>
      {" "}
      <Counter initialCount={0} />{" "}
    </div>
  );

  return (
    <div className="App">
      {/* <Header 
        name="Harshit" 
        num = {5} 
        myArr = {[1, 2, 3]} 
        myObj={{
          a: 5,
          b: 6
        }} 
        myFunc = {add}
      />
      <C />
      <Counter initialCount = {0}/> */}
      {slider}
      <button onClick={handleVisibility}>{ButtonText}</button>
    </div>
  );
}

export default App;
