import { createContext, useState } from "react";

export const UserContext = createContext({
    name: "Faizan",
    role: "Developer",
    items: [] as string[]
})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "Faizan", role: "Developer" });
    
    // Add this new state!
    const [items, setItems] = useState(["Apple", "Mango"]); 

    return (
        // Pass both user and items through the value object
        <UserContext.Provider value={{ user, setUser, items, setItems }}>
            {children}
        </UserContext.Provider>
    );
};