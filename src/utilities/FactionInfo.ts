import GrineerIcon from "../assets/factionIcons/GrineerIcon.webp"
import CorpusIcon from "../assets/factionIcons/CorpusIcon.webp"
import InfestedIcon from "../assets/factionIcons/InfestedIcon.svg"

interface FactionInfo {
    icon: string;
    progressionColor: string;
    invertedIconColor?: string;
}

export default function factionInfo(faction: string): FactionInfo | null {
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