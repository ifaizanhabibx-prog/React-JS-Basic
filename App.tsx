import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";

// 1. Imports (Ensure these files actually exist!)
import Navbar from "./components/Navbar";
// import Counter from "./components/Counter";
import Home from "./components/Home";
import About from "./components/About";
const User = React.lazy(() => import("./components/User"));


function App() {
  //  const [text, setText] = useState("");

  const [items, setItems] = useState<string[]>(["Item1", "Item2"]);
  
  const [count, setCount] = useState(0);
  
  const resetCount = useCallback(() => {
    setItems(["Item1", "Item2"]);
    console.log("List has been reset!");
  }, [])

  return (
    <>
      <div className="App">
      <Suspense fallback={<div className="container mt-5">Loading...</div>}>
      <Navbar onReset={() => setItems([])} itemCount={items.length}/> 
        {/* <Navbar /> */}
        {/* <Counter /> */}
        {/* <Home /> */}
        {/* <About /> */}
        {/* <User /> */}

      {/* Suspense is REQUIRED for lazy loading */}
      <Routes> {/*Routes decide what's happen below the Navbar*/}
        <Route path="/" element={<Home items={items} setItems={setItems}/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/user" element={<User />}/>
      </Routes>
      </Suspense> 
      </div>
    </>
  );
}

export default App;
