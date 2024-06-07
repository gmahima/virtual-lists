"use client";
import {FixedSizeList as List} from "react-window";

export default function StaticVirtual() {
  const items = [
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
  ];
  const Item = ({index, style}) => {
    let content = items[index];
    return <li style={style}>{content}</li>;
  };
  return (
    <div className="h-screen p-16">
      <List
        className="bg-gray-300 p-4 "
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
