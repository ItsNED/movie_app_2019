import React from 'react';

const food_list = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGj53NQnIIR8qujVgjoEB9f9-JufDEhE_mwDVmin4CjBvxHQcZQ",
    rating: 5.0
  },
  {
    id: 2,
    name: "Pork Valley",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9FYqNhMdYZ4-KkJB46IcuEoZClV_ijBzeqoBtRGe-Z0qTuajAw",
    rating: 4.4
  },
  {
    id: 3,
    name: "rice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FPW5ZK51Wjgt7bYymze6qVONcnmGX80IW43-M4LWugOBQNB3",
    rating: 3.8
  },
  {
    id: 4,
    name: "steak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx21tYkGvec4BA4MwN-u520cy-78hH91R6HFzqLZcIwisSeS2n",
    rating: 5.0
  },
  {
    id: 5,
    name: "soup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5UgoNJ9ttLCw_kGSXanNPuLt-UD_rMTqHTCL5sGjNqw4Honk",
    rating: 3.2
  }
];

function Food({name, image}){
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image} alt={name}/>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* {food_list.map((food, index) => <Food name={food.name} image={food.image}  key={index}></Food>)} */}
      {/* {food_list.map((food, index) => <Food {...food} key={index}></Food>)} */}
      {food_list.map(food => (
        <Food {...food} key={food.id} />
      ))}
    </div>
  );
}

export default App;
