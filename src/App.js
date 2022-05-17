/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "./Navbar";
import Home from "./Home";
import Button from "./Button";

const styles = {
  content: css`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  `,
};
function App() {
  const title = "Welcome to the new blogs";
  return (
    <div className="App">
      <Navbar />
      <Button />
      <div css={styles.content}>
        <Home />
      </div>
    </div>
  );
}

export default App;
