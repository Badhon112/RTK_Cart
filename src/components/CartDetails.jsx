import React, { useState } from "react";
import Cardsdata from "./CardData";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../redux/features/cartSlice";
export default function TableCart() {
  const dispatch = useDispatch();
  let itemCount = 1;
  const selecteditem = useSelector((state) => state.allCart.carts);
  let allPrice = useSelector((state) => state.allCart.allPrice);
  const [data, setData] = useState(selecteditem);
  const Empty = () => {
    setData([]);
    dispatch(removeToCart());
  };
  // const Increment = (e) => {
  //   allPrice += e.target.value;
  //   itemCount += 1;
  // };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Your Cart
          </h1>
        </header>
        <div className="mt-8">
          <ul className="space-y-4">
            <li className="flex items-center gap-2 justify-between text-2xl bg-black text-white p-4 rounded-lg">
              <div>Cart Calculation</div>
              <span className="bg-red-400 p-2 rounded-lg text-white">
                <button onClick={Empty}>Empty Cart </button>
              </span>
            </li>
          </ul>
        </div>
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-2xl text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-500  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Action
                    </th>
                    <td className="px-6 py-4 w-20 h-20">
                      <img
                        src={item.imgdata}
                        alt=""
                        className="w-full h-full"
                      />
                    </td>
                    <td className="px-6 py-4">{item.dish}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="space-x-3">
                      <button
                        className=""
                        onClick={() => {
                          item.qnty -= 1;
                          console.log("Decremetn");
                        }}
                      >
                        -
                      </button>
                      <input type="text" value={item.qnty} disabled className="w-5" />
                      <button
                        className=" "
                        onClick={() => {
                          item.qnty += 1;
                          console.log("Increment");
                        }}
                      >
                        +
                      </button>
                    </td>
                    <td className="px-6 py-4">{item.price *item.qnty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr className="p-[1px] bg-black " />
          <li className="flex items-center gap-4 justify-between text-xl">
            <span className="ml-96 font-bold">Item in Cart : 1</span>
            <span className="font-bold">
              Total Price : $ <span className="text-red-700">{allPrice}</span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}
