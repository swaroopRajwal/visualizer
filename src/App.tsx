import { AppShell, Drawer, Group, Space } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bars from "./components/Bars";
import ConfigDrawer from "./components/Drawer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import useGenerateNewArray from "./lib/hooks/generateNewArray";
import { IArray } from "./lib/interfaces/array";
import { newArray } from "./lib/redux/reducers/array";
import { RootState } from "./lib/redux/store";

const App = () => {
  const dispatch = useDispatch();
  const { array } = useSelector((state: RootState) => state)

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    let arr = useGenerateNewArray(array.length)
    dispatch(newArray(arr));
  }, [array.length])

  return(
    <AppShell
      header={<NavBar
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />}
      navbar={<SideBar/>}
      padding="xs"
    >
      <ConfigDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <Bars/>
    </AppShell>
  )
}
export default App;