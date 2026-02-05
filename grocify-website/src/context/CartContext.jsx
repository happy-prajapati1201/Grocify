import React, { createContext, useEffect, useMemo, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext?.isLoggedIn || false;
  const user = authContext?.user || null;
  const userId = user?.id ? String(user.id) : 'guest';
  
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem(`cartItems_${userId}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [hasOrderedBefore, setHasOrderedBefore] = useState(() => {
    const saved = localStorage.getItem(`hasOrderedBefore_${userId}`);
    return saved ? JSON.parse(saved) : false;
  });

  const [discountActivated, setDiscountActivated] = useState(() => {
    const saved = localStorage.getItem(`discountActivated_${userId}`);
    return saved ? JSON.parse(saved) : false;
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    const savedItems = localStorage.getItem(`cartItems_${userId}`);
    setItems(savedItems ? JSON.parse(savedItems) : []);

    const savedOrdered = localStorage.getItem(`hasOrderedBefore_${userId}`);
    setHasOrderedBefore(savedOrdered ? JSON.parse(savedOrdered) : false);

    const savedDiscount = localStorage.getItem(`discountActivated_${userId}`);
    setDiscountActivated(savedDiscount ? JSON.parse(savedDiscount) : false);
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(`cartItems_${userId}`, JSON.stringify(items));
  }, [items, userId]);

  const showToast = (message) => {
    setToast({ id: Date.now(), message });
    setTimeout(() => setToast(null), 1800);
  };

  const addToCart = (product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { ...product, qty }];
    });
    showToast(`${product.name} added successfully`);
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const increment = (id) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  };

  const decrement = (id) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p)));
  };

  const clearCart = () => setItems([]);

  const completeOrder = () => {
    setItems([]);
    setHasOrderedBefore(true);
    localStorage.setItem(`hasOrderedBefore_${userId}`, JSON.stringify(true));
  };

  const activateDiscount = () => {
    if (isLoggedIn && !hasOrderedBefore && !discountActivated) {
      setDiscountActivated(true);
      localStorage.setItem(`discountActivated_${userId}`, JSON.stringify(true));
      return true;
    }
    return false;
  };


  const totalItems = useMemo(() => items.reduce((sum, p) => sum + p.qty, 0), [items]);
  const uniqueCount = useMemo(() => items.length, [items]);
  const totalPrice = useMemo(() => items.reduce((sum, p) => sum + p.qty * p.price, 0), [items]);
  
  const isFirstTimeOrder = useMemo(() => !hasOrderedBefore, [hasOrderedBefore]);
  const isDiscountEligible = useMemo(() => isLoggedIn && isFirstTimeOrder, [isLoggedIn, isFirstTimeOrder]);
  const discount = useMemo(() => isDiscountEligible ? 0.20 : 0, [isDiscountEligible]);
  const discountAmount = useMemo(() => totalPrice * discount, [totalPrice, discount]);
  const finalPrice = useMemo(() => totalPrice - discountAmount, [totalPrice, discountAmount]);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      increment, 
      decrement, 
      clearCart, 
      completeOrder,
      activateDiscount,
      discountActivated,
      totalItems, 
      uniqueCount, 
      totalPrice, 
      isFirstTimeOrder,
      isDiscountEligible,
      discount,
      discountAmount,
      finalPrice,
      toast 
    }}>
      {children}
    </CartContext.Provider>
  );
};
