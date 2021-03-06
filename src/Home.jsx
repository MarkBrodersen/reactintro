/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeatherIcon from "feather-icons-react";

import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
  const styles = {
    flexContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      margin: 0 auto;
    `,
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
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <FeatherIcon css={styles.box} icon={"box"} />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
