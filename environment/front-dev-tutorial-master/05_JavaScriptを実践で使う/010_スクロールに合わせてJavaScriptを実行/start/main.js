const child = document.querySelector('.child');
const cb = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('inview');
      entry.target.classList.add('inview');
      // observer.unobserve(entry.target);
    } else {
      console.log('out view');
      entry.target.classList.remove('inview');
    }
  })
  // alert('aaaaaaa');
}

const options = {
  root: null,
  rootMargin: "-300px 0px",
  threshold: 1
};

const io = new IntersectionObserver(cb, options);
io.observe(child);