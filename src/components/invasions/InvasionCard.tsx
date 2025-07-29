import type { Invasion } from "./InvasionTypes";
import imgFinder from "../../utilities/ImgFinder";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import factionInfo from "../../utilities/FactionInfo";

export default function InvasionCard({ invasion }: { invasion: Invasion }) {

    const attackerInfo = useMemo(
        () => factionInfo(invasion.attacker.faction),
        [invasion.attacker.faction]
    );

    const defenderInfo = useMemo(
        () => factionInfo(invasion.defender.faction),
        [invasion.defender.faction]
    );

    const { data: attackerReward, isLoading: defenderRewardLoading } = useQuery<string>({
        queryKey: ['AttackerRewardImg', `${invasion.id}`],
        queryFn: () => imgFinder(invasion.attacker.reward.thumbnail),
        enabled: !!invasion?.attacker?.reward?.thumbnail,
    })

    const { data: defenderReward, isLoading: attackerRewardLoading } = useQuery<string>({
        queryKey: ['DefenderRewardImg', `${invasion.id}`],
        queryFn: () => imgFinder(invasion.defender.reward.thumbnail),
        enabled: !!invasion?.defender?.reward?.thumbnail
    });

    return (
        <div className="bg-gray-900 text-white font-mono text-xs border border-gray-500 w-full max-w-md m-2">
            <div className="px-3 py-2 flex flex-col items-center">
                <span className="font-bold text-gray-100 text-sm">{invasion.node}: {invasion.desc}</span>
            </div>

            <div className="flex flex-row justify-center items-center bg-gray-700 h-3 mb-3 overflow-hidden relative">
                <h2 className="absolute text-xs">{Number(invasion.completion.toFixed(2))}% - Ends in: {invasion.eta}</h2>
                <div
                    className={`right-0 top-0 h-full ${attackerInfo?.progressionColor}`}
                    style={{ width: `${invasion.completion}%` }}
                />
                <div
                    className={`right-0 top-0 h-full flex-1 ${defenderInfo?.progressionColor}`}
                />
            </div>

            <div className="px-3 py-2">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-2">
                        <img src={attackerInfo?.icon} alt="Attacker Icon" className={`w-6 h-6 ${attackerInfo?.invertedIconColor}`} />
                        <span className="text-gray-100 font-bold text-base">{invasion.attacker.faction}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-100 font-bold text-base">{invasion.defender.faction}</span>
                        <img src={defenderInfo?.icon} alt="Defender Icon" className={`w-6 h-6 ${defenderInfo?.invertedIconColor}`} />
                    </div>
                </div>
                <div className="flex justify-between items-center mb-3">

                    <div className="flex items-center space-x-2">
                        {invasion.attacker.faction !== "Infested" && <>
                            {!attackerRewardLoading ? <img src={attackerReward} alt="Reward Image" className="w-6 h-6" /> : <h2 className="text-xs">Loading...</h2>}
                            <span className="text-gray-100 font-bold text-sm">{invasion.attacker.reward.asString}</span>
                        </>}
                    </div>

                    <div className="flex items-center space-x-2">
                        {invasion.defender.faction !== "Infested" && <>
                            <span className="text-gray-100 font-bold text-sm">{invasion.defender.reward.asString}</span>
                            {!defenderRewardLoading ? <img src={defenderReward} alt="Reward Image" className="w-6 h-6" /> : <h2 className="text-xs">Loading...</h2>}
                        </>}
                    </div>

                </div>
            </div>
        </div>

    );
}
