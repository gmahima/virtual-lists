"use client";
import {useEffect} from "react";
import {List} from "./List3";
export default function Static() {
  const getItems = () => {
    const items = [];
    for (let index = 0; index < 100; index++) {
      items[index] = "Item " + index;
    }
    return items;
  };
  const items = getItems();
  const Item = ({children, className, style}) => {
    return (
      <div style={style} className={"p-2 " + className}>
        {children}
      </div>
    );
  };
  return (
    <div className="h-screen p-16">
      <List
        overscan={40}
        windowHeight={160}
        itemHeight={40}
        list={items}
        Item={Item}
      />
    </div>
  );
}
