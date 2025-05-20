import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(()=> {
        if (!currency) return;
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Fba4AtdP1XIrXuJ0EdDuDrQ8SquN2QJT9seDVKWt&base_currency=${currency}`)
            .then(res => res.json())
            .then(data => {
                setData(data.data || {});
            });
    }, [currency]);
    return data;
}

export default useCurrencyInfo;