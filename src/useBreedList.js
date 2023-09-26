import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal){

    const results = useQuery(["breeds", animal], fetchBreedList);



    return [ results?.data?.breeds ?? [], results.status]; 


    /* ---- Used to cache manually ----
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("Unloaded");

    useEffect(() => {
        if (!animal){
            setBreedList([]);
        }else if (localCache[animal]){
            setBreedList(localCache[animal]);
        }else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("Loading");

            const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal.toLowerCase()}`);
            const resjson = await res.json();
            console.log(resjson);
            
            localCache[animal] = resjson.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("Loaded");
        }
    }, [animal] );

    */

}