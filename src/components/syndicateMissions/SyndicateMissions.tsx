import { useQuery } from "@tanstack/react-query";
import type { CustomSyndicate, SyndicateMission } from "./SyndicateTypes";
import { getSpecialSyndicateMissions } from "./HATEOSSyndicates.ts";
import SpecialSyndicateMissions from "./SpecialSyndicateMissions";
import RegularSyndicateMissions from "./RegularSyndicateMissions";

export default function SyndicateMissions() {

    const { data: specialSyndicateMissions, isLoading: SpecialLoading } = useQuery<CustomSyndicate>({
        queryKey: ['SpecialSyndicateMissions'],
        queryFn: () => getSpecialSyndicateMissions(),
    });

    const { data: SyndicateMissions, isLoading: SyndicateLoading } = useQuery<SyndicateMission[]>({
        queryKey: ['SyndicateMissions'],
        queryFn: (): Promise<SyndicateMission[]> =>
            fetch("https://api.warframestat.us/pc/syndicateMissions").then(res => res.json()),
    });

    return (
        <div className="flex flex-row justify-center w-full h-full">
            <SpecialSyndicateMissions 
                specialSyndicateMissions={specialSyndicateMissions}
                isLoading={SpecialLoading}
            />

            <RegularSyndicateMissions 
                SyndicateMissions={SyndicateMissions}
                isLoading={SyndicateLoading}
            />
        </div>
    );
}