import { Button } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useBubbleSort from "../../lib/algorithms/bubbleSort";
import useGenerateNewArray from "../../lib/hooks/generateNewArray";
import { newArray, startAnimation, updateAnimationsArray, updateArray } from "../../lib/redux/reducers/array";
import { RootState } from "../../lib/redux/store";

export const StartButton = () => {

  const { array } = useSelector((state: RootState) => state)
  const dispatch = useDispatch();

  const clickHandler = () => {
    const { tempArr, animations } = useBubbleSort(array.array);
    dispatch(updateAnimationsArray(animations));
  }

  useEffect(() => {
    if(array.startAnimation) {
      dispatch(startAnimation());
    }
  }, [array.startAnimation])

  return(
    <>
      <Button
        onClick={clickHandler}
        disabled = {array.isSorting}
      >
        Sort!!!
      </Button>
    </>
  )
}

export const ResetButton = () => {

  const dispatch = useDispatch();
  const { array } = useSelector((state: RootState) => state)

  const clickHandler = () => {
    let arr = useGenerateNewArray(array.length)
    dispatch(newArray(arr));
  }

  return (
    <Button
      onClick={clickHandler}
      disabled={array.isSorting}
    >
      Reset
    </Button>
  )
}