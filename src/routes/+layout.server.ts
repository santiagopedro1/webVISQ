import type { LayoutServerLoad } from './$types'

export const load = (async ({ cookies }) => {
	let theme = cookies.get('theme')
	switch (theme) {
		case 'dark':
			cookies.set('theme', theme, {
				maxAge: 60 * 60 * 24 * 365,
				path: '/',
				httpOnly: false,
				sameSite: 'strict'
			})
			break
		case 'light':
			cookies.set('theme', theme, {
				maxAge: 60 * 60 * 24 * 365,
				path: '/',
				httpOnly: false,
				sameSite: 'strict'
			})
			break
		default:
			theme = 'light'
			cookies.set('theme', theme, {
				maxAge: 60 * 60 * 24 * 365,
				path: '/',
				httpOnly: false,
				sameSite: 'strict'
			})
	}
	return {
		theme
	}
}) satisfies LayoutServerLoad
