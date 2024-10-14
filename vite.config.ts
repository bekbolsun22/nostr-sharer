import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts({ insertTypesEntry: true })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@screens': path.resolve(__dirname, './src/screens'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@modules': path.resolve(__dirname, './src/modules'),
		},
	},
})
