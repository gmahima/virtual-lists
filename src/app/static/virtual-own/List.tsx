//@ts-ignore
import React, {useEffect, useRef, useState} from "react";
export const List = ({list, Item, containerHeight, itemHeight}) => {
  const [listToRender, setListToRender] = useState({
    start: 0,
    end: Math.min(list.length - 1, Math.ceil(containerHeight / itemHeight)),
  });
  const parentContainerRef = useRef(null);

  const calcListToRender = () => {
    const scrollTop = parentContainerRef.current.parentElement.scrollTop;
    const startIndex = Math.max(0, Math.floor(scrollTop / (itemHeight+20))); // no of elements scrolled
    const endIndex = Math.min(
      list.length,
      (Math.min(list.length, Math.ceil((scrollTop + containerHeight) / (itemHeight-20))))
    );
    setListToRender({
      start: startIndex,
      end: endIndex,
    });
    console.log("container height", containerHeight);
    console.log("scroll top", scrollTop);
    console.log("start", startIndex);
    console.log("end", endIndex);
  };

  return (
    <div ref={parentContainerRef} onWheel={calcListToRender}>
      {list.slice(listToRender.start, listToRender.end).map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </div>
  );
};
