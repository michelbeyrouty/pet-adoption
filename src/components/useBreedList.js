import { useState, useEffect } from "react";

const localCach = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCach[animal]) {
            setBreedList(localCach[animal]);
        } else {
            requesBreedList();
        }

        async function requesBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            console.log(json)
            localCach[animal] = json.breeds || [];
            setBreedList(localCach[animal]);
            setStatus("loaded");

            return json
        }
    }, [animal]);

    return [breedList, status];
}
