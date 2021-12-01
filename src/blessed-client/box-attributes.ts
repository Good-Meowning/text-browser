import blessed from "blessed";

export const screen: blessed.Widgets.IScreenOptions = {
  smartCSR: true
};

export const inputBox: blessed.Widgets.TextboxOptions = {
  name: "input",
  input: true,
  inputOnFocus: true,
  keys: true,
  bottom: "0",
  left: "left",
  height: "20%",
  width: "100%",
  border: {
    type: "line"
  },
  style: {
    fg: "white",
    bg: "black",
    border: {
      fg: "#f0f0f0"
    }
  }
};

export const helpBox: blessed.Widgets.BoxOptions = {
  label: "Help Menu",
  content:
    "\n[Tab] - Cycle forward through links" +
    "\n[Shift + Tab] - Cycle backwards through links" +
    "\n[Enter] - Visit selected link" +
    "\n" +
    "\n[i] - Enter URL in bar below" +
    "\n\tType to input URL" +
    "\n\t[Enter] - Visit entered URL" +
    "\n\t[Escape] - Exit URL bar" +
    "\n" +
    "\n[h] [?] - Open help menu" +
    "\n\t[Escape] [Shift + h] - Close help menu" +
    "\n" +
    "\n[q] [Ctrl + c] - Close browser",
  top: "center",
  left: "center",
  width: "60%",
  height: "60%",
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
  scrollable: true,
  alwaysScroll: true,
  keys: true,
  vi: true,
  mouse: true
};

export const mainBox: blessed.Widgets.BoxOptions = {
  top: "0",
  left: "center",
  width: "100%",
  height: "80%",
  tags: true,
  border: {
    type: "line"
  },
  style: {
    fg: "white",
    bg: "black",
    border: {
      fg: "#f0f0f0"
    },
  },

  scrollbar: {
    ch: '',
    track: {
      bg: 'blue'
    },
  },
  // Enable scrolling with keys
  keys: true,
  vi: true,
  // Enable scrolling with mouse
  scrollable: true,
  alwaysScroll: true,
  mouse: true
};
