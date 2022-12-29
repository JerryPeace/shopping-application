import { useMemo, useState, createContext, useContext } from 'react';

const ShopCartContext = createContext();

export function useShopCart() {
  return useContext(ShopCartContext);
}

const ShopCartProvider = ({ children }) => {
  const [productCounts, setCounts] = useState(1);
  const [addCart, setCart] = useState(false);

  const value = useMemo(
    () => ({
      productCounts,
      addCart,
      setCounts,
      setCart,
    }),
    [addCart, productCounts]
  );

  return <ShopCartContext.Provider value={value}>{children}</ShopCartContext.Provider>;
};

export default ShopCartProvider;
