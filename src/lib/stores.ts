import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const appTheme: Writable<'light' | 'dark'> = writable('light')

const selectedTool: Writable<string> = writable('select')

const isSimulating: Writable<boolean> = writable(false)

export { appTheme, selectedTool, isSimulating }
