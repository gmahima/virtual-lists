import React, {useEffect, useRef, useState} from "react";
//@ts-ignore
export const List = ({list, Item, containerHeight, itemHeight}) => {
  const [listToRender, setListToRender] = useState({
    start: 0,
    end: Math.min(list.length - 1, Math.ceil(containerHeight / itemHeight) + 2),
  });
  const scrollRef = useRef(0);
  const parentContainerRef = useRef(null);

  const calcListToRender = () => {
    //@ts-ignore
    const scrollTop = parentContainerRef.current.parentElement.scrollTop;
    const lengthScrolled = scrollTop - scrollRef.current;
    console.log("length scrolled", lengthScrolled);
    if (scrollTop === scrollRef.current) {
      return;
    }
    const startIndexOffset = scrollTop - 80;
    const endIndexOffset = scrollTop + containerHeight + 80;
    const startIndex = Math.max(0, Math.floor(startIndexOffset / itemHeight)); // how much you have scrolled / item height will give start index
    const endIndex = list.length;
    // const startIndex = Math.max(0, Math.floor(scrollTop / (itemHeight + 20))); // no of elements scrolled
    // const endIndex = Math.min(
    //   list.length,
    //   Math.min(
    //     list.length,
    //     Math.ceil((scrollTop + containerHeight) / (itemHeight - 20))
    //   )
    // );
    setListToRender({
      start: startIndex,
      end: endIndex,
    });
    scrollRef.current = scrollTop;
    console.log("container height", containerHeight);
    console.log("scroll top", scrollTop);
    console.log("start", startIndex);
    console.log("end", endIndex);
  };

    return (
      <div ref={parentContainerRef} onWheel={calcListToRender}>
        {/*@ts-ignore*/}
        {list.slice(listToRender.start, listToRender.end).map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </div>
    );
};
