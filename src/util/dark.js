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
            // querySelectorAll သုံးထားရင် forEach သုံးပြီးdataတွေပြန်ထုတ်ရတယ်
            // querySelectorAll သုံးရတာက .sun class က element ၂ခုထဲမှာရှိနေတာကို ၂ခုလုံးထဲကကို add လုပ်ခြင်လို့
            //   querySelectorAll နဲ့ forEach မသုံးဘူးဆို add လုပ်ရင် element တစ်ခုစီပဲဝင်သွားမယ် ၂ခုလုံးထဲမဝင်ဘူး
        }
    })
})
};


export default darkMode;