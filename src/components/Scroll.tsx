

export const Scroll = () =>{
  return(
window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight === document.body.scrollHeight){
      window.scrollTo(0,0)
    }}))}