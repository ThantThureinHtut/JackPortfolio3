const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    const suns = document.querySelectorAll('.sun');

    // Statr
    const theme = localStorage.getItem('theme');
    const clr = localStorage.getItem('clr');
    // On mount
    theme && document.body.classList.add(theme); 

    clr && suns.forEach(sun => {
        sun.classList.add(clr)
    })
themeToggleBtns.forEach(btn =>{
    btn.addEventListener('click' , () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme' , 'light-mode');
            localStorage.setItem('clr' , 'colorSky500')
        //    Sun color
            suns.forEach(sun => {
                sun.classList.add('colorSky500');
            })
        }else {
            localStorage.removeItem('theme');
            localStorage.removeItem('clr');
            //  sun color
            suns.forEach(sun => {
                sun.classList.remove('colorSky500');
            })
        }
    })
})


// suns.forEach(sun => {
//     sun.addEventListener('click' , () => {
//         sun.classList.toggle('colorSky500');
//         if(sun.classList.contains('colorSky500')) {
//             localStorage.setItem('clr' , 'colorSky500');
//         }else {
//             localStorage.removeItem('clr');
//         }
//     })
// })
};


export default darkMode;