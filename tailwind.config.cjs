const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				blob: 'blob 12s infinite'
			},
			fontFamily: {
				geologica: ['geologica', 'sans-serif']
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(20px, -50px) scale(1.05)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.95)'
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)'
					}
				}
			}
		}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#73dcff',
					'primary-focus': '#546aff',
					secondary: '#546aff',
					'secondary-focus': '#3640f5'
				},
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#73dcff',
					'primary-focus': '#546aff',
					secondary: '#546aff',
					'secondary-focus': '#3640f5'
				}
			}
		]
	}
};

module.exports = config;
