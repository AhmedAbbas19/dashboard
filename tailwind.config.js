module.exports = {
  purge: {
    // enabled: true,
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
     width: {
       'full-60': "calc(100% - 15rem)",
       'full-16': "calc(100% - 4rem)",
     }
    },
    fontFamily: {
      'sans': ['overpass', 'system-ui'],
     }
  }
}
