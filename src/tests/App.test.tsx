import { render } from "@testing-library/react";
import App from "App";
import { AppContextProvider } from "contexts/AppContext";
import { GlobalStyle } from "global-styles";

describe("App component", () => {
  it("should", () => {
    render(
      <>
        <GlobalStyle />

        <AppContextProvider>
          <App />
        </AppContextProvider>
      </>
    );
    expect(1 + 1).toBe(2);
  });
});
