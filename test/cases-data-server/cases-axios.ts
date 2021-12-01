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
    "http://test-webserver/anchor.html",
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    "http://test-webserver/anchor.html#"
  ],
  [
    "test-webserver/empty.html",
    "http://test-webserver/empty.html",
    "",
    "",
    "",
    ""
  ],
  [
    "test-webserver/anchors.html",
    "http://test-webserver/anchors.html",
    '{bold}Meowning{/bold}\n\n\n\n{underline}{red-bg}cat[0]("#cat"){/red-bg}{/underline}\n\n{underline}{blue-bg}dog[1]("#dog"){/blue-bg}{/underline}\n\n{underline}{blue-bg}rising[2]("rising"){/blue-bg}{/underline}\n\n{underline}{blue-bg}top[3]("/top"){/blue-bg}{/underline}\n\n\n\n\n\n{underline}{blue-bg}duckduckgo[4]("https://ddg.gg"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn http[5]("http://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn https[6]("https://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n\n\n\n\n{bold}dog{/bold}\n\nlectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Lorem ipsum dolor sit amet, consectetur adipiscing elit.{/bold}\n\nQuisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien.\n\n',
    '{bold}Meowning{/bold}\n\n\n\n{underline}{blue-bg}cat[0]("#cat"){/blue-bg}{/underline}\n\n{underline}{blue-bg}dog[1]("#dog"){/blue-bg}{/underline}\n\n{underline}{blue-bg}rising[2]("rising"){/blue-bg}{/underline}\n\n{underline}{blue-bg}top[3]("/top"){/blue-bg}{/underline}\n\n\n\n\n\n{underline}{blue-bg}duckduckgo[4]("https://ddg.gg"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn http[5]("http://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n{underline}{red-bg}acorn https[6]("https://acorn.utoronto.ca"){/red-bg}{/underline}\n\n\n\n\n\n{bold}dog{/bold}\n\nlectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Lorem ipsum dolor sit amet, consectetur adipiscing elit.{/bold}\n\nQuisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien.\n\n',
    '{bold}Meowning{/bold}\n\n\n\n{underline}{blue-bg}cat[0]("#cat"){/blue-bg}{/underline}\n\n{underline}{blue-bg}dog[1]("#dog"){/blue-bg}{/underline}\n\n{underline}{blue-bg}rising[2]("rising"){/blue-bg}{/underline}\n\n{underline}{blue-bg}top[3]("/top"){/blue-bg}{/underline}\n\n\n\n\n\n{underline}{blue-bg}duckduckgo[4]("https://ddg.gg"){/blue-bg}{/underline}\n\n{underline}{red-bg}acorn http[5]("http://acorn.utoronto.ca"){/red-bg}{/underline}\n\n{underline}{blue-bg}acorn https[6]("https://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n\n\n\n\n{bold}dog{/bold}\n\nlectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Lorem ipsum dolor sit amet, consectetur adipiscing elit.{/bold}\n\nQuisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien.\n\n',
    "http://acorn.utoronto.ca/"
  ]
];
