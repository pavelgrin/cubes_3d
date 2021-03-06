export const CUBE_WIDTH = 100
export const MAGIC_CUBE_WIDTH = 300
export const AVERAGE_FPS_COUNT = 10
export const KEYBOARD_SENSITIVITY = 1
export const MOUSE_SENSITIVITY = 0.1

export const Style = Object.freeze({
    Root: "root",
    SpawnPoint: "spawnPoint",
    MagicCube: "magicCube",
    Cubelet: "cubelet",
    Underlay: "cubeFaceUnderlay",
    CubeFace: "cubeFace",
    Meta: "meta",
    ControlHint: "controlHint",
    HintMouse: "hintMouse",
    HintPlus: "hintPlus",
    HintItem: "hintItem",
    Coordinates: "coordinates",
    Fps: "fps",
})

export const FaceColor = Object.freeze({
    Green: "#009b48",
    White: "#fff",
    Red: "#b71234",
    Yellow: "#ffd500",
    Blue: "#0046ad",
    Orange: "#ff5800",
})

export const CubeFace = Object.freeze({
    Front: "front",
    Top: "top",
    Bottom: "bottom",
    Left: "left",
    Right: "right",
    Back: "back",
})

export const ColorMapping = Object.freeze({
    [CubeFace.Front]: FaceColor.Green,
    [CubeFace.Top]: FaceColor.White,
    [CubeFace.Bottom]: FaceColor.Red,
    [CubeFace.Left]: FaceColor.Yellow,
    [CubeFace.Right]: FaceColor.Blue,
    [CubeFace.Back]: FaceColor.Orange,
})

export const ControlKeys = Object.freeze({
    W: "KeyW",
    A: "KeyA",
    S: "KeyS",
    D: "KeyD",
    LeftMouse: 0,
    RightMouse: 2,
})
