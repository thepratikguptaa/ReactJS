import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(()=> {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Fba4AtdP1XIrXuJ0EdDuDrQ8SquN2QJT9seDVKWt`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
            console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;