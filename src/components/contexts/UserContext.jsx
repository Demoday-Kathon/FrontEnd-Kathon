import React, { createContext, useState, useContext, useEffect } from 'react';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const storedUser = localStorage.getItem('user');
    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null); 

   
    const login = (userData) => {
        setUser(userData); 
        localStorage.setItem('user', JSON.stringify(userData)); 
        console.log(userData);
    };

    
    const logout = () => {
        setUser(null); 
        localStorage.removeItem('user'); 
    };

    
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user)); 
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};


export const useUser = () => {
    return useContext(UserContext);
};
