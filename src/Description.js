import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <p>
        <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes Workshop
        </a>{" "}
        made me transition my career into tech!{" "}
        <span role="img" aria-label="geek">
          👩‍💻
        </span>
      </p>
      <p>
        I've just finished a React workshop and I'm super excited to learn more{" "}
        <span role="img" aria-label="student">
          👩‍🎓
        </span>
      </p>
      <p>
        I have a degree in Marketing and Publicity, so I've always worked with
        design and web design.
      </p>
      <p>
        I recently finished a course in Digital Marketing as well{" "}
        <span role="img" aria-label="digital">
          📲
        </span>
      </p>
      <p>
        I love travelling{" "}
        <span role="img" aria-label="travel">
          ✈
        </span>{" "}
        , learning languages and Netflixing{" "}
        <span role="img" aria-label="tv">
          🎬
        </span>
      </p>
    </div>
  );
}
