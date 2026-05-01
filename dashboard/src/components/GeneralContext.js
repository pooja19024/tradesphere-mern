import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";


// Create global context for managing Buy window state
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  // State to control visibility of Buy window
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);

  // Store selected stock
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // Open Buy window
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // Close Buy window
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}

      {/* Conditional rendering of Buy window */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;