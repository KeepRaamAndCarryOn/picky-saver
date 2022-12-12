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
  console.log("background downloads onDeterminingFilename ", downloadItem.filename, downloadItem)
  sugg = {
    filename: "sub/top.pdf" //note automatically creates "sub" folder
  };
  suggest(sugg);
});