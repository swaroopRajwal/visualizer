import { useTheme } from "@emotion/react"
import { Button, Container, Grid, Group, ListItem, SimpleGrid } from "@mantine/core"
import { useSelector } from "react-redux"
import { IArray } from "../../lib/interfaces/array"
import { RootState } from "../../lib/redux/store"
import useStyles from "./styles"

const Bar = (props: IArray) => {
  const { classes } = useStyles({...props})

  return (
    <div 
      className={classes.bar}
      style={{
        height: `${props.value * 10}px`
      }}
    />
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