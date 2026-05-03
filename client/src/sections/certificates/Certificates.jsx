import CertificateCard from "./CertificateCard"
import { certificateData } from "../../data/certificates"

function Certificates() {
  return (
    <section id="certificates" className="py-12 bg-slate-50">
        <div className="container mx-auto">
            <h1 className='text-3xl font-bold mb-8 text-slate-900'>Certificates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificateData.map((certificate) => (
                    <CertificateCard key={certificate.id} certificate={certificate} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Certificates
