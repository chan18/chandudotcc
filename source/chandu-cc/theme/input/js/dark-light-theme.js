
    
    // Start by getting the current theme value in localStorage
    let theme = localStorage.getItem('theme');
    
    document.getElementsByTagName("html")[0].classList.add(theme)

    // Grab the class of the element that you want users to click to toggle dark and light theme/modes
    const themeToggle = document.querySelector('.js-theme-toggle')
  
    // Grab the class of the element that you want users to click on to revert to their system theme/mode
    const themeRemove = document.querySelector('.js-theme-remove')
  
    // Adds ".dark" to the <html> element, and adds "theme: dark" to localStorage
    const goDark = function () {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark');
    }
  
    // Adds ".dark" to the <html> element, and adds "theme: dark" to localStorage
    const goLight = function () {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light');
    }
  
    // Removes the theme form local storage, and matches the mode to the user's default system theme/mode
    const goSystem = function () {
        localStorage.removeItem('theme')
  
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
  
    // Toggling the theme when the element with `.js-theme-toggle` is clicked
    themeToggle.addEventListener('click', function () {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            goLight();
        } else {
            goDark();
        }
    });
  
    // Reverting the theme to default when the element with `.js-theme-remove` is clicked
    themeRemove.addEventListener('click', function () {
        goSystem();
    });


