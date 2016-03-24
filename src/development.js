import React from 'react';
import { createStore } from 'redux';
import { todoApp } from './reducers';
import { createDevTools } from 'redux-devtools';
import { base64, decode64 } from 'safe-base64';

// Monitors are separate packages, and you can make a custom one
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    defaultPosition='bottom'>
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);

const lochash    = location.hash.substr(1);
const hashState = lochash.substr(lochash.indexOf('state=')).split('&')[0].split('=')[1];

if (hashState) { // recover application state from the hash
  const b64state = decode64(hashState);
  window.STATE_FROM_SERVER = JSON.parse(b64state);
}

const store = createStore(
  todoApp,
  window.STATE_FROM_SERVER,
  DevTools.instrument()
);

// in development every change to the store gets serialized into
// window.CURRENT_STATE
store.subscribe(() => {
  const state = store.getState();
  const b64state = base64(JSON.stringify(state));
  const baseUrl = window.location.origin;
  window.CURRENT_STATE = `${baseUrl}/#state=${b64state}`;
});

export { DevTools, store };
