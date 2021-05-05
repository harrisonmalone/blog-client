import React, { useContext } from "react";
import { Weeks, AboutMe } from "../styles/Home";
import { Link } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";
import moment from "moment";

function convertTZ(date, tzString) {
  const correctTimeZone = new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
  return moment(correctTimeZone).format("MMMM Do YYYY");
}

export function Home() {
  const { posts } = useContext(PostsContext);
  const firstTenPosts = posts.slice(0, 10);
  return (
    <>
      <h1>
        <Link to="/">hmalone</Link>
      </h1>
      <AboutMe>
        <p>
          Hi, I'm Harrison. I currently work at{" "}
          <a href="https://99designs.com.au/">99designs</a> as a software
          engineer. Here are my current <Link to="/projects">projects</Link>, <a href="/">focusses for the year</a> and the <a href="/">software and hardware I use</a> on a daily basis.
        </p>
      </AboutMe>
      <Weeks>
        <h2>Recent Posts</h2>
        {firstTenPosts.map((post, index) => {
          return (
            <div key={index}>
              <h3 style={{ marginBottom: "15px" }}>
                <Link
                  to={{
                    pathname: post.slug,
                  }}
                >
                  {post.title}
                </Link>
              </h3>
              <p style={{ margin: "0px", fontSize: "large" }}>
                {convertTZ(post.date, "Australia/Sydney")}
              </p>
            </div>
          );
        })}
      </Weeks>
      <hr
        style={{
          margin: "20px 0px",
        }}
      />
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <a
          href="/"
          style={{
            marginRight: "10px",
          }}
        >
          Archive
        </a>
        <a
          href="/"
          style={{
            marginRight: "10px",
          }}
        >
          RSS
        </a>
      </div>
    </>
  );
}
