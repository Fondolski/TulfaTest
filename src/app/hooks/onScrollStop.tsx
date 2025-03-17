

  import { useEffect, useState } from 'react';
  
  export default function onScrollStop(callback) {
  
  
      const [name, setName] = useState('Fondo')
  
    useEffect(function mount() {
  
      
      function onScroll(event) {
  
          console.log(event)
        
  
        console.log(callback())
  
     
      }
  

      let isScrolling;
        window.addEventListener(
        'mousewheel',
        e => {
            clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
            callback();
            }, 1000);
        },
        false
        );

    });
  
    return null;
  }