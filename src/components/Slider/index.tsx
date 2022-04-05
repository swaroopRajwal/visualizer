import { Slider } from "@mantine/core";
import { PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLength, updateSpeed } from "../../lib/redux/reducers/array";
import { RootState } from "../../lib/redux/store";

interface Props {
  marks: {value: number, label: string}[],
  // dispatchFunction: (state: RootState, action: PayloadAction<number>) => void,
  length?: boolean,
  speed?: boolean,
}

const ConfigSlider = (props: Props) => {

  const dispatch = useDispatch();
  const { length, speed, isSorting } = useSelector((state: RootState) => state.array)
  const [value, setValue] = useState(props.length ? length : speed);

  const changeHandler = (value: number) => {
    setValue(value);
    if(props.length) {
      dispatch(updateLength(value));
      // dispatch
    } else {
      dispatch(updateSpeed(value));
    }
  }

  return(
    <Slider
      value={value}
      disabled={isSorting}
      marks={props.marks}
      min={props.marks[0].value}
      max={props.marks[props.marks.length - 1].value}
      onChange={(e) => changeHandler(e)}
    />
  )
}
export default ConfigSlider;