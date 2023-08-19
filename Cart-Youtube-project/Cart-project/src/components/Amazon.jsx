import React from "react";
import list from "../Data";
import "../styles/amazon.css";
import Cards from "./Cards";


function Amazon({handleclick,remove}) {
  return (
    <section>
      {list.map((item) => (
        <Cards items={item}  handleclick={handleclick} remove={remove} key={item.id}/>
      ))}
    </section>
  );
}

export default Amazon;
