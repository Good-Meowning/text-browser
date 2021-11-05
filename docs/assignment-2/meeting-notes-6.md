Meeting minutes Nov 04 2021

Time: 6:30 PM

Present: Andi, Evan, Myles, Nicki

Agenda - Implementation Details:

- Event handlers
- Structure of unparsed data output
- Structure of parsed data output

Meeting Notes:

- Discuss implementation details for Blessed terminal frontend
  - Tested out different apis that can be used for scrolling and clickable link event
  - We found that there are many limitations with the blessed library. Scrolling apis printed unknown symbols.In the case of nested boxes, we can only scroll on the rear end of the outest box
  - As the result, we will need to discuss/implement on milestone 3 task (a) and task (b) together
  - Decided to use one layout element with nested box elements
- Worked on finishing up assignment 2
