import React, {useEffect, useRef, useState} from "react";
//@ts-ignore
export const List = ({list, Item, containerHeight, itemHeight}) => {
  const [listToRender, setListToRender] = useState({
    start: 0,
    end: Math.min(list.length - 1, Math.ceil(containerHeight / itemHeight)),
  });
  const scrollRef = useRef(0);
  const parentContainerRef = useRef(null);

  const calcListToRender = () => {
    //@ts-ignore
    const scrollTop = parentContainerRef.current.parentElement.scrollTop;
    const lengthScrolled = scrollTop - scrollRef.current;
    const startIndexOffset = scrollTop;
    const endIndexOffset = startIndexOffset + containerHeight;
    const startIndex = Math.max(
      0,
      Math.floor(startIndexOffset / (itemHeight + 20))
    ); // how much you have scrolled / item height will give start index
    const endIndex = Math.ceil(endIndexOffset / (itemHeight - 20));
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
      <div>asdf</div>
      {/*@ts-ignore*/}
      {list.slice(listToRender.start, listToRender.end).map((item) => (
        <Item key={item}>{item}</Item>
      ))}
      <div>asdf</div>
    </div>
  );
};
