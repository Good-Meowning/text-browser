Meeting minutes Oct 14 2021

Time: 7:00pm

Present: Andi, Evan, Myles, Nicki

Agenda - A2 Writeup:

- A1 post mortem
  - Reflect on what we completed
- Discuss list of features
  - Feature acceptance criterias
  - Subtask breakdown for each feature
  - Feature and subtask dependencies
  - Deadlines for each feature and subtask
- When should we contact Greg for a progress report?

Meeting Notes:

- Discussed and wrote the A1 post mortem
- Went over the tasks that we have planned out in A1 in detail, specifically about milestone 2
- Discussed how we’ll handle different responses (200s, 400s, 500s) from http server.
- We will throw a standard exception to simplify parsing code and give more freedom to the frontend data rendering
- Should the backend class be responsible for formatting an error object, or would throwing a standard exception give more freedom to whoever’s implementing the rendering of data
- Assigned Andi to work on both Fetch HTML data from URL and from local file path instead of having Andi and Myles both working on this. The reason for this is because we believe those 2 tasks are fairly similar and they also have the same code logic. Hence, it will be faster to have one person working on it.
- Decided to work on milestone 2 sequentially since the project is still in the early stage. So as the development goes on, we can identify issues, have changes in design that can potentially affect other components.
- Spent time reshaping expectations for milestone 3 tasks. Decided to discuss about milestone 3 after some progress in milestone 2
- Decided to contact our industry partner near the end of milestone 2 to verify progress
