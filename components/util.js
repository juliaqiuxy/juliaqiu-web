// https://gist.github.com/beaucharman/e46b8e4d03ef30480d7f4db5a78498ca
export const throttle = (callback, wait, context = this) => {
  let timeout = null;
  let callbackArgs = null;

  const later = () => {
    callback.apply(context, callbackArgs);
    timeout = null;
  };

  return () => {
    if (!timeout) {
      callbackArgs = arguments;
      timeout = setTimeout(later, wait);
    }
  };
};

// The maximum is exclusive and the minimum is inclusive
export const getRandomInt = () => {
  let prevVal = null;

  return (min, max) => {
    let newVal;
    do {
      newVal = Math.floor(Math.random() * (max - min)) + min;
    } while (prevVal === newVal);
    prevVal = newVal;
    return newVal;
  };
};
