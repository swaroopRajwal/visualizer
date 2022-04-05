import { MantineTransition } from "@mantine/core";

export interface IToolTipConfig {
  positions: ["left", "right", "bottom"],
  placements: ["start", "center", "end"],
  colors: ["red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"],
  transitions: ["fade", "scale", "scale-y", "scale-x", "skew-up", "skew-down", "rotate-left", "rotate-right",
    "slide-down", "slide-up", "slide-left", "slide-right", "pop", "pop-bottom-left", "pop-bottom-right", 
    "pop-top-left", "pop-top-right"
  ]
}