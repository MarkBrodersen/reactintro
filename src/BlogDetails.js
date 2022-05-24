/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  const styles = {
    box: css`
      animation: loading 1000ms infinite;
      width: 200px;
      height: 200px;

      @keyframes loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleClick = () => {
    if (window.confirm("are you sure"))
      fetch("http://localhost:8000/blogs/" + blogs.id, {
        method: "DELETE",
      }).then(() => {
        navigate("/home");
      });
  };
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <FeatherIcon css={styles.box} icon={"box"} />
        </div>
      )}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <span>Writthen by: {blogs.author}</span>
          <p>{blogs.body}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
