import CertificateCard from "./CertificateCard"

function Certificates() {
  return (
    <section id="certificates" className="py-12 bg-slate-50">
        <div className="container mx-auto">
            <h1 className='text-3xl font-bold mb-8 text-slate-900'>Certificates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CertificateCard
                    title="Certificate 1"
                    issuer="Issuing Organization 1"
                    date="January 2023"
                    link="https://example.com/certificate1"
                />
                <CertificateCard
                    title="Certificate 2"
                    issuer="Issuing Organization 2"
                    date="February 2023"
                    link="https://example.com/certificate2"
                />
                <CertificateCard
                    title="Certificate 3"
                    issuer="Issuing Organization 3"
                    date="March 2023"
                    link="https://example.com/certificate3"
                />
            </div>
        </div>
    </section>
  )
}

export default Certificates