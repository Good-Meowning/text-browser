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
      fg: "white"
    }
  }
};

export const helpBox: blessed.Widgets.BoxOptions = {
  label: "Help Menu",
  content:
    "\n[Downarrow] [j] [Mousewheel Down] - Scroll page downwards" +
    "\n[Uparrow] [k] [Mousewheel Up] - Scroll page upwards" +
    "\n" +
    "\n[Tab] - Cycle forward through links" +
    "\n[Shift + Tab] - Cycle backwards through links" +
    "\n[Enter] - Visit selected link" +
    "\n" +
    "\n[Rightarrow] [n] - Cycle forward through tabs" +
    "\n[Leftarrow] [Shift + n] - Cycle backwards through tabs" +
    "\n[Ctrl+t] [Ctrl+n] - Open new tab" +
    "\n[Ctrl+w] [x] - Close current tab" +
    "\n" +
    "\n[i] - Enter URL or index in bar below" +
    "\n\tType to input URL (e.g. 10, [10], google.ca, file:///)" +
    "\n\t[Enter] - Visit entered URL" +
    "\n\t[Escape] - Exit URL bar" +
    "\n" +
    "\n[Ctrl + h] [t] - Open browser history" +
    "\n\t[Tab] - Cycle forward through history" +
    "\n\t[Shift + Tab] - Cycle backwards through history" +
    "\n\t[Enter] - Visit selected URL" +
    "\n\t[Escape] - Exit browser history" +
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
      fg: "white"
    }
  },
  scrollbar: {
    style: {
      bg: "white"
    },
    track: {
      bg: "black"
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
      fg: "white"
    }
  },
  scrollbar: {
    style: {
      bg: "white"
    },
    track: {
      fg: "black"
    }
  },
  // Enable scrolling with keys
  keys: true,
  vi: true,
  // Enable scrolling with mouse
  scrollable: true,
  alwaysScroll: true,
  mouse: true
};
