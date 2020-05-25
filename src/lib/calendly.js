import * as gtag from './gtag';

export const load = gtag.load({
  eventName: 'dev.julia.calendly.load',
  isLoaded: () => !!window.Calendly,
});

export const initPopupWidget = (options) => {
  if (!window.Calendly) {
    throw new Error('Calendly is not loaded');
  }

  window.Calendly.initPopupWidget(options);
};
