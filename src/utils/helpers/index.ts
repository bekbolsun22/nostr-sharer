/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line
// @ts-ignore
import BrowserHbs from 'browser-hbs'
import {
	LONG_POST_TEMPLATES,
	PROFILE_TEMPLATES,
	SHORT_POST_TEMPLATES,
} from '@utils/consts/templates'

export function getSearchParams<T extends Record<string, any>>(): T {
	const searchParams = new URLSearchParams(window.location.search)

	const params: Partial<T> = {}

	searchParams.forEach(
		(value, key) => (params[key as keyof T] = value as any),
	)
	return params as T
}

export const getTemplatesByType = (
	type: 'nprofile' | 'nevent' | 'naddr' | 'npub' | 'note',
) => {
	switch (type) {
		case 'nprofile':
			return PROFILE_TEMPLATES
		case 'naddr':
			return SHORT_POST_TEMPLATES
		case 'note':
			return LONG_POST_TEMPLATES

		default:
			return []
	}
}

const hbs = new BrowserHbs()

export const convertTemplateToHtml = async (template: string, event: any) => {
	hbs.handlebars.logger.level = 0

	console.log({ hbs })

	// the only thing we return is one template we have
	hbs.fetcher = (
		_: string,
		_1: string,
		cb: (e: unknown | null, data?: string) => void,
	) => {
		return cb(null, template)
	}

	// start hbs
	hbs.init({
		partialsDir: {
			// a single partial with arbitrary name
			'/': ['template'],
		},
		cache: true,
	})

	// pre-cache partial templates
	console.log('caching hbs partials')
	await new Promise((ok) => hbs.cachePartials(ok))

	// get the partial we've just cached and compiled
	const partial = hbs.handlebars.partials['template']
	console.log('partial', partial)
	if (partial === undefined) throw new Error('No template')

	hbs.registerHelper('displayName', function (profile: any) {
		return profile.display_name || profile.name
	})

	hbs.registerHelper('formatDate', function (timestamp: number) {
		const date = new Date(timestamp * 1000)
		return date.toLocaleDateString()
	})

	// If the partial view is not compiled, it compiles and saves in handlebars
	if (typeof partial === 'string') hbs.registerPartial(partial)
	const html = partial(event, {})
	return html
}
