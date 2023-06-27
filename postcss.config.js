module.exports = {
    plugins: [
      
      require('tailwindcss'),
      require('autoprefixer'),
      require('cssnano')({
        preset: 'default',
      }),
    ],
    
    tailwindcss: { config: './tailwindcss-config.js' },
    
  }
  