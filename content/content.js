chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'convert') {
    try {
      // TODO: 实现对话转换逻辑
      sendResponse({ success: true });
    } catch (error) {
      console.error('转换失败:', error);
      sendResponse({ success: false });
    }
  }
}); 