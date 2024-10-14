import { ChangeEvent, FC, useEffect, useState } from 'react'

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalProps,
} from '@nextui-org/modal'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { ITemplate } from '@utils/types'

type Props = Omit<ModalProps, 'children'> & {
	templates: ITemplate[]
	onTemplateChange: (e: ChangeEvent<HTMLSelectElement>) => void
	selectedTemplate: ITemplate | null
}

export const ModalTemplate: FC<Props> = ({
	isOpen,
	onOpenChange,
	templates,
	onTemplateChange,
	selectedTemplate,
}) => {
	const selectedKeys = selectedTemplate ? [selectedTemplate.id] : []

	const [searchQuery, setSearchQuery] = useState('')
	const [filteredTemplates, setFilteredTemplates] =
		useState<ITemplate[]>(templates)

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value

		setSearchQuery(query)
		if (query) {
			const lowerQuery = query.toLowerCase()
			const filtered = templates.filter(
				(template) =>
					template.name.toLowerCase().includes(lowerQuery) ||
					template.tags.some((tag) =>
						tag.toLowerCase().includes(lowerQuery),
					),
			)
			setFilteredTemplates(filtered)
		} else {
			setFilteredTemplates(templates)
		}
	}

	const handleSearchClear = () => {
		setSearchQuery('')
		setFilteredTemplates(templates)
	}

	useEffect(() => {
		setFilteredTemplates(templates)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className='flex flex-col gap-1 items-center'>
							Choose a template
						</ModalHeader>
						<ModalBody>
							<div className='flex flex-col gap-3'>
								<Select
									placeholder='Select template'
									selectedKeys={selectedKeys}
									onChange={(e) => {
										onTemplateChange(e)
										onClose()
									}}
									variant='bordered'
									items={templates}
									label='Template:'
									labelPlacement='outside'
								>
									{(template) => (
										<SelectItem key={template.id}>
											{template.name}
										</SelectItem>
									)}
								</Select>

								<Input
									fullWidth
									placeholder='Search by name or tag'
									value={searchQuery}
									onChange={handleSearchChange}
									aria-label='Search templates'
									variant='bordered'
									isClearable
									onClear={handleSearchClear}
									label='Search:'
									labelPlacement='outside'
								/>
							</div>

							<div className='flex flex-col gap-3'>
								<h1 className='text-center font-semibold text-lg'>
									Templates:
								</h1>
								<div className='flex flex-col gap-2'>
									{filteredTemplates.map((t) => {
										return (
											<div
												className='flex gap-2'
												key={t.id}
											>
												<div className='w-16 h-w-16 rounded-lg bg-slate-100'></div>
												<div>
													<b>{t.name}</b>
													<div className='flex items-center gap-2'>
														{t.tags.map((tag) => {
															return (
																<span key={tag}>
																	{tag}
																</span>
															)
														})}
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								color='default'
								variant='faded'
								onPress={onClose}
							>
								Close
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
