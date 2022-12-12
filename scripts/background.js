chrome.runtime.onInstalled.addListener(() => {
    console.log("background: runtime onInstalled")
  });

chrome.tabs.onCreated.addListener((tab) => {
    console.log("background: tabs onCreated", tab, tab.type)
  });

chrome.downloads.onCreated.addListener((downloadItem) => {
  console.log("background: downloads onCreated ", downloadItem)
  });