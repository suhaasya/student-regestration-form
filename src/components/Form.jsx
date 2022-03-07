import React, { useState } from "react";

export default function Form({ setUserData }) {
  const blackInfo = {
    name: "",
    email: "",
    website: "",
    img: "",
    gender: "",
    skill: [],
  };
  const [info, setInfo] = useState({
    name: "",
    email: "",
    website: "",
    img: "",
    gender: "",
    skill: [],
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "skill") {
      setInfo((prev) => ({ ...prev, [name]: [...info.skill, value] }));
    } else {
      setInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const { type } = e.target;
    if (type === "reset") {
      setInfo({
        name: "",
        email: "",
        website: "",
        img: "",
        gender: "",
        skill: [],
      });
    } else {
      if (JSON.stringify(blackInfo) === JSON.stringify(info)) {
        alert("please fill the form before submitting");
      } else {
        setUserData((prev) => [...prev, info]);
        setInfo({
          name: "",
          email: "",
          website: "",
          img: "",
          gender: "",
          skill: [],
        });
      }
    }
  }

  return (
    <form className="form">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={info.name}
        onChange={handleChange}
        className="inp-type"
        required
        placeholder="Enter your Full name"
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        value={info.email}
        onChange={handleChange}
        className="inp-type"
        placeholder="Enter your email"
        required
      />

      <label htmlFor="website">Website:</label>
      <input
        id="website"
        name="website"
        value={info.website}
        type="text"
        onChange={handleChange}
        className="inp-type"
        placeholder="Enter your website link"
      />

      <label htmlFor="img">Image link:</label>
      <input
        id="img"
        name="img"
        type="text"
        value={info.img}
        onChange={handleChange}
        placeholder="Enter your Profile image link"
        className="inp-type"
      />

      <label htmlFor="gender">Gender:</label>

      <div>
        <input
          id="male"
          type="radio"
          value="Male"
          name="gender"
          onChange={handleChange}
          checked={info.gender === "Male"}
          className="gender"
        />
        <label htmlFor="">Male</label>

        <input
          id="female"
          type="radio"
          value="Female"
          name="gender"
          onChange={handleChange}
          checked={info.gender === "Female"}
          className="gender"
        />
        <label htmlFor="">Female</label>
      </div>

      <label htmlFor="">Skills: </label>
      <div>
        <input
          id="java"
          type="checkbox"
          value="Java"
          name="skill"
          checked={info.skill.indexOf("Java") !== -1}
          onChange={handleChange}
          className="skill"
        />
        <label htmlFor="">Java</label>
        <input
          id="html"
          type="checkbox"
          value="HTML"
          name="skill"
          checked={info.skill.indexOf("HTML") !== -1}
          onChange={handleChange}
          className="skill"
        />
        <label htmlFor="">HTML</label>
        <input
          id="css"
          type="checkbox"
          value="CSS"
          name="skill"
          onChange={handleChange}
          checked={info.skill.indexOf("CSS") !== -1}
          className="skill"
        />
        <label htmlFor="">CSS</label>
      </div>
      <button className="btn" type="submit" onClick={handleClick}>
        Enroll Student
      </button>
      <button className="btn" type="reset" onClick={handleClick}>
        Clear
      </button>
    </form>
  );
}
