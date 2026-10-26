// RackSmith website: what's live on the App Store right now.
// After each release, change LIVE to that version (and APP_LIVE to true once
// RackSmith is on the App Store). Everything marked data-v="1.x" newer than
// LIVE shows a "Coming soon" tag; data-only="1.x" items stay hidden until then,
// and data-until="1.x" items (old answers) disappear once 1.x is live.
var LIVE = '1.0';
var APP_LIVE = false;
var APP_URL = 'https://apps.apple.com/app/id6819852093';

(function () {
  function newer(v) {
    var a = v.split('.').map(Number), b = LIVE.split('.').map(Number);
    for (var i = 0; i < 3; i++) {
      if ((a[i] || 0) !== (b[i] || 0)) return (a[i] || 0) > (b[i] || 0);
    }
    return false;
  }
  document.querySelectorAll('[data-v]').forEach(function (el) {
    if (newer(el.getAttribute('data-v'))) el.classList.add('soon');
  });
  document.querySelectorAll('[data-only]').forEach(function (el) {
    if (newer(el.getAttribute('data-only'))) el.hidden = true;
  });
  document.querySelectorAll('[data-until]').forEach(function (el) {
    if (!newer(el.getAttribute('data-until'))) el.hidden = true;
  });
  document.querySelectorAll('.store').forEach(function (el) {
    if (APP_LIVE) {
      el.href = APP_URL;
      el.classList.remove('pending');
      el.querySelector('.store-top').textContent = 'Download on the';
    } else {
      el.removeAttribute('href');
    }
  });
})();
