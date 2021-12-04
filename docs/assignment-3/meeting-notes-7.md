Meeting minutes Nov 18 2021

Time: 6:30 PM

Present: Andi, Evan, Myles, Nicki

Meeting Notes:

- Discuss how to handle hyperlinks:
  - Use LayoutElement
    - Easy to create objects that will trigger functions when clicked
    - Difficult to manage a tree-like structure, cannot nest LayoutElement objects with proper formatting displayed, requires complex logic to format
    - Difficulty with scrolling, cannot find reason
  - Use BoxElement
    - Blessed BoxElement provides us with a coordinate (x, y) where 'x' is the line number and 'y' is the character on that line that was clicked. We want to be able to compute what character was clicked so we can check if the character is part of an anchor tag. If an anchor tag is detected, we can map the coordinates to the details of the anchor tag to extract the hyperlink
    - Requires complex logic, cannot consistently work due to text wrapping - text breaks on whitespace, does not break consistently in middle of words
    - Email Greg to discuss altering the feature to keyboard inputs if we cannot find a solution by tomorrow night
