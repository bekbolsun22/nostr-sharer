import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ndk } from './modules/nostr.ts'
import { NextUIProvider } from '@nextui-org/react'

ndk.connect()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NextUIProvider className='h-full'>
			<App />
		</NextUIProvider>
	</StrictMode>,
)
