import { useEffect, useState } from "react"

function useDonationData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('./data.json');
      const data = await res.json();
      setData(data);
    })()
  }, [])
  return {data};
}

export default useDonationData