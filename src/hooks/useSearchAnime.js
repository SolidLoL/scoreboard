import { useState, useEffect } from 'react'

const useSearchAnime = ({list,id}) => {
    const [data, setData] = useState({});
    console.log(id)
    useEffect(() => {
        if (list) {
          list.find((a)=>{
            if (a.id == id) {
              setData(a)
            }
          })
        }
      }, [])
    return data;
}
export default useSearchAnime;
