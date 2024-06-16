export const showNotification = (message: string) => {
  if (Notification.permission === "granted") {
    new Notification(message);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(message);
      } else {
        console.log("User blocked notifications");
      }
    });
  }
};
