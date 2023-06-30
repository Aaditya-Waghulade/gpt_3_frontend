import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3?"
          text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination{" "}
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="t the most basic level, a chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person." />
        <Feature title="Knowledgebase" text ="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. " />
        <Feature  title="Education" text ="Bachelor's degree in a field related to AI, such as data science, computer science, IT or statistics. Master's degree (though not typically required) in such disciplines as data science, mathematics, cognitive science or computer science."/>
      </div>
    </div>
  );
};

export default WhatGPT3;
