import CertificateCard from "./CertificateCard"
import { certificateData } from "../../data/certificates"
import SectionTitle from "../../components/ui/SectionTitle"

function Certificates() {
  return (
    <section id="certificates" className="py-12">
        <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(26,44,69,0.88),rgba(15,27,45,0.94))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
                <SectionTitle>Certificates</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificateData.map((certificate) => (
                        <CertificateCard key={certificate.id} certificate={certificate} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certificates
