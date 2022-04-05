import { Group, Navbar, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/redux/store";
import ConfigSlider from "../Slider";

const SideBar = () => {


  const dispatch = useDispatch();
  const { array } = useSelector((state: RootState) => state)

  return(
    <Navbar
      p="md"
      width={{ md: 400}}
      hiddenBreakpoint="md"
      hidden
    >
      <Navbar.Section>
        <Group
          direction="column"
          grow
          spacing={50}
        >
          <div>
            <Text size="xl">
              Array length
            </Text>
            <ConfigSlider
              marks={array.config.length}
              length
            />
          </div>
          <div>
            <Text size="xl">
              Sort time in milli seconds
            </Text>
            <ConfigSlider
              marks={array.config.speed}
              speed
            />
          </div>
        </Group>
      </Navbar.Section>
    </Navbar>
      
  )
}
export default SideBar;