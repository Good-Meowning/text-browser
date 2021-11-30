/**
 * [0]: Original URL
 * [1]: Parsed URL
 * [2]: Parsed HTML output
 * [3]: Parsed HTML output after 3 [Tab] inputs
 * [4]: Parsed HTML output after 4 [Shift+Tab] inputs
 * [5]: Final selected href URL
 */

export default [
  [
    "file://webserver/public-html/anchor.html",
    "webserver/public-html/anchor.html",
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    ""
  ],
  [
    "file://webserver/public-html/empty.html",
    "webserver/public-html/empty.html",
    "",
    "",
    "",
    ""
  ]
];
