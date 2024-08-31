// main.js

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js')
    .then(function(registration) {
      document.getElementById('status').textContent = 'Service Worker registered successfully!';
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
      document.getElementById('status').textContent = 'Service Worker registration failed!';
      console.log('Service Worker registration failed:', error);
    });
}
