/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  navbar: css`
    padding: 20px;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
    & h1 {
      color: #f1356d;
    }
    & a {
      margin-left: 16px;
      text-decoration: none;
      padding: 6px;
      transition: 200ms;
      &:hover {
        color: #f1356d;
      }
    }
  `,
  linksContainer: css`
    margin-left: auto;
  `,
};

const Navbar = () => {
  return (
    <nav css={styles.navbar}>
      <h1>The Dojo Blog</h1>
      <div css={styles.linksContainer}>
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
