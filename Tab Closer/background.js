chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({})],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    chrome.alarms.onAlarm.addListener(function(alarm) {
        if (alarm.name != '') {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                var tabId = parseInt(alarm.name, 10);
                console.log(tabId);
                if (tabId) {
                    chrome.tabs.remove(tabId);
                }
            });
        }
    });      
});