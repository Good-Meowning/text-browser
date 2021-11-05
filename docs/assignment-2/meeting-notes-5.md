Meeting minutes Oct 31 2021

Time: 8:30 PM

Present: Andi, Evan, Myles, Nicki

Agenda:

- Update milestone 3 features details
- Discuss milestone 4 features in-depth

Meeting Notes:

- Discuss problems of implementing forms
  - Frontend gets significantly more complicated as a result of using forms because currently the frontend is essentially a big text-box.
  - We will be unable to react to form results
    - For forms that are used to request data: JavaScript handling is required to process and display the response data, so the response cannot be displayed
    - For forms that are used for authentication: Cookies or LocalStorage are required to store authentication tokens, so users cannot be authenticated
    - Massive scope when taking into account the different types of HTML forms, focusing on single type of HTML form standard might result in limited user functionality
    - Requires that the forms users interact with are from legacy websites. More specifically, we require that the original website uses HTML forms, and also processes the form’s http request at the URL listed in the form’s <action> field
  - Limited supported websites due to most "interactive forms" using JavaScript to send requests
  - Difficult to perform unit-tests due to a need to create a new web server
  - Problems with displaying the form properly due to the lack of CSS
- Draft an email for discussion with Greg regarding our stretch goals
- Complete writeup paragraphs regarding progress towards milestones and success criteria from industry partner
