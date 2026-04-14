// TouchDesigner background feature removed.
// The original code replaced the entire LGraphCanvas.prototype.drawBackCanvas
// with an outdated copy that cached devicePixelRatio as a static value,
// causing connection misalignment when moving between monitors with different DPR.

// Retain the export so app_mixlab.js import doesn't break.
export const td_bg = {
  running: false,
  start() {},
  stop() {},
  toggle() {},
  isRunning() { return false }
}
