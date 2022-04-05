import { Drawer, Group, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { IDrawerProps } from "../../lib/interfaces/drawerProps";
import { updateLength, updateSpeed } from "../../lib/redux/reducers/array";
import { RootState } from "../../lib/redux/store";
import ConfigSlider from "../Slider";

const ConfigDrawer = (props: IDrawerProps) => {

  const dispatch = useDispatch();
  const { array } = useSelector((state: RootState) => state)

  return(
    <Drawer
      opened={props.openDrawer}
      onClose={() => props.setOpenDrawer(false)}
      size="lg"
      padding="xl"
      position="bottom"
    >
      <Group 
        direction="column"
        spacing={30}
        grow
      >
        <div>
          <Text>
            Array length
          </Text>
          <ConfigSlider
            marks={array.config.length}
            length
          />
        </div>
        <div>
          <Text>
            Sort time in milli seconds
          </Text>
          <ConfigSlider
            marks={array.config.speed}
            speed
          />
        </div>
      </Group>
    </Drawer>
  )
}
export default ConfigDrawer;