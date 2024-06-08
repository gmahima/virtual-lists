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
      return list
        .slice(paddedStartIndex, paddedEndIndex)
        .map((item, itemIndex) => (
          <Item
            key={item}
            className={"absolute"}
            style={{
              top: itemIndex * itemHeight,
            }}
          >
            {item}
          </Item>
        ));
    };
    return (
      <ul
        className="border border-black h-[500px] overflow-auto relative"
        onScroll={(e) => {
          console.log(e.currentTarget.scrollTop);
          setScrollTop(e.currentTarget.scrollTop);
        }}
      >
        {generateRows()}
      </ul>
    );
};
