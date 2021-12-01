export default [
  ["Empty href URL", "http://webserver", "", ""],
  [
    "Filepath URL",
    "https://ddg.gg",
    "file://a:-aa:a/../;;;/./a",
    "file://a:-aa:a/../;;;/./a"
  ],
  ["HTTP URL", "file:///", "http://cat", "http://cat/"],
  ["HTTPS URL", "file:////", "https://dog", "https://dog/"],
  ["Filepath should not have its URL modified", "file://meow", "/meow", ""],
  [
    "Visit new root URL with many starting slashes",
    "https://www.instagram.com/explore/tags/cats/",
    "/////google.ca/",
    "https://google.ca/"
  ],
  [
    "Visit new ID when there is already an ID in URL",
    "https://github.com/catch-the-fish/minesweeper-server#-introduction-",
    "#-contributing-",
    "https://github.com/catch-the-fish/minesweeper-server#-contributing-"
  ],
  [
    "Visit new ID when there are URL parameters",
    "duckduckgo.com/?q=funny+cats&t=h_&ia=web",
    "#cats",
    "http://duckduckgo.com/?q=funny+cats&t=h_&ia=web#cats"
  ],
  [
    "Visit new path when there are URL parameters",
    "cat.ca/?q=funny+cats&ia=web",
    "dog",
    "http://cat.ca/dog"
  ],
  [
    "Visit new path when URL ends with slash",
    "https://cat.ca/dog/",
    "cat",
    "https://cat.ca/dog/cat"
  ]
];
