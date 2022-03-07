import React from "react";

export default function Card({ name, email, website, img, gender, skill }) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  skill = skill.filter(onlyUnique);

  return (
    <div className="card">
      <div className="description-card">
        <h4>{name}</h4>
        <p>{gender}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <a href={website}>{website}</a>
        </p>
        <p>
          {skill.map((skill, i) => (
            <span key={i}>{skill} </span>
          ))}
        </p>
      </div>
      <div className="image-card">
        <img src={img} className="avatar" alt="profilePic" />
      </div>
    </div>
  );
}
