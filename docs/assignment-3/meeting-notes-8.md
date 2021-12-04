Meeting minutes Nov 24 2021

Time: 6:30 PM

Present: Andi, Evan, Myles, Nicki

Meeting Notes:

- Discussed and wrote A2 post mortem
  - A2 was mostly successful. Need some implementation change for hyperlink in (refer to meeting note 7)
  - Recognized that we underestimated feature complexity for one of the tasks in milestone 3. As a group we re-adjusted deliverable timelines to accommodate for unexpected delays
- Need to slow down scroll speed, scrolling is difficult to control
  - Relevant github issue https://github.com/mixmaxhq/custody/issues/37#issuecomment-390855414
  - After tracing the library code, it seems that the scrolling properties are abstracted and cannot be modified by the public. By default each mouse scroll will go up/down half the height which results in a big skip
  - Consider overwrite the library code
- Need to handle different types of hyperlinks (e.g. href="#id", href="/root", href="file:///", etc)
  - maybe the URL library could be helpful https://developer.mozilla.org/en-US/docs/Web/API/URL

Questions:

- During A2, we discussed/negotiated stretch goals with our business partner - goals that we might or might not reach. Should we include that in the post mortem as part of "goals or features that were adjusted"?
- We cannot test many front-end features through automatic tests (e.g. press a button to display a help menu). What should we do? Where should we document this?
