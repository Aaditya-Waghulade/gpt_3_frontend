import React from 'react'
import './possibility.css';
import  possibility  from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-container">
        <h1 className="gradient__text">The possibilites are beyond Your Imagination</h1>
        <p>It was originally taken from a Latin text written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.
The "filler" text we know today has been altered over the years in fact "Lorem" isn't actually a Latin word. It is suggested that the reason that the text starts with "Lorem" is</p>
      </div>
    </div>
  )
}

export default Possibility