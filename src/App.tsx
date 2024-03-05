import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { HeaderComponent } from "./components/Header/Header";
import { GlobalStyles } from "./styles/global";
import { Profile } from "./components/Profile";

export function App() {
 return(
  <ThemeProvider theme={defaultTheme}>
     <HeaderComponent />
     <Profile />
     <GlobalStyles />
  </ThemeProvider>
 )
}

