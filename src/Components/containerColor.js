import { useState } from "react";

const useGenerateRandomColor = () => {
  const [colorFill, pickerColor] = useState("");

  const clickColor = () => {
    pickerColor(Math.random().toString(16).substr(-6));
  };

  return { colorFill, clickColor };
};

export default useGenerateRandomColor;
