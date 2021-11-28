import blessed from "blessed";

const helpBoxContent = 
    '\n Tab - Cycle forward through links \n Shift + tab - Cycle backwards through links \n h - Open Help menu \n Shift + h - close help menu \n i - open url bar, press enter to submit and escape to exit insert mode \n Shift + i - close url bar'


export const urlBox: blessed.Widgets.BoxOptions = {
    label: 'Enter a URL',
    name: 'input',
    input: true,
    inputOnFocus: true,
    keys: true,
    top: 'center',
    left: 'center',
    height: '20%',
    width: '50%',
    border: {
      type: "line"
    },
    style: {
      fg: "white",
      bg: "black",
      border: {
        fg: "#f0f0f0"
      }
    },
  }

export const helpBox: blessed.Widgets.BoxOptions = {
    label: 'Help Menu',
    content: helpBoxContent,
    top: "center",
    left: "center",
    width: "50%",
    height: "50%",
    tags: true,
    border: {
      type: "line"
    },
    style: {
      fg: "white",
      bg: "black",
      border: {
        fg: "#f0f0f0"
      }
    },
}

export const mainBox: blessed.Widgets.BoxOptions = {
    top: "center",
    left: "center",
    width: "100%",
    height: "100%",
    tags: true,
    border: {
      type: "line"
    },
    style: {
      fg: "white",
      bg: "black",
      border: {
        fg: "#f0f0f0"
      }
    },
    // enable scrolling with mouse
    scrollable: true,
    alwaysScroll: true,
    mouse: true
  }