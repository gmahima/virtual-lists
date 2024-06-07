"use client";
import {useEffect} from "react";
import {FixedSizeList as List} from "react-window";

export default function StaticVirtual() {
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
     "40"
  ];
  const Item = ({index, style}) => {
    useEffect(() => {
      console.log("rendered item " + `${index}`);
      return () => {
        console.log("unmounted item " + `${index}`);
      };
    }, []);
    let content = items[index];
    return <li style={style} className="p-2">{content}</li>;
  };
  return (
    <div className="h-screen p-16">
      <List
        className="bg-gray-300 p-4 list-none"
        height={150}
        itemCount={40}
        itemSize={30}
        width={300}
      >
        {Item}
      </List>
    </div>
  );
}
