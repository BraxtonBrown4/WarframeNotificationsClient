import factionInfo from "../../utilities/FactionInfo";
import relicInfo from "../../utilities/RelicInfo";
import CountdownTimer from "./CountdownTimer";
import type { VoidFissure } from "./VoidFissureTypes";

export default function VoidFissureCard({ voidFissure }: { voidFissure: VoidFissure }) {

    const relicIcon = relicInfo(voidFissure.tier)
    const faction = factionInfo(voidFissure.enemy)

    return (
        <div className="bg-gray-900 flex flex-row text-white font-mono text-xs border border-gray-500 w-full max-w-md m-2 h-20">
            <img
                src={relicIcon}
                alt="Relic Icon"
                className="h-full aspect-square object-contain filter invert"
            />

            <div className="flex flex-col justify-center items-center text-center px-3 flex-grow">
                <h2 className="text-[13px]" style={{ color: '#b5a66e' }}>
                    {voidFissure.missionType} - {voidFissure.enemy}
                </h2>
                <h2 className="text-white font-bold text-sm">{voidFissure.tier}</h2>
                <h2 className="text-white text-[11px] font-normal">{voidFissure.node}</h2>
                 <CountdownTimer expiry={voidFissure.expiry}/>
            </div>

            <div className="h-full aspect-square">
                {faction?.icon ? (
                    <img
                        src={faction.icon}
                        alt="Faction Icon"
                        className={`h-full w-full object-contain ${faction.invertedIconColor}`}
                    />
                ) : (
                    <div className="h-full w-full" />
                )}
            </div>
        </div>
    );
}
