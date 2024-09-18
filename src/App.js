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
  // const [isVisible, setVisible] = useState(true);
  // const [componentToShow, changeComponentTo] = useState("Counter");

  // const handleVisibility = () => {
  //   setVisible(!isVisible);
  // };

  // const ButtonText = isVisible ? "Hide" : "Show";
  // const slider = isVisible ? (
  //   <ImageSlider />
  // ) : (
  //   <div>
  //     {" "}
  //     <Counter initialCount={0} />
  //   </div>
  // );

  // if (componentToShow === "ImageSlider") {
  //   return (
  //     <div className="App">
  //       <div className={isVisible ? "visible" : "hidden"}>
  //         <ImageSlider />
  //         <button
  //           onClick={() => {
  //             changeComponentTo("Counter");
  //             setVisible(!isVisible);
  //           }}
  //         >
  //           Counter
  //         </button>
  //       </div>
  //     </div>
  //   );
  // } else if (componentToShow === "Counter") {
  //   return (
  //     <div className="App">
  //       <div className={isVisible ? "visible" : "hidden"}>
  //         <Counter initialCount={0} />
  //         <button
  //           onClick={() => {
  //             changeComponentTo("ImageSlider");
  //             setVisible(!isVisible);
  //           }}
  //         >
  //           ImageSlider
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="App">
  //     {/* <Header
  //       name="Harshit"
  //       num = {5}
  //       myArr = {[1, 2, 3]}
  //       myObj={{
  //         a: 5,
  //         b: 6
  //       }}
  //       myFunc = {add}
  //     />
  //     <C />
  //     <Counter initialCount = {0}/> */}
  //     {slider}
  //     <button onClick={handleVisibility}>{ButtonText}</button>
  //   </div>
  // );

  const [activeComponent, setActiveComponent] = useState("Counter");

  return (
    <div className="App">
      <div
        style={{ display: activeComponent === "Counter" ? "block" : "none" }}
      >
        <Counter initialCount={0} />
      </div>
      <div
        style={{
          display: activeComponent === "ImageSlider" ? "block" : "none",
        }}
      >
        <ImageSlider />
      </div>
      <button
        onClick={() =>
          setActiveComponent(
            activeComponent === "Counter" ? "ImageSlider" : "Counter"
          )
        }
      >
        Switch to {activeComponent === "Counter" ? "ImageSlider" : "Counter"}
      </button>
    </div>
  );
}

export default App;
