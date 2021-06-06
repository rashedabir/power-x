import price1 from "../assets/196-1961213_photo-wallpaper-muscle-muscle-rod-background-black-gym.jpg";
import price2 from "../assets/istockphoto-690667118-612x612.jpg";
import price3 from "../assets/price3.jpg";
import class1 from "../assets/class1.jpg";
import class2 from "../assets/class2.jpg";
import class3 from "../assets/class3.jpg";
import class4 from "../assets/class4.jpg";
import class5 from "../assets/class5.jpg";
import class6 from "../assets/class6.jpg";
import { VIEW_OFFER } from "../context/offerContext";

const initialState = {
  offer: [
    {
      _id: "1",
      title: "Advanced plan",
      price: "1500",
      img: price1,
    },
    {
      _id: "2",
      title: "basic plan",
      price: "1000",
      img: price3,
    },
    {
      _id: "3",
      title: "beginner plan",
      price: "500",
      img: price2,
    },
  ],
  class: [
    {
      id: 1,
      title: "psycho training",
      img: class1,
    },
    {
      id: 2,
      title: "selfe defense",
      img: class2,
    },
    {
      id: 3,
      title: "advance gym",
      img: class3,
    },
    {
      id: 4,
      title: "cadio training",
      img: class4,
    },
    {
      id: 5,
      title: "strength training",
      img: class5,
    },
    {
      id: 6,
      title: "yoga training",
      img: class6,
    },
  ],
};

export const viewOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_OFFER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
