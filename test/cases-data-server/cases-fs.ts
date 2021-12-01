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
    "file://webserver/public-html/anchor.html",
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}',
    ""
  ],
  [
    "file://webserver/public-html/empty.html",
    "file://webserver/public-html/empty.html",
    "",
    "",
    "",
    ""
  ],
  [
    "file://webserver/public-html/anchors.html",
    "file://webserver/public-html/anchors.html",
    '{bold}Meowning{/bold}\n\n\n\n{underline}{red-bg}cat[0]("#cat"){/red-bg}{/underline}\n\n{underline}{blue-bg}dog[1]("#dog"){/blue-bg}{/underline}\n\n{underline}{blue-bg}rising[2]("rising"){/blue-bg}{/underline}\n\n{underline}{blue-bg}top[3]("/top"){/blue-bg}{/underline}\n\n\n\n\n\n{underline}{blue-bg}duckduckgo[4]("https://ddg.gg"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn http[5]("http://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn https[6]("https://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n\n\n\n\n{bold}dog{/bold}\n\nlectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Lorem ipsum dolor sit amet, consectetur adipiscing elit.{/bold}\n\nQuisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien.\n\n',
    '{bold}Meowning{/bold}\n\n\n\n{underline}{blue-bg}cat[0]("#cat"){/blue-bg}{/underline}\n\n{underline}{blue-bg}dog[1]("#dog"){/blue-bg}{/underline}\n\n{underline}{blue-bg}rising[2]("rising"){/blue-bg}{/underline}\n\n{underline}{red-bg}top[3]("/top"){/red-bg}{/underline}\n\n\n\n\n\n{underline}{blue-bg}duckduckgo[4]("https://ddg.gg"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn http[5]("http://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn https[6]("https://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n\n\n\n\n{bold}dog{/bold}\n\nlectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Lorem ipsum dolor sit amet, consectetur adipiscing elit.{/bold}\n\nQuisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien.\n\n',
    '{bold}Meowning{/bold}\n\n\n\n{underline}{blue-bg}cat[0]("#cat"){/blue-bg}{/underline}\n\n{underline}{blue-bg}dog[1]("#dog"){/blue-bg}{/underline}\n\n{underline}{blue-bg}rising[2]("rising"){/blue-bg}{/underline}\n\n{underline}{blue-bg}top[3]("/top"){/blue-bg}{/underline}\n\n\n\n\n\n{underline}{blue-bg}duckduckgo[4]("https://ddg.gg"){/blue-bg}{/underline}\n\n{underline}{blue-bg}acorn http[5]("http://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n{underline}{red-bg}acorn https[6]("https://acorn.utoronto.ca"){/red-bg}{/underline}\n\n\n\n\n\n{bold}dog{/bold}\n\nlectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Lorem ipsum dolor sit amet, consectetur adipiscing elit.{/bold}\n\nQuisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien.\n\n',
    "https://acorn.utoronto.ca/"
  ]
];
