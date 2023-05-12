import { useEffect } from "react";

const useTitle = title => {
    
    useEffect( () => {
       document.title = `${title} | Royal Espresso`;
    }, [title])

}

export default useTitle ; 