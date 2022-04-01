const useGenerateNewArray = (size: number) => {

  let arr = [];

  for(let i=0; i<size; i++) {
    arr.push((Math.floor(Math.random() * 50) + 5))
  }
  return arr;
}

export default useGenerateNewArray;