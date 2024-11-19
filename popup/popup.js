document.getElementById('convert').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.tabs.sendMessage(tab.id, { action: 'convert' }, response => {
    const status = document.getElementById('status');
    if (response && response.success) {
      status.textContent = '转换成功！';
    } else {
      status.textContent = '转换失败，请重试。';
    }
  });
}); 