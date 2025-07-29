import AxiIcon from "../assets/relicIcons/AxiIcon.svg";
import NeoIcon from "../assets/relicIcons/NeoIcon.svg";
import MesoIcon from "../assets/relicIcons/MesoIcon.svg";
import LithIcon from "../assets/relicIcons/LithIcon.svg";
import RequiemIcon from "../assets/relicIcons/RequiemIcon.svg";

export default function relicInfo(type: string): string {
    switch (type.toLowerCase()) {
        case 'requiem':
            return RequiemIcon;
        case 'axi':
            return AxiIcon;
        case 'neo':
            return NeoIcon;
        case 'meso':
            return MesoIcon;
        case 'lith':
            return LithIcon;
        default:
            return LithIcon;
    }
}
