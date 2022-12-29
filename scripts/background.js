chrome.runtime.onInstalled.addListener(() => {
    console.log("background: runtime onInstalled")
  });

chrome.tabs.onCreated.addListener((tab) => {
    console.log("background: tabs onCreated", tab, tab.type)
  });

chrome.downloads.onCreated.addListener((downloadItem) => {
  console.log("background: downloads onCreated ", downloadItem)
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": jiraContextMenuId,
    "title": "Save JIRA Attachment",
    "contexts": ["link"],
    "documentUrlPatterns": [jiraFilter],
    "targetUrlPatterns": [jiraAttachmentLinkFilter]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log(info);
    //console.log(tab);
    if (info.menuItemId == jiraContextMenuId) {
      let pageUrl = info.pageUrl;
      console.log(pageUrl);
      regRes = pageUrl.match(reJiraTicketFromUrl);
      if (regRes) {
        let ticketNum = regRes[0]
        console.log(ticketNum)
        let filename = info.linkUrl.match(reFileFromPath)[0];
        console.log(filename)
        newFilename = ticketNum + "_" + filename;
        console.log(newFilename)
        chrome.downloads.download({
          "url": info.linkUrl,
          "filename": newFilename
        });
      }
    }
});

const jiraContextMenuId = "jiraAttachment"
const jiraFilter = "*://jira.configura.com/*"
const jiraAttachmentLinkFilter = "*://jira.configura.com/secure/attachment/*"

const reJiraTicketFromUrl = /((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)/
const reFileFromPath = /[^\/]+$/