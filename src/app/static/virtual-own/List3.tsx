import React, {useEffect, useRef, useState} from "react";
const itemHeight = 40; // Adjustable global variable
const windowHeight = 500; // Adjustable global variable
const overscan = 20; // Number of extra items to render before the visible range

//@ts-ignore
export const List = ({list, Item, windowHeight, itemHeight, overscan}) => {
    const [scrollTop, setScrollTop] = useState(0);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const paddedStartIndex = Math.max(0, startIndex - overscan);
    const endIndex = Math.ceil((scrollTop + windowHeight) / itemHeight);
    const paddedEndIndex = Math.min(list.length, endIndex + overscan);
    const generateRows = () => {
      console.log(paddedStartIndex, paddedEndIndex);
      return list.slice(paddedStartIndex, paddedEndIndex).map((item) => (
        <Item
          key={item.name}
          className={"absolute"}
          style={{
            top: item.index * itemHeight,
          }}
        >
          {item.name}
        </Item>
      ));
    };
    return (
      <ul
        className="border border-black h-[500px] relative overflow-y-scroll"
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
          <div className="absolute w-full top-[0px] border border-black"></div>
          {generateRows()}
          <div className="absolute w-full top-[500px] border border-black"></div>
          <div className="absolute w-full top-[1000px] border border-black"></div>
          <div className="absolute w-full top-[1500px] border border-black"></div>
          <div className="absolute w-full top-[2000px] border border-black"></div>
        </div>
      </ul>
    );
};
