import React, {useEffect, useRef, useState} from "react";
const itemHeight = 40; // Adjustable global variable
const windowHeight = 500; // Adjustable global variable
const overscan = 20; // Number of extra items to render before the visible range

//@ts-ignore
export const List = ({list, Item, windowHeight, itemHeight, overscan}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const paddedStartIndex = Math.max(0, startIndex - overscan);

  //   const noOfNodesToRender = Math.ceil(windowHeight / itemHeight) + 2 * overscan;

  const endIndex = Math.ceil((scrollTop + windowHeight) / itemHeight);
  const paddedEndIndex = Math.min(list.length, endIndex + overscan);
  const generateRows = () => {
    console.log(paddedStartIndex);
    return list.slice(paddedStartIndex, paddedEndIndex).map((item) => (
      <Item
        key={item.name}
        // className={"absolute"}
        // style={{
        //   top: item.index * itemHeight,
        // }}
      >
        {item.name}
      </Item>
    ));
  };
  return (
    <ul
      className="border border-black h-[500px] overflow-y-scroll"
      onScroll={(e) => {
        console.log(e.currentTarget.scrollTop);
        setScrollTop(e.currentTarget.scrollTop);
      }}
    >
      <div
        style={{
          height: `${list.length * itemHeight}px`,
        }}
      >
        <div
          className="bg-pink-400"
          style={{
            transform: `translateY(${paddedStartIndex * itemHeight}px)`,
          }}
        >
          {generateRows()}
        </div>
      </div>
    </ul>
  );
};
