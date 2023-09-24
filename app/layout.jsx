import "@styles/globals.css";

import Nav from "@components/nav";
import Provider from "@components/provider";

export const metadata = {
  title: "promptophia",
  description: "discover and share ai prompts",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <div className="app">
            <Nav></Nav>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
