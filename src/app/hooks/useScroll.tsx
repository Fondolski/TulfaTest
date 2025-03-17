import { useEffect, useState } from 'react';

export default function useScroll(callback) {


    const [name, setName] = useState('Fondo')

  useEffect(function mount() {

    
    function onScroll(event) {

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