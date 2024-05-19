import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ServerURLCopy from 'vite-plugin-url-copy';

export default defineConfig({
	plugins: [sveltekit(), ServerURLCopy({ qrcode: { disabled: false } })],
	ssr: {
		noExternal: ['three']
	},
	server: {
		fs: {
			allow: ['static']
		},
		host: true
	},
	preview: {
		host: true
	}
});
