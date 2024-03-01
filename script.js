const notifications = document.querySelectorAll(".notification-block");
const btn = document.getElementById("btn");
const notificationsCounter = document.querySelector(".number-of-notifications h2 span");
const message = document.querySelector(".message");

notifications.forEach((notification) => {
    notification.addEventListener('click', () => {
        notification.classList.remove("unread");
        notificationsCounter.innerHTML = document.querySelectorAll(".unread").length;
    })
})

btn.addEventListener('click', () => {
    notifications.forEach((element) => {
        element.classList.remove("unread");
    })
    document.querySelector(".message").classList.add("read");
    notificationsCounter.innerHTML = document.querySelectorAll(".unread").length;
})

message.addEventListener('click', () => {
    message.classList.add("read");
})