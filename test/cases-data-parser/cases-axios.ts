/**
 * [0]: Original URL
 * [1]: Parsed URL
 * [2]: Parsed HTML output
 */

export default [
  [
    "http://test-webserver/anchor.html",
    "http://test-webserver/anchor.html",
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}'
  ],
  ["http://test-webserver/empty.html", "http://test-webserver/empty.html", ""],
  [
    "http://test-webserver/header.html",
    "http://test-webserver/header.html",
    "{bold}This is a header{/bold}\n\n"
  ],
  [
    "http://test-webserver/paragraph.html",
    "http://test-webserver/paragraph.html",
    "This is a paragraph\n\n"
  ],
  [
    "test-webserver/anchor.html",
    "http://test-webserver/anchor.html",
    '{underline}{red-bg}This is a link[0]("#"){/red-bg}{/underline}'
  ],
  ["test-webserver/empty.html", "http://test-webserver/empty.html", ""],
  [
    "test-webserver/header.html",
    "http://test-webserver/header.html",
    "{bold}This is a header{/bold}\n\n"
  ],
  [
    "test-webserver/paragraph.html",
    "http://test-webserver/paragraph.html",
    "This is a paragraph\n\n"
  ],
  [
    "test-webserver/longpage.html",
    "http://test-webserver/longpage.html",
    '{bold}geddit.com{/bold}\n\n\n\n{underline}{red-bg}hot[0](""){/red-bg}{/underline}\n\n{underline}{blue-bg}new[1](""){/blue-bg}{/underline}\n\n{underline}{blue-bg}rising[2](""){/blue-bg}{/underline}\n\n{underline}{blue-bg}top[3](""){/blue-bg}{/underline}\n\n\n\n\n\n{underline}{blue-bg}Best food spots on campus[4](""){/blue-bg}{/underline}\n\n{underline}{blue-bg}Campus Map[5](""){/blue-bg}{/underline}\n\n{underline}{blue-bg}ACORN[6]("http://acorn.utoronto.ca"){/blue-bg}{/underline}\n\n\n\n\n\n{bold}I Love CSC309.{/bold}\n\nlectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Is my course schedule ok?{/bold}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Is my course schedule ok?{/bold}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n{bold}Is my course schedule ok?{/bold}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique libero, sit amet tempus ex. In egestas enim felis, vel dapibus dolor malesuada vitae. Praesent convallis massa lectus, at bibendum neque ornare quis. Donec sit amet neque sapien. Sed in\n\n\n\n'
  ]
];
