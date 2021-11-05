<h1 align="center">Text Browser</h1>
<p width="100%" align="center">
  A simple text-mode only browser, like Lynx but cooler 😎
  <br />
  Brought to you by team Good Meowning
  <br />
  <a href="https://github.com/Good-Meowning/">
    <img src="https://raw.githubusercontent.com/PockyCalpis/osu-collabs/main/mushroom/good-meowning.gif" width="50%" alt="Good meowning!" align="center">
  </a>
</p>

# Installation and Testing Guide

1. Download and install Docker for your operating system using this in-depth guide: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

   - Verify whether Docker is installed correctly by entering the following command into a terminal:
   - `docker run --rm hello-world`
   - If Docker outputs a message that contains "Hello from Docker!" then your installation has been successful

2. Download and install Git for your operating system here: [https://git-scm.com/downloads/](https://git-scm.com/downloads/)

   - Verify whether Git is installed correctly by entering the following command into a terminal:
   - `git --version`
   - If Git outputs its version, then your installation has been successful

3. Open a terminal

4. Clone this repository and enter the new directory by entering the following command into the terminal:

   ```bash
   git clone https://github.com/Good-Meowning/text-browser.git text-browser
   cd text-browser
   ```

5. Run the code using Docker by entering the following command into the terminal:

   ```bash
   # ./run.sh <URL>
   # For example:
   ./run.sh google.ca
   ./run.sh http://www.cs.toronto.edu/~arnold/index.html
   ./run.sh file://webserver/public-html/paragraph.html
   ```

6. \[Optional\] Run our tests by entering the following command into the terminal:

   ```bash
   ./test.sh
   ```

7. Congratulations, you have installed and tested our text browser! However, in the case that you run into any problems, please don't hesitate to create an issue [here](https://github.com/Good-Meowning/text-browser/issues)!

# Repository Structure

Credits: [github.com/xiaoluoboding/repository-tree](https://github.com/xiaoluoboding/repository-tree)

```
/
├─ docs/
│  └─ Assignment documentation files
├─ src/
│  └─ TypeScript source code files
├─ test/
│  └─ TypeScript unit test files
├─ webserver/
│  ├─ public-html/
│  │  └─ HTML sample files
│  └─ Scripts and configuration files
├─ ...
└─ Various documentation, scripts, and configuration files
```
