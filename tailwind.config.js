tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
          'container': '1920px',
        },
        colors: {
          'primary': '#fff',
          'highlighter':'#000',
          'textcolor':'#8c8c8c',
         ' h4color':'#55555',
         'btncolor':'#ebebeb',
         'overflow':'linear-gradient(#00000041,#00000041)'
        },
        backgroundImage: {
          'bannerbackground': "linear-gradient(#00000041,#00000041),url('images/sathi.jpg')",
          'presantation': "url('images/mahabub.jpg')",
          
        },
        

        fontFamily: {
          'raleway': " 'Raleway', sans-serif",

           'montserrat':  "'Montserrat', sans-serif;"
        }
      }
    }
  }