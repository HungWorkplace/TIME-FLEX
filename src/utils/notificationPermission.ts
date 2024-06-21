export const checkNotificationPermission = () => {
  if (Notification.permission === "granted") {
    return true;
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        return true;
      } else {
        console.log("User blocked notifications");
        return false;
      }
    });
  } else {
    return false;
  }
};

export const showNotification = (title: string, message: string) => {
  if (checkNotificationPermission()) {
    new Notification(title, { body: message });
  }
};
