import { ThemeProvider } from "styled-components";
import { HeroSection } from "./components/sections/HeroSection";
import { SelectSection } from "./components/sections/SelectSection";
import { DeliverSection } from "./components/sections/DeliverSection";
import { TradeSection } from "./components/sections/TradeSection";
import { BoxSection } from "./components/sections/BoxSection";
import { CustomerSection } from "./components/sections/CustomerSection";
import useWindowSize from "./hooks/WindowSize";

const theme = {
  colors: {
    navyBlue: "#414a69",
    yellow: "#fbc843",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HeroSection />
        <SelectSection />
        <DeliverSection />
        <TradeSection />
        <BoxSection />
        <CustomerSection />
      </ThemeProvider>
    </div>
  );
}

export default App;
