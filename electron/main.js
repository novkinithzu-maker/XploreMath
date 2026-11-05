const { app, BrowserWindow } = require('electron');
const path = require('path');
app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1100, height: 760, minWidth: 360, minHeight: 480,
    backgroundColor: '#0b0f1a', autoHideMenuBar: true,
    webPreferences: { autoplayPolicy: 'no-user-gesture-required' }
  });
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
});
app.on('window-all-closed', () => app.quit());
