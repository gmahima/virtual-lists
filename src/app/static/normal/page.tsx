"use client";
import {useEffect} from "react";
import {FixedSizeList as List} from "react-window";

export default function Static() {
  const items = [
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
    "40",
  ];
  const Item = ({data, style = {}}) => {
    return <li style={style}>{data}</li>;
  };
  return (
    <div className="h-screen p-16">
      <ul
        className="bg-gray-300 overflow-auto h-[150px]"
      >
        {items.map((item) => (
          <Item key={item} data={item}></Item>
        ))}
      </ul>
    </div>
  );
}
