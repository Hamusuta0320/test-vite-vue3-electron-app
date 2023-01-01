const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('versions', {
    setTitle: (title)=>ipcRenderer.send('set-title', title),
    handle_main_event: (callback) => ipcRenderer.on('change-title-ok', callback),
    get_os_name: () => ipcRenderer.invoke('get_os_name')
})
