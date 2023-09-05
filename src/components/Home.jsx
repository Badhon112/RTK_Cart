import React from "react";
import Cardsdata from "./CardData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
const Item = () => {
  const dispatch = useDispatch();
  const senddata = (e) => {
    dispatch(addToCart(e))
  };
  return (
    <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-4 lg:px-0">
      {Cardsdata.map((item, index) => {
        return (
          <article className="relative p-2" key={index}>
            <div className="aspect-square overflow-hidden">
              <img
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                src={item.imgdata}
                alt={item.dish}
              />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div className="">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                  {item.dish}
                  <span className="absolute" aria-hidden="true"></span>
                </h3>
              </div>

              <div className="text-right">
                <p className="text-xs font-normal sm:text-sm md:text-base bg-green-400 text-white p-1 rounded-lg">
                  {item.rating} *
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="">
                <h3 className="text-xs font-semibold sm:text-sm md:text-base overflow-hidden">
                  {item.address}
                  <span className="absolute" aria-hidden="true"></span>
                </h3>
              </div>

              <div className="text-right">
                <p className="text-xs font-normal sm:text-sm md:text-base">
                  ${item.price}
                </p>
              </div>
            </div>
            <hr className="w-full bg-black p-[1px]" />
            <button
              className="items-center ml-4 bg-blue-800 text-white mt-1 rounded-full p-2 w-56"
              onClick={() => senddata(item)}
            >
              Add to Cart
            </button>
          </article>
        );
      })}
    </main>
  );
};

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Item />
    </div>
  );
}
