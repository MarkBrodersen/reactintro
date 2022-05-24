/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const styles = {
    blog: css``,
    blogContainer: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      margin: 5px 0 15px 0;
    `,
    blogButton: css`
      border-radius: 50%;
      border: none;
      background-color: rgba(128, 128, 128, 0.2);
      width: 32px;
      height: 32px;
      transition: 300ms ease-in-out;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    `,
  };

  return (
    <section css={styles.blog}>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <article css={styles.blogContainer} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div>
              <h2 css={styles.blogBody}>{blog.title}</h2>
              <span css={styles.blogAuthor}>Writen by: {blog.author}</span>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default BlogList;
