import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import twitterLogo from "../assets/twitter.webp";

const Home = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>AI Avatar Generator</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>My AI Avatar picture generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>description of your generator</h2>
          </div>
          <div className="prompt-container">
            <input
              className="prompt-box"
              value={input}
              placeholder="type here"
              onChange={handleChange}
            />
            <div className="prompt-buttons">
              <a className="generate-button">
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://github.com/ronkips/ai-avatar-starter.git"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={twitterLogo} alt="twitter logo" />
            <p>my github repository</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
