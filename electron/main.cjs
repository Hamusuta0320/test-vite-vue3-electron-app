// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, globalShortcut, ipcMain } = require('electron')
const path = require('path')
const os = require('os')

//这里的配置手动写的，也可以使用cross-env插件配置
const mode = process.env.NODE_ENV

/*隐藏electron创听的菜单栏*/
Menu.setApplicationMenu(null)

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true /*是否展示顶部导航  去掉关闭按钮  最大化最小化按钮*/ ,
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs'),
        },
    })
    const handleSetTitle = (event, title) => {
        console.log('title:', title);
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        console.log('set');
        win.setTitle(String(title))
        win.webContents.send('change-title-ok', "from main")
    }
    ipcMain.on('set-title', handleSetTitle)
    ipcMain.handle('get_os_name', ()=> {
        const os_name = os.platform()
        console.log(os_name);
        return os_name
    })

    // and load the index.html of the app.
    // mainWindow.loadFile('index.html')  修改成如下
    const file_path = `file://${path.join(__dirname, '../dist/index.html')}`
    console.log(file_path);
    mainWindow.loadURL(mode === 'development' ? 'http://localhost:5173' : file_path)

    // Open the DevTools.
    // if (mode === 'development') {
    //     mainWindow.webContents.openDevTools()
    // }
    // mainWindow.webContents.openDevTools()
    return mainWindow
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    const mainWindow = createWindow()
    globalShortcut.register('CommandOrControl+X', function() {
        mainWindow.webContents.openDevTools()
    })
    app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

