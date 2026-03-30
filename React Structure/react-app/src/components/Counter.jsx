import { useReducer } from "react";
import { useState, useCallback, useRef, useEffect } from "react";

// Initial State
const initialState = { count: 0 };

// The Brain (Reducer)
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Message = ({ text }) => {
  console.log("Message component rendered!");
  return <p>{text}</p>;
};


function Counter() {
  const [count, setCount] = useState(0);

  // Initialize: [currentValue, triggerFunction]
  const [state, dispatch] = useReducer(reducer, initialState);

      const resetCount = useCallback(()=>{
        setCount(0);
      }, []);

      const renderCount = useRef(0);
  
      useEffect(()=> {
        renderCount.current = renderCount.current + 1; 
        console.log(`Component has rendered ${renderCount.current} times`);
      }); // No re-render triggered by updating the ref!
  return (
    <>
      {/* <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <div
        onMouseEnter={() => console.log("Mouse Event")}
        onMouseLeave={() => console.log("Mouse Leave")}
      >
        Hover over me
      </div>
      </div> */}
      <Message text="Welcome to the Counter" onReset={resetCount} />
      <h1>Count: {state.count}</h1>
      {/* We "dispatch" the action object  */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>initialState</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {/* <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div> */}
    </>
  );
}

export default Counter;
