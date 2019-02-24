const randomBrowserForm = document.querySelector('#random-browser');

randomBrowserForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loc = document.querySelector("#location").value;

    chrome.runtime.sendMessage({ action: "NEWTAB", data: loc });
});