import { Group, Space } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bars from "./components/Bars";
import Drawer from "./components/Drawer";
import useGenerateNewArray from "./lib/hooks/generateNewArray";
import { IArray } from "./lib/interfaces/array";
import { newArray } from "./lib/redux/reducers/array";
import { RootState } from "./lib/redux/store";

const App = () => {
  const dispatch = useDispatch();
  const { array } = useSelector((state: RootState) => state)

  useEffect(() => {
    let arr = useGenerateNewArray(array.length)
    dispatch(newArray(arr));
  }, [array.length])

  return(
    <>
      <Drawer/>
      <Space/>
      <Bars/>
    </>
  )
}
export default App;