let cancelCloseTab = document.getElementById('cancelCloseTab');
let closeTab10Min = document.getElementById('closeTab10Min');
let closeTab15Min = document.getElementById('closeTab15Min');
let closeTab30Min = document.getElementById('closeTab30Min');
let closeTab45Min = document.getElementById('closeTab45Min');
let closeTab1Hr = document.getElementById('closeTab1Hr');
let closeTab1Hr30Min = document.getElementById('closeTab1Hr30Min');
let tabId = '';

cancelCloseTab.onclick = function() {
    cancelCloseTab.style.backgroundColor = "#00FF00";
    chrome.alarms.clearAll();
};

closeTab10Min.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabId = tabs[0].id.toString();
        closeTab10Min.style.backgroundColor = "#00FF00";
        chrome.alarms.create(tabId, {delayInMinutes: 10.0});
    });
};

closeTab15Min.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabId = tabs[0].id.toString();
        closeTab15Min.style.backgroundColor = "#00FF00";
        chrome.alarms.create(tabId, {delayInMinutes: 15.0});
    });
};

closeTab30Min.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabId = tabs[0].id.toString();
        closeTab30Min.style.backgroundColor = "#00FF00";
        chrome.alarms.create(tabId, {delayInMinutes: 30.0});
    });
};

closeTab45Min.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabId = tabs[0].id.toString();
        closeTab45Min.style.backgroundColor = "#00FF00";
        chrome.alarms.create(tabId, {delayInMinutes: 45.0});
    });
};

closeTab1Hr.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabId = tabs[0].id.toString();
        closeTab1Hr.style.backgroundColor = "#00FF00";
        chrome.alarms.create(tabId, {delayInMinutes: 60.0});
    });
};

closeTab1Hr30Min.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        tabId = tabs[0].id.toString();
        closeTab1Hr30Min.style.backgroundColor = "#00FF00";
        chrome.alarms.create(tabId, {delayInMinutes: 90.0});
    });
};