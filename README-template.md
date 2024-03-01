# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](Desktop_Version.png)
![](Mobile_Version.png)

### Links

- Solution URL: (https://github.com/Alinist/Notification_Page)
- Live Site URL: (https://your-live-site-url.com)

## My process

### Built with

- Media Queries
- Flexbox
- Mobile-first workflow


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="notification-block unread">
      <img src="assets/images/avatar-mark-webber.webp" alt="">
      <div class="text">
        <p><span>Mark Webber</span>reacted to your recent post <span>My first tournament today!</span></p>
        <p>1m ago</p>
      </div>
    </div>
```
```css
.notification-block .text p span:not(.club):not(:nth-child(1)) {
    color: hsl(219, 12%, 42%);
    font-weight: 800;
    padding-left: 5px;
}
```
```js
btn.addEventListener('click', () => {
    notifications.forEach((element) => {
        element.classList.remove("unread");
    })
    document.querySelector(".message").classList.add("read");
    notificationsCounter.innerHTML = document.querySelectorAll(".unread").length;
})
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


## Author

- Frontend Mentor - [Alinist](https://www.frontendmentor.io/profile/Alinist)
