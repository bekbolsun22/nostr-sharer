import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { ContentTemplatePreview } from '@components/ContentTemplatePreview'
import { FooterTemplatePreview } from '@components/FooterTemplatePreview'
import { HeaderTemplatePreview } from '@components/HeaderTemplatePreview'
import { fetchById } from '@modules/nostr'
import { ITemplate } from '@utils/types'
import {
	convertTemplateToHtml,
	getSearchParams,
	getTemplatesByType,
} from '@utils/helpers'
import { NDKKind, NDKTag, NostrEvent } from '@nostr-dev-kit/ndk'
import { ModalTemplate } from '@components/ModalTemplate'
import { useDisclosure } from '@nextui-org/react'

type IEvent = {
	author: NostrEvent | undefined
	relatedProfiles: NostrEvent[]
	created_at: number
	content: string
	tags: NDKTag[]
	kind?: NDKKind | number
	pubkey: string
	id?: string
	sig?: string
}

export const TemplatePreview = () => {
	const { id } = getSearchParams<{ id: string }>()

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [html, setHtml] = useState('')
	const [templates, setTemplates] = useState<ITemplate[]>([])
	const [event, setEvent] = useState<IEvent | null>(null)
	const [selectedTemplate, setSelectedTemplate] = useState<ITemplate | null>(
		null,
	)

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const renderTemplate = useCallback(
		async (template: string, event: IEvent) => {
			const html = await convertTemplateToHtml(template, event)
			console.log({ event, html }, 'HISH')
			if (html) setHtml(html)
		},
		[],
	)

	const handleTemplateChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		const newTemplate = templates.find((t) => t.id === e.target.value)
		if (newTemplate && event) {
			setSelectedTemplate(newTemplate)
			renderTemplate(newTemplate.template, event)
		}
	}

	useEffect(() => {
		if (!id) return

		const load = async () => {
			const result = await fetchById(id)

			if (!result) return
			const { event, type } = result || {}
			const templates = getTemplatesByType(type)

			setTemplates(templates)
			setEvent(event)
			setSelectedTemplate(templates[0])
			renderTemplate(templates[0].template, event)
		}
		load()
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false))
		// eslint-disable-next-line
	}, [])

	const handlePrevTemplate = () => {
		if (!selectedTemplate || !event) return

		const currentIndex = templates.findIndex(
			(t) => t.id === selectedTemplate.id,
		)
		if (currentIndex <= 0) {
			renderTemplate(templates[templates.length - 1].template, event)
			return setSelectedTemplate(templates[templates.length - 1])
		}
		renderTemplate(templates[currentIndex - 1].template, event)
		return setSelectedTemplate(templates[currentIndex - 1])
	}

	const handleNextTemplate = () => {
		if (!selectedTemplate || !event) return

		const currentIndex = templates.findIndex(
			(t) => t.id === selectedTemplate.id,
		)

		if (currentIndex === templates.length - 1) {
			renderTemplate(templates[0].template, event)
			return setSelectedTemplate(templates[0])
		}
		renderTemplate(templates[currentIndex + 1].template, event)
		return setSelectedTemplate(templates[currentIndex + 1])
	}

	return (
		<>
			<div className='flex flex-col h-full'>
				<HeaderTemplatePreview
					selectedTemplate={selectedTemplate}
					onOpenModal={onOpen}
				/>
				<ContentTemplatePreview
					id={id}
					isError={isError}
					isLoading={isLoading}
					html={html}
				/>
				<FooterTemplatePreview
					onPrevClick={handlePrevTemplate}
					onNextClick={handleNextTemplate}
				/>
			</div>

			{isOpen && (
				<ModalTemplate
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					templates={templates}
					selectedTemplate={selectedTemplate}
					onTemplateChange={handleTemplateChange}
				/>
			)}
		</>
	)
}
