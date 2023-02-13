const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#73dcff",
          "primary-focus": "mediumblue",
					secondary: "#546aff",
        },
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					primary: "#73dcff",
					"primary-focus": "mediumblue",
					secondary: "#546aff",
				}
      },
    ],
  }
};

module.exports = config;
