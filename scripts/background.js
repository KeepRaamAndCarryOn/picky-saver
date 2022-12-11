chrome.runtime.onInstalled.addListener(() => {
    console.log("background: runtime onInstalled")
  });

  chrome.tabs.onCreated.addListener(() => {
    console.log("background: tabs onCreated")
  });