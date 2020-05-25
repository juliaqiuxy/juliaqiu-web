// See: https://github.com/auth0/auth0-tag-manager/blob/master/src/google-tag-manager.js

const dispatch = (data) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};

export const triggerEvent = (eventName) => {
  dispatch({
    event: eventName,
  });
};

const DEFAULT_RETRY = 5;

export const load = ({
  eventName,
  isLoaded = () => false,
  retry = DEFAULT_RETRY,
}) => async () => new Promise((resolve, reject) => {
  let checkCount = 0;

  const check = () => {
    if (checkCount >= retry) {
      reject(new Error(`Failed to load ${eventName}`));
      return;
    }

    checkCount += 1;

    setTimeout(() => {
      if (isLoaded()) {
        resolve();
      } else {
        check();
      }
    }, 250);
  };

  if (isLoaded()) {
    resolve();
  } else {
    triggerEvent(eventName);
    check();
  }
});
