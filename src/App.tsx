import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { HeaderComponent } from "./components/Header/Header";
import { GlobalStyles } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route";

export function App() {
 return(
  <ThemeProvider theme={defaultTheme}>
     <HeaderComponent />
      <RouterProvider  router={router}  />
     <GlobalStyles />
  </ThemeProvider>
 )
}

