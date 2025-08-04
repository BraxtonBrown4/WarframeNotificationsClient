import { useQuery } from "@tanstack/react-query";
import type { SyndicateMission } from "./SyndicateTypes";

export default function SyndicateBounties() {

    const { data: syndicateMissions, isLoading } = useQuery<SyndicateMission[]>({
        queryKey: ['SyndicateMissions'],
        queryFn: (): Promise<SyndicateMission[]> =>
            fetch("https://api.warframestat.us/pc/syndicateMissions").then(res => res.json()),
    });

    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-full">
            {
                isLoading ? <h2>Loading...</h2> : (
                    syndicateMissions?.map((SM: SyndicateMission) => <h2 key={SM.id}>{SM.id}</h2>)
                )
            }
        </div>
    )
}