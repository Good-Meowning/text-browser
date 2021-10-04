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

# Installation Guide

1. Download and install Docker for your operating system using this in-depth guide: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

2. Open a terminal

3. Verify whether Docker is installed correctly by entering the following command into the terminal:

   - `docker run --rm hello-world`
   - If Docker outputs a message that contains "Hello from Docker!" then your installation has been successful

4. Clone this repository and enter the new directory by entering the following command into the terminal:

   - `git clone https://github.com/Good-Meowning/text-browser.git text-browser && cd text-browser`

5. Run the code using Docker by entering the following command into the terminal:

   - `docker build -t text-browser ./ && docker run --rm -it text-browser`

6. Congradulations, you should now see our text browser in action! However, in the case that you run into any problems, please don't hesitate to create an issue [here](https://github.com/Good-Meowning/text-browser/issues)!

# Repository Structure

<!-- credits: https://github.com/xiaoluoboding/repository-tree -->

```
/
├─ docs/
│  └─ PDF documentation files
├─ src/
│  └─ TypeScript source code files
├─ test/
│  ├─ TypeScript unit test files
│  └─ HTML sample files
├─ ...
└─ Various configuration and information files
```
