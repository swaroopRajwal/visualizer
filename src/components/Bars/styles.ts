import { Autocomplete, createStyles, MantineTheme } from "@mantine/core";
import { IArray } from "../../lib/interfaces/array";

const determineColor = (args: IArray, theme: MantineTheme) => {
  // if(args.primary) {
  //   return theme.colors.blue[5];
  // } else if (args.secondary) {
  //   return theme.colors.yellow[5];
  // } else {
  //   return theme.colors.teal[4];
  // }
  if(args.selected) {
    return theme.colors.pink[8];
  } else {
    return theme.colors.teal[5];
  }
} 

const useStyles = createStyles((theme, params: IArray) => ({
  bar: {
    // minWidth: "15px", 
    background: determineColor(params, theme),
    // background: theme.colors.teal[5],
  },
  barsGroup: {
    alignItems: "flex-start",
  },
  tooltip: {
    height: "100%",
    width: "100%",
  }
}))

export default useStyles;