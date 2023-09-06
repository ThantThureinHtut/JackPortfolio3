const ani = () => {
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        // if(entry.isIntersecting) {
        //     entry.target.classList.add('show');
        // }else {
        //     entry.target.classList.remove('show');
        // }
        entry.target.classList.toggle('show' , entry.isIntersecting);
        if (entry.isIntersecting)  observer.unobserve(entry.target)
    })
},
{
    rootMargin: '-5px',
}
)
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el))
};

export default ani;