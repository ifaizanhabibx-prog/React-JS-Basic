import React, { Children, createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children } : { children: React.ReactNode}) => {
    
    const [user, setUser] = useState({ name: "Faizan", role: "Developer" });

    const [items, setItems] = useState<string[]>([]);
    // Add this new state!
    // const [items, setItems] = useState(["Apple", "Mango"]); 

    return (
        // Pass both user and items through the value object
        <UserContext.Provider value={{ user, setUser, items, setItems }}>
            {children}
        </UserContext.Provider>
    );
};