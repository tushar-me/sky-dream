module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./node_modules/flowbite/**/*.js",
      'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
      'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3DA29C',
            secondary: '#3F5FBB',
            thirdColor: '#C41271',
            fourthColor: '#CDA42C'
        }
      },
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }
