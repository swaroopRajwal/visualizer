import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { IAnimationArray, IArray } from "../../interfaces/array";
import { AppDispatch, RootState } from "../store";

interface initialState {
  array: IArray[],
  length: number,
  animations: IAnimationArray[],
  startAnimation: boolean,
}

const initialState: initialState = {
  array: [],
  length: 20,
  animations: [],
  startAnimation: false,
}

const arrayReducer = createSlice({
  name: "array",
  initialState,
  reducers: {
    newArray: (state, action: PayloadAction<number[]>) => {
      state.array = action.payload.map(item => {
        return {
          value: item,
          secondary: false,
          primary: false,
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
    },
    setPrimary: (state, action: PayloadAction<number>) => {
      state.array[action.payload].primary = true;
    },
    setSecondary: (state, action: PayloadAction<number>) => {
      state.array[action.payload].secondary = true;
    },
    removePrimary: (state, action: PayloadAction<number>) => {
      state.array[action.payload].primary = false;
    },
    removeSecondary: (state, action: PayloadAction<number>) => {
      state.array[action.payload].secondary = false;
    },
    swap: (state, action: PayloadAction<number[]>) => {
      let temp = state.array[action.payload[0]];
      state.array[action.payload[0]] = state.array[action.payload[1]]
      state.array[action.payload[1]] = temp;

      state.array[action.payload[1]].primary = false;
      state.array[action.payload[0]].secondary = false;
      state.array[action.payload[1]].secondary = false;
      state.array[action.payload[0]].primary = false;
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
  setPrimary,
  setSecondary,
  removePrimary,
  removeSecondary,
} = arrayReducer.actions;

export const startAnimation = () => (dispatch: AppDispatch, state: () => RootState) => {

  let arr = [...state().array.animations];

  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      if (arr[i].swap) {
        dispatch(swap([arr[i].primary, arr[i].secondary]));
      }
    }, 50 * i);
    // setTimeout(() => {
    //   dispatch(removePrimary(arr[i].primary));
    //   dispatch(removeSecondary(arr[i].secondary));
    // }, 100 * i);
  }
}
// }





