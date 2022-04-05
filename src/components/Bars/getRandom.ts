import { IToolTipConfig } from "./interfaces";

const ToolTipConfig: IToolTipConfig = {
  positions: ["left", "right", "bottom"],
  placements: ["start", "center", "end"],
  colors: ["red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"],
  transitions: ["fade", "scale", "scale-y", "scale-x", "skew-up", "skew-down", "rotate-left", "rotate-right",
    "slide-down", "slide-up", "slide-left", "slide-right", "pop", "pop-bottom-left", "pop-bottom-right", 
    "pop-top-left", "pop-top-right"
  ]
}

const { positions, placements, colors, transitions } = ToolTipConfig

export const getRandomPosition = () => positions[Math.floor(Math.random() * positions.length)];
export const getRandomPlacement = () => placements[Math.floor(Math.random() * placements.length)];
export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
export const getRandomTransitions = () => transitions[Math.floor(Math.random() * transitions.length)]