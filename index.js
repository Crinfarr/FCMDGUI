const { create } = require("domain");
const { app, BrowserWindow } = require("electron");
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 500,
        resizable: false,
        alwaysOnTop: true,
        show: false,
        backgroundColor: '#000000',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    win.loadFile('./res/index.html')
    win.once('ready-to-show', () => {
        win.setMenuBarVisibility(false)
        win.show();
    })
}

app.whenReady().then(() => {
    createWindow();
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})