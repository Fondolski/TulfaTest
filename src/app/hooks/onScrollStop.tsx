

  import { useEffect, useState } from 'react';
  
  export default function onScrollStop(callback: any) {
  
  
      const [name, setName] = useState('Fondo')
  
    useEffect(function mount() {
  
    
  

      let isScrolling: any;
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