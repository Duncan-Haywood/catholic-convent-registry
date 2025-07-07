import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@': './src',
			'@/components': './src/components',
			'@/lib': './src/lib',
			'@/hooks': './src/hooks',
			'@/utils': './src/utils',
			'@/types': '../shared/src/types',
			'@/styles': './src/styles',
			'@/routes': './src/routes'
		}
	},
	preprocess: vitePreprocess()
};

export default config;