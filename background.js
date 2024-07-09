chrome.commands.onCommand.addListener(function (command) {
  if (command === "open-url-1") {
    chrome.tabs.create({ url: "https://chatgpt.com" });
  } else if (command === "open-url-2") {
    chrome.tabs.create({ url: "https://www.perplexity.ai" });
  } else if (command === "open-url-3") {
    chrome.tabs.create({ url: "https://claude.ai/new" });
  }
});
