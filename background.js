chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("randomBrowserAlarm", { delayInMinutes: 1, periodInMinutes: 60 });
});

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === "randomBrowserAlarm") {
        // TODO: Pull url from settings
        beginRandomBrowser("https://www.slashdot.org");
    }
});


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "NEWTAB") {
            beginRandomBrowser(request.data);
        }
    }
);

function beginRandomBrowser (url) {
    chrome.tabs.create({ url: url }, tab => {
        navigateToRandomUrl(tab.id, randomMinMax(10, 50));
    });
}

function navigateToRandomUrl(tabId, numTimes) {
    if (numTimes < 1) {
        chrome.tabs.remove(tabId);
        return;
    } else {
        numTimes -= 1;
    }

    chrome.tabs.query({}, tabs => {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].id === tabId) {
                chrome.tabs.executeScript(tabId, { file: 'contentScript.js' });
                setTimeout(() => navigateToRandomUrl(tabId, numTimes), randomMinMax(10000, 120000));

                return;
            }
        }
    });
}

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max-1) + min);
}