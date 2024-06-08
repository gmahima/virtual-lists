import React, {useEffect, useRef, useState} from "react";
const itemHeight = 40; // Adjustable global variable
const windowHeight = 500; // Adjustable global variable
const overscan = 20; // Number of extra items to render before the visible range

//@ts-ignore
export const List = ({list, Item, windowHeight, itemHeight, overscan}) => {
  return (
    <ul>
      <li className="absolute top-[500px]">hi</li>
    </ul>
  );
};
