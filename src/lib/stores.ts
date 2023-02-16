import { writable } from 'svelte/store'

function theming() {
	const { subscribe, set } = writable('light')

	return {
		subscribe,
		dark: () => set('dark'),
		light: () => set('light')
	}
}

export const appTheme = theming()
