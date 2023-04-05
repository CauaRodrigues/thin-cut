import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			<Home />
		</ThemeProvider>
	</React.StrictMode>
);
