import { FC, useEffect } from 'react'
import { Spinner } from '@nextui-org/react'

type Props = {
	isLoading: boolean
	isError: boolean
	html: string
	id: string
}

export const ContentTemplatePreview: FC<Props> = ({
	html,
	isError,
	isLoading,
	id,
}) => {
	useEffect(() => {
		const iframe = document.getElementById('test') as HTMLIFrameElement
		if (!iframe) return

		const blob = new Blob([html], { type: 'text/html' })
		iframe.src = URL.createObjectURL(blob)
	}, [html])

	if (!id) {
		return (
			<div className='flex-grow grid place-items-center'>
				<h1 className='text-lg font-bold'>Select a template...</h1>
			</div>
		)
	}

	if (isLoading) {
		return (
			<div className='flex-grow grid place-items-center'>
				<Spinner size='lg' />
			</div>
		)
	}

	if (isError) {
		return (
			<div className='flex-grow grid place-items-center'>
				<h1 className='text-lg font-bold'>Something went wrong</h1>
			</div>
		)
	}

	if (!html) {
		return (
			<div className='flex-grow grid place-items-center'>
				<h1 className='text-lg font-bold'>No template details</h1>
			</div>
		)
	}

	return (
		<iframe
			className='flex-grow overflow-y-auto'
			id='test'
			width='100%'
			height='100%'
		></iframe>
	)
}
