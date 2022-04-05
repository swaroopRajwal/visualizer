import { Burger, Group, Header } from "@mantine/core";
import { SetState } from "immer/dist/internal";
import React from "react";
import { IDrawerProps } from "../../lib/interfaces/drawerProps";
import StartButton from "../StartButton";
import useStyles from "./styles";


const NavBar = (props: IDrawerProps) => {

  const { classes } = useStyles();
  return(
    <Header 
      height={60} 
      className={classes.nav} 
      p="xs"
    >
      <StartButton/> 
      <Burger
        opened={props.openDrawer}
        onClick={() => props.setOpenDrawer(!props.openDrawer)}
      />
    </Header>
  )
}
export default NavBar;