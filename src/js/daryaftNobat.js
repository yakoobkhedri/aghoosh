let regions = Array.from(document.querySelectorAll('.region > div'));
let cliniks = Array.from(document.querySelectorAll('.clinik > div'));
let dates = Array.from(document.querySelectorAll('.date > div'));
let hours = Array.from(document.querySelectorAll('.hour > div'));

regions.forEach((item)=>{
    item.addEventListener('click', function () {
        regions.forEach((items)=>{items.classList.remove('active')});
        item.classList.add('active');
    })
});
cliniks.forEach((item)=>{
    item.addEventListener('click', function () {
        item.classList.toggle('active');
    })
});
dates.forEach((item)=>{
    item.addEventListener('click', function () {
        dates.forEach((items)=>{items.classList.remove('active')});
        item.classList.add('active');
    })
});
hours.forEach((item)=>{
    item.addEventListener('click', function () {
        hours.forEach((items)=>{items.classList.remove('active')});
        item.classList.add('active');
    })
});