import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalProps,
} from '@nextui-org/react'
import { FC } from 'react'

type Props = Omit<ModalProps, 'children'> & {
	dataUrl?: string
}

const ModalPreviewImage: FC<Props> = ({ dataUrl, isOpen, onOpenChange }) => {
	return (
		<Modal isOpen={isOpen} placement='center' onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className='flex flex-col gap-1 items-center'>
							Shareable images
						</ModalHeader>
						<ModalBody>
							<div>
								{dataUrl ? (
									<img
										src={dataUrl}
										alt='Preview'
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								) : (
									<p>No preview available</p>
								)}
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

export default ModalPreviewImage
