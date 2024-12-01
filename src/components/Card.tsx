import React from "react";

const Card = (props:any) => {
  return (
    <div className="border-2 border-solid border-black  w-1/5 m-8 h-96">
      <img
        className="p-2 m-2 flex flex-col items-center"
        src="https://tse3.mm.bing.net/th?id=OIP.DrQ9r0UM3pZwCrGXo-8d6QHaEI&pid=Api&P=0&h=220"
        alt=""
        width={233}
      />
      <h1 className="text-4xl p-4">{props.title}</h1>
      <p className="p-4">{props.description}</p>
      <p className="p-4">{props.name}</p>
    </div>
  );
};

export default Card;
