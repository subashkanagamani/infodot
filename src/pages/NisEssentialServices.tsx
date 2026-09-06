import { EvidencePageLayout } from "@/components/EvidencePageLayout";
import { nisEssentialServices, sectorChips } from "@/data/newPages";

const NisEssentialServices = () => <EvidencePageLayout data={nisEssentialServices} chips={sectorChips} />;

export default NisEssentialServices;
