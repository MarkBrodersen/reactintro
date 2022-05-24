/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const styles = {
    form: css`
      display: flex;
      flex-direction: column;
      width: 50%;
      margin: 0 auto;
    `,
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:8000/blogs/", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(function () {
      setIsPending(false);
      navigate("/home");
    });
  };
  return (
    <div>
      <h2>Blog Creation</h2>;
      <form css={styles.form} onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <input
          type="textarea"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Martin</option>
          <option value="Yoyo">Magnus</option>
        </select>
        {!isPending && <input type="submit" value="Post Blog" />}
        {isPending && <input type="submit" value="Adding Blog..." disabled />}
      </form>
    </div>
  );
};

export default Create;
