// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.agate-pris.dev',
	base: '/notes',
	// Hugo の出力先 public/ に直接書き込む (Hugo → Astro の順でビルド)
	outDir: '../public/notes',
	integrations: [
		starlight({
			title: 'Notes',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/agate-pris' }],
			// sidebar を省略するとディレクトリ構造から自動生成される
			// (ドキュメントに未記載の動作)
		}),
	],
});
