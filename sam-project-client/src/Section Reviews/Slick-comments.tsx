import React from "react";

const commentText =
  "Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. " +
  "Fruitecake biscuit cheesecake. " +
  "Cookie topping sweet muffin pudding tart bear claw sugar plum croissant. ";

export const comment = [
  {
    avatar: "../img/user-photo1.png",
    name: "Adam Russel",
    position: "CEO & Founder",
    text: commentText
  },
  {
    avatar: "../img/user-photo2.png",
    name: "Aline Zhlen",
    position: "Waiter",
    text: commentText
  },
  {
    avatar: "../img/user-photo3.png",
    name: "Ilone Bimmer",
    position: "Client",
    text: commentText
  }
];

export function Comment(props: any) {
  return (
    <div className="reviews-slider-content flex-center">
      <div className="reviews-author flex-center">
        <img className="reviews-author__photo" src={props.avatar} alt=" " />
        <div className="reviews-author__name text">
          {props.name} - {props.position}
        </div>
        <div className="reviews-author__rating"></div>
      </div>
      <div className="revies-comment text text-center">{props.text}</div>
    </div>
  );
}
