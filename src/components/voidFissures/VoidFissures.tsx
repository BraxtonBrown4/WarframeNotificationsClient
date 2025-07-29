import { useQuery } from "@tanstack/react-query";
import type { VoidFissure } from "./VoidFissureTypes";
import { useState } from "react";
import VoidFissureCard from "./VoidFissureCard";
import OriginIcon from "../../assets/steepathIcons/OriginIcon.webp"
import SteelpathIcon from "../../assets/steepathIcons/SteelpathIcon.webp"

export default function VoidFissures() {
    const [voidStorm, setVoidStorm] = useState(false)
    const [steelPath, setSteelPath] = useState(false)

    const { data: invasions, isLoading } = useQuery<VoidFissure[]>({
        queryKey: ['VoidFissures'],
        queryFn: (): Promise<VoidFissure[]> =>
            fetch("https://api.warframestat.us/pc/fissures").then(res => res.json()),
    });

    return (<div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="w-full max-w-2xl m-4 text-3xl border-b-2 border-white pb-2">{voidStorm ? "VOID STORMS" : "VOID FISSURES"}</h2>
        {
            isLoading ? <h2>Loading...</h2> : (
                invasions?.map((vf: VoidFissure) => !vf.expired && vf.isStorm === voidStorm && vf.isHard == steelPath && <VoidFissureCard key={vf.id} voidFissure={vf} />)
            )
        }
        <div className="fixed justify-center items-center right-[25vw] top-1/2 -translate-y-1/2 flex flex-col gap-4 p-4 w-[70px] bg-[#191811] border border-[#e8ddb8]">
            <div
                className="relative group w-[50px] h-[50px] cursor-pointer"
                onClick={() => { setSteelPath(false), setVoidStorm(false) }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className={`rounded-full transition duration-300 blur-lg w-[36px] h-[36px] bg-[radial-gradient(circle,rgba(161,147,99,1)_0%,transparent_60%)] 
                ${!steelPath && !voidStorm ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </div>
                <img
                    src={OriginIcon}
                    alt="Origin System Icon"
                    className="w-[50px] h-[50px] relative z-10"
                />
            </div>

            <div
                className="relative group w-[50px] h-[50px] cursor-pointer"
                onClick={() => { setSteelPath(true), setVoidStorm(false) }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className={`rounded-full transition duration-300 blur-lg w-[36px] h-[36px] bg-[radial-gradient(circle,rgba(161,147,99,1)_0%,transparent_60%)] 
                ${steelPath ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </div>
                <img
                    src={SteelpathIcon}
                    alt="Steelpath Icon"
                    className="w-[50px] h-[50px] relative z-10"
                />
            </div>
            <button onClick={() => { setVoidStorm(true), setSteelPath(false) }}>RJ</button>
        </div>
    </div>
    )
}