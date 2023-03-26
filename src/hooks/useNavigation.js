import { useEffect } from "react";

export const useNavigation = (ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const id = ref.current.addEventListener('keydown',e => {
      console.log(e)
    })
    return () => {
      // ref.current.removeEventListener(id)
    }
    console.log(ref)
  }, [ref.current])
}