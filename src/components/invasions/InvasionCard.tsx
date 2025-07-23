import GrineerIcon from "../../assets/GrineerIcon.webp"
import CorpusIcon from "../../assets/CorpusIcon.webp"
import InfestedIcon from "../../assets/InfestedIcon.svg"
import type { FactionInfo, Invasion } from "./InvasionTypes";
import imgFinder from "../../utilities/ImgFinder";
import { useQuery } from "@tanstack/react-query";

export default function InvasionCard({ invasion }: { invasion: Invasion }) {

    function factionInfo(faction: string): FactionInfo | null {
        switch (faction.toLowerCase()) {
            case 'grineer':
                return {
                    icon: GrineerIcon,
                    progressionColor: "bg-[#993a3b]",
                }
            case 'corpus':
                return {
                    icon: CorpusIcon,
                    progressionColor: "bg-[#3f6b77]",
                }
            case 'infested':
                return {
                    icon: InfestedIcon,
                    progressionColor: "bg-[#48745d]",
                    invertedIconColor: "filter invert"
                }
            default:
                return null
        }
    }

    const attackerInfo = factionInfo(invasion.attacker.faction);
    const defenderInfo = factionInfo(invasion.defender.faction);

    const { data: attackerReward, isLoading: DRIIsLoading } = useQuery<string>({
        queryKey: ['AttackerRewardImg', `${invasion.id}`],
        queryFn: () => imgFinder(invasion?.attacker?.reward?.thumbnail)
    })

    const { data: defenderReward, isLoading: ARIIsLoading } = useQuery<string>({
        queryKey: ['DefenderRewardImg', `${invasion.id}`],
        queryFn: () => imgFinder(invasion?.defender?.reward?.thumbnail)
    });

    return !invasion.completed && (
        <div className="bg-gray-900 text-white font-mono text-sm border border-gray-500 w-full max-w-2xl m-4">
            <div className="px-6 py-3 flex flex-col items-center">
                <span className="font-bold text-gray-100 text-base">{invasion.node}: {invasion.desc}</span>
            </div>

            <div className="flex flex-row justify-center items-center bg-gray-700 h-4 mb-5 overflow-hidden">
                <h2 className="absolute">{Number(invasion.completion.toFixed(2))}% - Ends in: {invasion.eta}</h2>
                <div
                    className={`right-0 top-0 h-full ${attackerInfo?.progressionColor}`}
                    style={{ width: `${invasion.completion}%` }}
                />
                <div
                    className={`right-0 top-0 h-full flex-1 ${defenderInfo?.progressionColor}`}
                />
            </div>

            <div className="px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-3">
                        <img src={attackerInfo?.icon} alt="Attacker Icon" className={`w-[40px] h-[40px] ${attackerInfo?.invertedIconColor}`} />
                        <span className="text-gray-100 font-bold text-lg">{invasion.attacker.faction}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-100 font-bold text-lg">{invasion.defender.faction}</span>
                        <img src={defenderInfo?.icon} alt="Defender Icon" className={`w-[40px] h-[40px] ${defenderInfo?.invertedIconColor}`} />
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">

                    <div className="flex items-center space-x-3">
                        {invasion.attacker.faction !== "Infested" && <>
                            {!ARIIsLoading ? <img src={attackerReward} alt="Reward Image" className="w-[40px] h-[40px]" /> : <h2>Loading...</h2>}
                            <span className="text-gray-100 font-bold text-lg">{invasion?.attacker?.reward?.asString}</span>
                        </>}
                    </div>

                    <div className="flex items-center space-x-3">
                        {invasion.defender.faction !== "Infested" && <>
                            <span className="text-gray-100 font-bold text-lg">{invasion?.defender?.reward?.asString}</span>
                            {!DRIIsLoading ? <img src={defenderReward} alt="Reward Image" className="w-[40px] h-[40px]" /> : <h2>Loading...</h2>}
                        </>}
                    </div>

                </div>
            </div>
        </div>
    );
}
