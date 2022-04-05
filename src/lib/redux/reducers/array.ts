import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { IAnimationArray, IArray } from "../../interfaces/array";
import { AppDispatch, RootState } from "../store";

interface initialState {
  array: IArray[],
  length: number,
  animations: IAnimationArray[],
  startAnimation: boolean,
  speed: number,
  config: {
    speed: { value: number, label: string }[],
    length: { value: number, label: string }[],
  },
  isSorting: boolean,
}

const initialState: initialState = {
  array: [],
  length: 10,
  animations: [],
  startAnimation: false,
  speed: 550,
  config: {
    speed: [
      { value: 100, label: '100'},
      { value: 550, label: '550' },
      { value: 1000, label: '1000' },
    ],
    length: [
      { value: 5, label: '5' },
      { value: 10, label: '10' },
      { value: 15, label: '15' },
      { value: 20, label: '20' },
    ]
  },
  isSorting: false,
}

const arrayReducer = createSlice({
  name: "array",
  initialState,
  reducers: {
    newArray: (state, action: PayloadAction<number[]>) => {
      state.array = action.payload.map(item => {
        return {
          value: item,
          selected: false,
        }
      })
    },
    updateSize: (state, action: PayloadAction<number>) => {
      state.length = action.payload;
    },
    updateArray: (state, action: PayloadAction<IArray[]>) => {
      state.array = action.payload;
    },
    updateAnimationsArray: (state, action: PayloadAction<IAnimationArray[]>) => {
      state.animations = action.payload;
      state.startAnimation = true;
      state.isSorting = true;
    },
    setSelected: (state, action: PayloadAction<number>) => {
      state.array[action.payload].selected = true;
    },
    removeSelected: (state, action: PayloadAction<number>) => {
      state.array[action.payload].selected = false;
    },
    swap: (state, action: PayloadAction<number[]>) => {
      let temp = state.array[action.payload[0]];
      state.array[action.payload[0]] = state.array[action.payload[1]]
      state.array[action.payload[1]] = temp;

      state.array[action.payload[0]].selected = false;
      state.array[action.payload[1]].selected = false;
    },
    updateLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload;

    },
    updateSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    reset: (state) => {
      state.animations = [];
      state.startAnimation = false;
      state.isSorting = false;
    }

  }
})

export default arrayReducer.reducer;

export const {
  newArray,
  updateSize,
  updateArray,
  updateAnimationsArray,
  swap,
  setSelected,
  removeSelected,
  updateLength,
  updateSpeed,
  reset,
} = arrayReducer.actions;

export const startAnimation = () => async (dispatch: AppDispatch, state: () => RootState) => {

  let arr = [...state().array.animations];
  let speed = state().array.speed;

  for (let i = 0; i < arr.length; i++) {
    dispatch(setSelected(arr[i].primary))
    dispatch(setSelected(arr[i].secondary))
    await new Promise(res => setTimeout(res, speed));
    if (arr[i].swap) {
      dispatch(swap([arr[i].primary, arr[i].secondary]));
    } else {
      dispatch(removeSelected(arr[i].primary));
      dispatch(removeSelected(arr[i].secondary));
    }
    await new Promise(res => setTimeout(res, 50))
  }
  dispatch(reset());
}
// }





