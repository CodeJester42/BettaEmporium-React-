import React, { createContext } from "react";
import all_products from '../Components/Assets/all_products'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
	const ContextValue = {all_product};
	
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider;
