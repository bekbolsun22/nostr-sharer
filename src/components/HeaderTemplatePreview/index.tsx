import { ArrowsUpDown } from '@assets/icons'
import { Button } from '@nextui-org/react'
import { ITemplate } from '@utils/types'
import { FC } from 'react'

type Props = {
	onOpenModal: () => void
	selectedTemplate: ITemplate | null
}

export const HeaderTemplatePreview: FC<Props> = ({
	onOpenModal,
	selectedTemplate,
}) => {
	return (
		<>
			<div className='p-4 flex justify-center items-center shadow'>
				<Button
					variant='bordered'
					onClick={onOpenModal}
					endContent={<ArrowsUpDown />}
				>
					Template: <b>{selectedTemplate?.name || '-'}</b>
				</Button>
			</div>
		</>
	)
}
