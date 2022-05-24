/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "./Navbar";
import Button from "./Button";
import { Outlet } from "react-router-dom";

const styles = {
  content: css`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  `,
};
function App() {
  return (
    <div className="App">
      <Navbar />
      <Button />
      <div css={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
