chrome.runtime.onInstalled.addListener(() => {
    console.log("background: runtime onInstalled")
  });

chrome.tabs.onCreated.addListener((tab) => {
    console.log("background: tabs onCreated", tab, tab.type)
  });

chrome.downloads.onCreated.addListener((downloadItem) => {
  console.log("background: downloads onCreated ", downloadItem)
});

chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  console.log("background downloads onDeterminingFilename ", downloadItem.url, downloadItem)
  sugg = {
    filename: "sub/top.pdf" //note automatically creates "sub" folder
  };
  suggest(sugg);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "jiraAttachment",
    "title": "Save JIRA Attachment",
    "contexts": ["link"],
    "documentUrlPatterns": [jiraFilter],
    "targetUrlPatterns": [jiraAttachmentLinkFilter]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log(info);
    console.log(tab);
});

const jiraFilter = "*://jira.configura.com/*"
const jiraAttachmentLinkFilter = "*://jira.configura.com/secure/attachment/*"
