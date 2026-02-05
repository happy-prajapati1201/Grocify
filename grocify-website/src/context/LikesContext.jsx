import React, { createContext, useState, useEffect } from 'react';

export const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState(() => {
    // Load liked items from localStorage on initial load
    const savedLikes = localStorage.getItem('likedItems');
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  // Save liked items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  const toggleLike = (product) => {
    setLikedItems((prevItems) => {
      const isLiked = prevItems.some((item) => item.id === product.id);
      if (isLiked) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  const isLiked = (productId) => {
    return likedItems.some((item) => item.id === productId);
  };

  return (
    <LikesContext.Provider value={{ likedItems, toggleLike, isLiked }}>
      {children}
    </LikesContext.Provider>
  );
};
