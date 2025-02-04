import { FC } from 'react'
import { Button } from '@nextui-org/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@assets/icons'

type Props = {
	onPrevClick: () => void
	onNextClick: () => void
}

export const FooterTemplatePreview: FC<Props> = ({
	onNextClick,
	onPrevClick,
}) => {
	return (
		<div className='p-4 flex justify-between items-center shadow-top'>
			<Button
				isIconOnly
				className='rounded-full'
				variant='bordered'
				onClick={onPrevClick}
			>
				<ArrowLeftIcon />
			</Button>

			<Button color='primary'>Continue</Button>

			<Button
				isIconOnly
				className='rounded-full'
				variant='bordered'
				onClick={onNextClick}
			>
				<ArrowRightIcon />
			</Button>
		</div>
	)
}
