import { useEffect, useState } from 'react';

export default function useScroll(callback: any) {


    const [name, setName] = useState('Fondo')

  useEffect(function mount() {

    
    function onScroll(event: any) {

        console.log(event)
      

      console.log(callback())

   
    }

    window.addEventListener('mousewheel', onScroll);

    return function unMount() {
      window.removeEventListener('mousewheel', onScroll);
    };
  });

  return null;
}