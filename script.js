function hoverEffect(element) {
   const windows = document.querySelectorAll('.window');

   const currentIndex = Array.from(windows).indexOf(element);

   const animationHeight = 20;

   for (let i = 0; i < windows.length; i++) {
      const distance = Math.abs(i - currentIndex);
      const translateY = distance * animationHeight;
      windows[i].style.transform = `translateY(-${translateY}px)`;
   }
}