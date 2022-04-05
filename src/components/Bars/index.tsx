import { Button, Container, Grid, Group, ListItem, SharedPopperProps, SimpleGrid, Tooltip, useMantineTheme } from "@mantine/core"
import { useSelector } from "react-redux"
import { IArray } from "../../lib/interfaces/array"
import { RootState } from "../../lib/redux/store"
import { IToolTipConfig } from "./interfaces"
import useStyles from "./styles"
import { getRandomColor, getRandomPlacement, getRandomPosition, getRandomTransitions} from './getRandom'

const Bar = (props: IArray) => {
  const { classes } = useStyles({...props})
  const theme = useMantineTheme();


  return (
    <div
      style={{
        height: `${props.value * 10}px`,
        minWidth: "15px",
      }}
    >
      <Tooltip
        label={props.value}
        position={getRandomPosition()}
        placement={getRandomPlacement()}
        withArrow
        classNames={{
          root: classes.tooltip,
        }}
        color={getRandomColor()}
        transition={getRandomTransitions()}
        transitionDuration={200}
        transitionTimingFunction="ease"
      >
        <div 
          style={{
            height: "100%",
            width: "100%"
          }}
          className={classes.bar}
        />
      </Tooltip>
    </div>
  )
}


const Bars = () => {
  const { array } = useSelector((state: RootState) => state);

  return(
    <Container
      size="xl"
      py="md"
    >
      <SimpleGrid
        cols={array.length}
        spacing="xs"
      >
        {array.array?.map((item, i) => {
          return (
            <Bar 
              key={i}
              {...item}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}
export default Bars;