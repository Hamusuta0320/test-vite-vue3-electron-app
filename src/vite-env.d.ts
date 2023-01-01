/// <reference types="vite/client" />

type VoidReturnFn = (string) => void

interface RendererAPI {
    setTitle: VoidReturnFn
    handle_main_event(fn: (e: any, msg: string)=> void): void
    get_os_name(): string
}

declare interface Window {
    readonly versions: RendererAPI
}
