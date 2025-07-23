import { useQuery } from "@tanstack/react-query"
import InvasionCard from "./InvasionCard";
import type { Invasion } from "./InvasionTypes";

export default function Invasions() {

    const { data: invasions, isLoading } = useQuery<Invasion[]>({
        queryKey: ['Invasions'],
        queryFn: () =>
            fetch("https://api.warframestat.us/pc/invasions").then(res => res.json()),
    });

    return (<div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="w-full max-w-2xl m-4 text-3xl border-b-2 border-white pb-2">INVASIONS</h2>
        {
            isLoading ? <h2>Loading...</h2> : (
                invasions?.map((i: Invasion) => <InvasionCard key={i.id} invasion={i}/>)
            )
        }
    </div>
    )
}