const openQueue = "6tjvhv4500478";
const closedQueue = "4o3neme600smg";
let customerQueueStatus;

/*When the user clicks on the "online" button, the variable customerQueueStatus takes the value of openQueue. 
This will determine the online chat view to open when clicking on the chat icon  */
function onlineChatStatus() {
  customerQueueStatus = openQueue;
  console.log(customerQueueStatus);
  return customerQueueStatus;
}
/*When the user clicks on the "offline" button, the variable customerQueueStatus takes the value of closedQueue. 
This will determine the offline chat view to open when clicking on the chat icon  */
function offlineChatStatus() {
  customerQueueStatus = closedQueue;
  console.log(customerQueueStatus);
  return customerQueueStatus;
}

/*Below I display the chat view according to the value of customerQueueStatus.
In addition, the chat icon changes according to whether the chat window is open or closed*/
function showChatWindow() {
  let welcomeScreen = document.getElementById("onlineView");
  let offlineScreen = document.getElementById("offlineView");
  let chatButton = document.getElementById("chatLogo");

  if (
    welcomeScreen.style.display === "none" &&
    customerQueueStatus === openQueue
  ) {
    welcomeScreen.style.display = "block";
    chatButton.classList.remove("chat-logo");
    chatButton.classList.add("close-logo");
  } else if (welcomeScreen.style.display === "block") {
    welcomeScreen.style.display = "none";
    chatButton.classList.remove("close-logo");
    chatButton.classList.add("chat-logo");
  } else if (
    offlineScreen.style.display === "none" &&
    customerQueueStatus === closedQueue
  ) {
    offlineScreen.style.display = "block";
    chatButton.classList.remove("chat-logo");
    chatButton.classList.add("close-logo");
  } else if (offlineScreen.style.display === "block") {
    offlineScreen.style.display = "none";
    chatButton.classList.remove("close-logo");
    chatButton.classList.add("chat-logo");
  }
}
