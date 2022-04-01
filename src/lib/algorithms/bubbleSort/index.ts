import { IAnimationArray, IArray } from "../../interfaces/array";

const useBubbleSort = (arr: IArray[]) => {
  let tempArr = [...arr];
  let animations: IAnimationArray[] = []

  for(let i=tempArr.length-1; i > 0; i--) {
    for(let j=0; j<i; j++) {
      if(tempArr[j].value > tempArr[j+1].value) {
        animations.push({
          primary: j,
          secondary: j+1,
          swap: true,
        });

        let temp = tempArr[j];
        tempArr[j] = tempArr[j+1];
        tempArr[j+1] = temp;
      } else {
        animations.push({
          primary: j,
          secondary: j+1,
          swap: false,
        });
      }
    }
  }
  return { tempArr, animations };
}

export default useBubbleSort;