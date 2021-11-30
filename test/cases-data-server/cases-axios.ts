/**
 * [0]: Original URL
 * [1]: Parsed URL
 * [2]: Parsed HTML output
 * [3]: Parsed HTML output after 6 [Tab] inputs
 * [4]: Parsed HTML output after 8 [Shift+Tab] inputs
 * [5]: Final selected href URL
 */

export default [
  [
    "http://test-webserver/anchor.html",
    "test-webserver/public-html/anchor.html",
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    "http://test-webserver/anchor.html#"
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
