import React from "react";
import Form from "./Form";
import Card from "./Card";
export default function Main({ userData, setUserData }) {
  return (
    <main className="main">
      <div className="right">
        <Form setUserData={setUserData} />
      </div>
      <div className="left">
        <div className="heading">
          <div className="description">
            <h3>Description</h3>
          </div>
          <div className="image-col">
            <h3>Image</h3>
          </div>
        </div>

        {userData.length > 0 ? (
          userData.map((user, i) => (
            <Card
              key={i}
              id={i}
              name={user.name}
              email={user.email}
              website={user.website}
              img={user.img}
              gender={user.gender}
              skill={user.skill}
            />
          ))
        ) : (
          <div className="noDataDiv">No Data present</div>
        )}
      </div>
    </main>
  );
}
