import React from "react";
import "./header.css";
import people from"../../assets/people.png";
import ai from"../../assets/ai.png";
const header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className=" gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          ChatGPT is an artificial intelligence chatbot developed by OpenAI and
          launched on November 30, 2022. It is notable for enabling users to
          refine and steer a conversation towards a desired length, format,
          style, level of detail, and language used. Successive prompts and
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.6k+ users for GPT-3</p>
        </div>
      </div>
       <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default header;
