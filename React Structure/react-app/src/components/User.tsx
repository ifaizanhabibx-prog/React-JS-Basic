import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

interface UserProps {
    name: string;
    role: string;
};


const User = () => {
  // const [user, setUser] = useState(false);
  const isLoggedIn = true;
  const isAdmin = true;
  const user = useContext(UserContext);

  // const items = [];

  // Local from state
  const [form, setForm] = useState({ name: "", email: "" });
  const [option, setOption] = useState("");
  const [users, setUsers] = useState<UserData[]>([]);

  if (!users) return <h1>Loading....</h1>;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert(`Form Submitted for: ${form.name}`);
  }

  // Store UI in Variable / Variable Storage
  let message;
  if (isLoggedIn) {
    message = "Welcome User";
  } else {
    message = "Please Login";
  }

  return (
    <>
      {/* Global Data Display(e.g., Logged in User) */}
      <div className="alert alert-info shadow-sm">
        <h1>Name: {user?.name}</h1>
        <p className="mb-0">Role: {user?.role}</p>
      </div>

      <ul className="list-group">
        {users.map((u) => (
          <li key={u.id} className="list-group-item">
            {u.name}
          </li>
        ))}
      </ul>

      {/* Control Form Input */}
      <div className="mt-4">
        <h3>Update Profile Info (Local State)</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="form-control mb-2"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          className="form-control mb-2"
          value={form.email}
          onChange={handleChange}
        />

        <h3>
          Preview: {form.name} {form.email && `(${form.email})`}
        </h3>
      </div>

      {/* Form Submission */}
      <form onSubmit={handleSubmit} className="mt-3">
        <button className="bg-primary border-primary text-white" type="submit">Submit</button>
      </form>

      {/* Other Inputs */}
      <select
        className="form-select mt-3"
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="React">React</option>
        <option value="Node">Node</option>
      </select>

      <textarea onChange={(e) => console.log(e.target.value)} />
      {message}
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <input type="text" className="form-control" placeholder="Username" />
      </div>

      {/* Ternary Operator */}
      {user ? <h1>Dashboard</h1> : <h1>Please Login</h1>}
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}

      {/* Short Circuit (&&) */}
      {isAdmin && <h2>Admin panel</h2>}
      {/* Inline Event with Conditional Logic */}
      {/* <button onClick={()=> isLoggedIn ? alert("welcome") : alert("Please Login")}> */}
      <button className="bg-primary border-primary text-white" onClick={() => setUser(!user)}>Toggle Login</button>

      {/* conditional Rendering for lists */}
      {/* {items.length === 0 ? (
       <p className="text-muted">No items found</p>
      ) : (
        <p className="text-success">Item available: {items.length}</p>
      )}  */}
    </>
  );
}

export default User;
