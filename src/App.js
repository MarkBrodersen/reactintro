/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "./Navbar";
import Home from "./Home";
import Button from "./Button";
import Input from "./Input";

const styles = {
  content: css`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  `,
};
function App() {
  const title = "Welcome to the new blok";
  const likes = 50;
  const person = { name: "Seb", age: 19 };
  return (
    <div className="App">
      <Navbar />
      <div css={styles.content}>
        <h1>{title}</h1>
        <p>Liked: {likes * likes} times</p>
        <span>
          {person.name} {person.age}
        </span>
        <Home />
        <Button />
        <Input />
      </div>
    </div>
  );
}

export default App;
