/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const BlogList = ({ blogs, title }) => {
  const styles = {
    blog: css``,
    blogContainer: css`
      box-shadow: 0 0.5rem 1rem rgba(128, 128, 128, 0.2);
      border-radius: 24px;
      margin: 2rem 0;
      padding: 1rem;
      transition: 300ms ease-in-out;
      &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      }
    `,
    blogBody: css`
      color: #f1356d;
    `,
    blogAuthor: css`
      color: #808080;
    `,
    blogContent: css``,
  };

  return (
    <section css={styles.blog}>
      <h2>{title}</h2>
      {blogs.map((blogs) => (
        <article css={styles.blogContainer} key={blogs.id}>
          <h2 css={styles.blogBody}>{blogs.title}</h2>
          <span css={styles.blogAuthor}>Writen by: {blogs.author}</span>
        </article>
      ))}
    </section>
  );
};

export default BlogList;
