# Post Mortem

## Adjusted plans and features

Our team encountered one major roadblock that forced us to re-evaluate acceptance criterias. While adding support for clickable links, we encountered several roadblocks stemming from unresolved git issues with Blessed, an external TUI library we're leveraging. Our team spent time solutioning creative work-arounds, the most promising of which involved mapping cursor position to the indices of rendered text. Unfortunately this approach required computation of text positioning prior to rendering content, which introduced inconsistencies due to text wrapping, formatting, and padding. Not wanting to compromise feature quality, our team spent time deliberating over alternative solutions, after which we reached out to our industry partner and renegotiated the acceptance criteria.

Other feature goals remained unadjusted, and the milestone was fully completed. An outline of the tasks our team delivered are outlined below.

## Completed goals

All tasks from milestone 2 were completed, below is a list of tasks which were finished:

1.  Set up a simple dummy HTTP server to serve test pages and create some sample HTML pages.

2.  Fetch HTML data from HTTP server and local files, parse the data into a DOM tree using CheerioAPI

3.  Create library functions to traverse CheerioAPI tree and extract plaintext content from relevant HTML tags

4.  Created unit tests for functions in data parser library

5.  Display extracted text content in Blessed UI

We have also began milestone 3, below is a list of the tasks which were
in-progress:

1.  Add functionality to backend processing class to format hierarchical structure based on their HTML tags

2.  Write tests for the updated backend processing class

3.  Implement page scrolling for pages that are longer than the height of the terminal window

# Final Overview of Features

Note: we will be testing the frontend terminal UI manually, as we have not found any JavaScript libraries to run unit-tests on our terminal user interface. Additionally, in the GitHub repository of our terminal UI library, it states that \"Most tests contained in the test/ directory are interactive. It\'s up to the programmer to determine whether the test is properly displayed.\"

Here is a list of all complete and tested features of our project, including their acceptance criteria and testing criteria:

- Visit web pages through our terminal browser

  - Accept an URL to a website or a path to a local file

    - An URL or file path could be entered via the command line on
      browser startup, or via the browser input box during browser runtime

    - The frontend interactive box is tested manually

    - The backend handler functions are tested in our unit-tests

  - Display the text from the HTML file at the specified URL or file path

    - Text in basic HTML tags will be formatted accordingly (bold and header tags will be bolded, underline tags will be underlined, italicized text will appear in the opposite colour, hyperlinks will appear blue and underlined)

    - The frontend visual display is tested manually

    - The backend parsing functions are tested in our unit-tests

  - Display the current URL visited on the top left of the screen

    - The current URL will be displayed on the top edge of the
      screen

    - If the page is empty, it will indicate that it is a new page
      instead

    - This frontend feature is tested manually

  - Insert mode and input box

    - A permanent input box is shown in the bottom left (like VIM input box), which prompts the user to open the help menu

    - Users can press \<i> to enter insert mode, which focuses the input box allowing users to input text. Users can type in a URL and press enter which submits the request, and loads the website entered. Pressing \<escape> exits input mode

    - Acceptance criteria was to provide an input box which users could enter urls into and submit to load the new webpage

    - Full functionality was delivered and QA testing was manually done by two members, with one member providing a code review

- Interact with web pages through our terminal browser

  - Cycle through and visit embedded hyperlinks

    - Users can press \<tab> or \<shift+tab> to cycle forwards or backwards through the hyperlinks within the page

    - Users can press \<enter> to visit the selected hyperlink

    - Each hyperlink will be displayed with an integer number, so users can input this number into the input box to visit a specific hyperlink

    - The frontend display is tested manually

    - The backend handler functions for visiting hyperlinks are tested in the unit-tests

  - Scroll up/down the screen

    - Whenever the loaded website is too long, scrolling will be enabled, and a white scroll bar will appear on the right edge of the screen

    - Users can use \<down arrow>/\<j> to scroll down and \<up arrow>/\<k> to scroll up by one line at a time

    - Users can use their mouse wheel to scroll up or down one line at a time

    - This frontend feature is tested manually

- Quality-of-life features

  - Help box (stretch goal)

    - Users can press \<h> to open up a scrollable legend menu which depicts the keybinds for all our browser features and \<escape> to close the menu

    - Acceptance criteria was to ensure that the \<h> and \<escape> keybinds are set up, and behave as described above

    - Full functionality was delivered and acceptance criterias were validated through manual QA testing done by two team members. Code was reviewed by one member

  - Multiple browsing tabs (stretch goal)

    - Users can press \<ctrl+t> to open a new tab or \<ctrl+w> to close the current tab

    - Users can press \<tab> or \<shift+tab> to cycle through the tabs

    - The current tab number and amount of tabs will be displayed on the top left corner of the web page

    - This feature is tested manually

  - Keep a list of browsing history (stretch goal)

    - All browsing history will be recorded, users can press \<t> to bring up a list of past browsing history

    - Users can press \<tab> or \<shift+tab> to cycle through the list of URLs

    - Users can press \<enter> to visit the selected URL, or \<escape> to close the list of browsing history

    - This feature is tested manually due to its tight coupling with the frontend
