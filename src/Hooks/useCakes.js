import axios from 'axios';
import { useEffect, useState } from 'react';

const useCakes = () => {

  const [cakes, setCakes] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  const getCakes = () => {
    axios.get("./products.json")
      .then(res => {
        setCakes(res.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  useEffect(() => getCakes(), [])
  return [cakes, isLoading]
}

export default useCakes