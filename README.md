<div align="center">

<img src="https://github.com/WSU-4110/Levin/blob/6a30cf53cef6ce31c5f5b5ca3c626b1d586e42d8/public/Logo.png" width="60%">

**A simple user interface allowing users to create dynamic sitemaps.**

![GitHub repo size](https://img.shields.io/github/repo-size/WSU-4110/Levin?style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/WSU-4110/Levin/Unit%20Tests%20CI?style=for-the-badge)

</div>

# Libraries

### [React](https://reactjs.org/)

    npm install --save react-scripts
    npm install --save react-router-dom

### [Konva](https://konvajs.org/docs/index.html)

    npm install --save react-konva konva

### Find the rest here: [Libraries Wiki](https://github.com/WSU-4110/Levin/wiki/Libraries)

# Example

<div align="center">

<img src="https://github.com/WSU-4110/Levin/blob/728cd987094bfcf6979dfaead5d2cc40f4a58081/public/Levin%20Example%20Demo.gif" width="50%">

**Tutorials can be found on Levin.com**

</div>

# How Levin works?

We use Konva, an HTML5 2D canvas js library. The images below explain how we project shapes, groups, and layers onto the canvas stage.

<div align="center">

<img src="https://github.com/WSU-4110/Levin/blob/be2db17102654712a4b75736a92025017399bfc6/public/Container%20Group.png" width="50%">

**containerGroup.js references all shapes within a group** (all styling was removed to shrink the image size)

---

<img src="https://github.com/WSU-4110/Levin/blob/ff49b88b9f8f69d3a155c74414e318ecd792b584/public/Container%20Render.png" width="50%">

**canvasStage.js references all groups within a layer**

---

<img src="https://github.com/WSU-4110/Levin/blob/13cb99a03be2998138751349f873193822121e23/public/Stage%20Render.png" width="50%">

**canvasStage.js also references all layers within stage** (all styling was removed to shrink the image size)

---

<img src="https://github.com/WSU-4110/Levin/blob/52dfbff064b2c0ad9cacb5b9feb723055853b035/public/Konva%20Visual%20Demo.png" width="50%">

**A visual representation of how the multiple layers are projected onto the stage**

</div>

# Our goal

Levin is a website that allows any user to create dynamic sitemaps. The site is bare bones, intending to keep the focus on building a sitemap. The goal is to help users document their ideas in a way that is easy to interpret without extensive knowledge of web development.

Usually, sitemap websites are challenging to use because their canvas has too much to offer. Levin simplifies this by offering one button on the canvas page, which generates however many containers a user needs. Our canvas page can be moved (by holding the left mouse button and dragging), allowing users to make sitemaps that are big as their ideas. Our containers can be manipulated and linked to the users' liking. Modifications include changing the container's color (clicking on the container's footer generates a random color) and adding text (double-click the text area and click enter when done). If a user wants to remove a container, they can right-click it to delete it. Once a user is happy with their sitemap, they can right-click the canvas and save it as an image to share (if the text does not show up within the image, make sure to click enter on the specific container for the canvas to render it).

Levin offers other functionalities related to accounts (sign up, log in, and forgot password) and tutorials. All these can be accessed by clicking on their respective icons on the sidebar. When clicked on, a pop-up (aka modal) gives users access to these other functionalities. This is done so that Levin's necessary information can be accessed from the canvas page.

As stated before, Levin is simple in design to offer a blank canvas feeling to users. I hope you enjoy using the website as much as we did making it.

### Learn more about Levin here: [Levin Wiki](https://github.com/WSU-4110/Levin/wiki)
