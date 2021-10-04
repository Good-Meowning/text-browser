Meeting minutes Oct 2 2021

Time: 2:00pm

Present: Andi, Evan, Myles, Nicki

- Talked about Greg's response to our email. He explained that it was allowed to use a handful of libraries to prototype our design. Such libraries included: A TUI (Terminal-kit, blessed, ncurses), a http client (fetch, axios), a http parser (cheerio), and testing libraries (mocha, jest). However, he stated at the end of the email that after the prototype is complete that some libraries may be replaced.

- Discussed whether we need to support button clicking and cursor movement in our text-browser.

- Discussed pros and cons of terminal kit and blessed. Terminal kit is being actively maintained which should result in better developer support if we encounter obscure issues. However terminal-kit has incomplete documentation, whereas Blessed as a much more popular library has more complete documentation. Unfortunately blessed isn't actively maintained anymore.

- Discussed feasibility of wrapper class around displaying widgets, provides a lot of overhead and more of a nice to have

- Event driven clickable links, use buttons for links, set callback function to load new page when clicked

- We want to have an object that when instantiated setups a basic UI for user, class will have event handlers for button clicks, and methods that make callouts to our backend API

- Discussed about the framework/architecture we are going to use. Decided to go with event-driven architecture

- Discussing branching strategies, the team agrees that we always put up a pull request when merging new features. Branching structure will be master -> milestone branch -> feature branches

Questions:

- How should we handle clickable links? Should the user travel to the link with keyboard inputs, or should the link be clickable with mouse events?
