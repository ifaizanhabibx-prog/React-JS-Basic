import React, { useState, useCallback, useRef, useContext, useMemo } from "react";
import { UserContext } from "../UserContext";

// Define what props this component expects
interface HomeProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}
const Home: React.FC<HomeProps> = ({ items, setItems}) => {

  // Define the Ref with specific HTML type
  const inputEl = useRef<HTMLInputElement>(null);

  // Helper function (Logic stays ABOVE the return)
  const onButtonCLick = ()=> {
    // TypeScript knows .current might be null, so we use the "?"
    inputEl.current?.focus();
  }
  
  
  function greet(name: string) {
  alert("Hi " + name );
}
  // const fruits = ["Mango", "Orange", "Banana"];

  const users = [
    { id: 1, name: "Faizan" },
    { id: 2, name: "Hussain" },
  ];

  // const {items, setItems} = useContext(UserContext);

  // const [items, setItems] = useState(["Item 1", "Item 2"]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // standered Function
    e.preventDefault();
    alert("Form submitted");
  };
  const resetCount = useCallback(() => {
    setItems(["Items1", "Items2"]);
  }, []);

  return (
    
    <div className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Home Component</h1>
      {/* <button className="btn btn-primary" onClick={resetCount}>Reset Items</button> */}

          {/* Use a card for Item List */}
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white"></div>
            <h4 className="mb-0">My Item List</h4>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush" style={{ maxHeight: "200px", overflowY: "auto"}
            }>

        {/* The ? ensuresit doesn't crash if item is missing */}
        {items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      <button className="bg-primary text-white border-primary" onClick={() => setItems([...items, "NewItem"])}>
        Add Global Item
      </button>

      {/* function greet(name) {alert("Hi " + name)}
      <button className="bg-primary text-white border-primary" onClick={() => greet("Allow")}>Greet</button> */}
      
          </ul>
      
          </div>
<div className="card-footer text-end">
      {/* Lifting State Up is a common pattern in React used when two or more components need to share the same changing data. */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
      <button className="bg-primary text-white border-primary mb-2" onClick={() => setItems([...items, "NewItem"])}>Add Item</button>

</div>

<div className="input-group mb-3">

      {/* Attach the ref to the element */}
      <input ref={inputEl} className="form-control" type="text" placeholder="Enter text..." />
      <button className="bg-primary text-white border-primary" onClick={onButtonCLick}>Focus Input</button>
      <small className="text-muted">Total Items: {items.length}</small>
      <button className="bg-primary text-white border-primary" onClick={() => {
        console.log();
        alert("Hey");
      }}>Click</button> 
</div>
      {/* Form Submit Event */}
      <form onSubmit={handleSubmit}>
      <button className="bg-primary text-white border-primary" type="submit">Submit</button>
      </form>
        </div>
      </div>
    </div>


);
};
export default Home;
