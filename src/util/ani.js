const ani = () => {
const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries.forEach(entry => {
        console.log(entry)
        // if(entry.isIntersecting) {
        //     entry.target.classList.add('show');
        // }else {
        //     entry.target.classList.remove('show');
        // }
        entry.target.classList.toggle('show' , entry.isIntersecting);
        // entry က isIntersecting ဖြစ်လာမဖြစ်လာပေါ်မူတီပြီ  show ကို add or remove လုပ်မယ် 
        if (entry.isIntersecting)  observer.unobserve(entry.target)
        // entry ကအပေါ်မှာ true ဖြစ်သွားပြီဆိုတော့ 
        // entry ture ဖြစ်ရင် observer ထက်မလုပ်တော့ဘူး
        // ဆိုတော့ scroll down လုပ်ပဲီ အမြင်ကွင်ထဲရောက်လာလို့ပေါ်လာပြီသားဟာတွေက  scroll up လုပ်ရင်မြင်ကွင်းထဲက
        // ပျောက်သွားတော့မှာမဟုတ်ပါဘူး
        // page ko refrash ပြန်လုပ်မှသာ entry.target.classList.toggle('show' , entry.isIntersecting);
        // ကအလုပ်ပြန်လုပ်မှာပါ
        
    })
},
{
    rootMargin: '-5px',
}
)
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el)) 

};
// hiddenElement ထဲမှာ htmlမှာပေးထားတဲ့  hiddenတွေဝင်နေမှာ querySelectorAll နဲ့ယူထားရင်  data တွေက 
// array နဲ့ပုံစံတူတစ်ခုအနေနဲ့ hiddenElement ထဲဝင်လားမယ် အဲ့ဒါကြောင့် forEach ကိုသုံးပေးရတယ် ဝင်လာတဲ့ array data 
// ကိုပြန်ဖြည်ပြီးသုံးတာပေါ့ 
// နောက်တော့ ဖြည်လိုက်တဲ့ data တွေကို အပေါ်မှာကြေငြာ ထားတဲ့ obeserver function ထဲကို 
// (function name)observer.observe(el)(method) <-- ဒီ(method)ကိုသုံးပြီ ထည်မယ်
// အဲ့ dataတွေက entries အနေနဲ့ဝင်မယ် data info တွေတွေ့ရတာပြောင်းသွားမယ်  array တစ်ခု အနေနဲ့ဖြစ်သွားမဘ်
// အဲ့ဒါတွေကို forEach သုံးလိုက်တော့ data တွေက entry ထဲရောက်သွားမယ် အဲ့data တွေထဲက ကို target လုပ်ခြင်တဲ့ဟာကို
// .target သုံးပြီလုပ်မယ်
export default ani;