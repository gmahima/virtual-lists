"use client";
import {useEffect} from "react";
import {List} from "./List3";
export default function Static() {
  const items = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
  ];
  const Item = ({children, className, style}) => {
    return (
      <div style={style} className={"p-2 " + className}>
        {children}
      </div>
    );
  };
  return (
    <div className="h-screen p-16">
      <div className="border border-black h-[150px] overflow-auto relative">
        <List
          overscan={4}
          windowHeight={160}
          itemHeight={40}
          list={items}
          Item={Item}
        />
      </div>
    </div>
  );
}
