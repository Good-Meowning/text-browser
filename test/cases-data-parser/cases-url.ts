export default [
  ["Common file path to root", "file:///", "file:///", "/"],
  [
    "Strange file path including special characters",
    "file://a:-aa:a/../;;/**/;/./a",
    "file://a:-aa:a/../;;/**/;/./a",
    "a:-aa:a/../;;/**/;/./a"
  ],
  [
    "HTTP URL",
    "http://instagram.com/mushroom.catto/",
    "http://instagram.com/mushroom.catto/",
    undefined
  ],
  [
    "HTTPS URL including ID",
    "https://github.com/catch-the-fish/minesweeper-server#-introduction-",
    "https://github.com/catch-the-fish/minesweeper-server#-introduction-",
    undefined
  ],
  ["URL without HTTP/HTTPS prefix", "ddg.gg///", "http://ddg.gg///", undefined]
];
