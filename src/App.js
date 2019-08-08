import React from 'react';

const food_list = [
  {
    name: "kimchi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGj53NQnIIR8qujVgjoEB9f9-JufDEhE_mwDVmin4CjBvxHQcZQ"
  },
  {
    name: "Pork Valley",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9FYqNhMdYZ4-KkJB46IcuEoZClV_ijBzeqoBtRGe-Z0qTuajAw"
  },
  {
    name: "rice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FPW5ZK51Wjgt7bYymze6qVONcnmGX80IW43-M4LWugOBQNB3"
  },
  {
    name: "steak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx21tYkGvec4BA4MwN-u520cy-78hH91R6HFzqLZcIwisSeS2n"
  },
  {
    name: "soup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5UgoNJ9ttLCw_kGSXanNPuLt-UD_rMTqHTCL5sGjNqw4Honk"
  }
];

function Food({name, image}){
  return (
    <>
    <h1>I like {name}</h1>
    <img src={image} alt={name}/>
    </>
  );
}

function App() {
  return (
    <div>
      {/* {food_list.map((food, index) => <Food name={food.name} image={food.image}  key={index}></Food>)} */}
      {food_list.map((food, index) => <Food {...food} key={index}></Food>)}
    </div>
  );
}

export default App;
