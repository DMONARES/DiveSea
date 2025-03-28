// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	modules: [
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
		"@nuxtjs/color-mode",
		'shadcn-nuxt',
	],

	shadcn: {
		prefix: '',
		componentDir: './components/shadcn-ui/'
	},

	colorMode: {
		classSuffix: "",
	},

	// env, пожалуйста, создайте в корне проекта env c именем NUXT_PUBLIC_API_HOST, если это требуется ⬇️

	// runtimeConfig: {
	// 	public: {
	// 		api: process.env.NUXT_PUBLIC_API_HOST,
	// 	}
	// },

	// если вам нужно проксировать получение данных с элемента ( или любые другие ) - раскоментируйте код ниже и добавьте данные в env файл с ключом process.env.NUXT_PUBLIC_ELEMENT_HOST ⬇️

	// nitro: {
	// 	devProxy: {
	// 		'/element': {
	// 			target: process.env.NUXT_PUBLIC_ELEMENT_HOST,
	// 			changeOrigin: true
	// 		},
	// 	},
	// },

	// css base configuration
	css: ['@/assets/styles/index.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern',
					silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api'],
					additionalData: `@use "@/assets/styles/base/_variables.scss" as *;  @use "@/assets/styles/base/_mixins.scss" as *;`,
				},
			},
		},
	},
})
