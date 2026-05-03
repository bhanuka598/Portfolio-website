function CertificateCard({ title, issuer, date, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-1">Issued by: {issuer}</p>
      <p className="text-gray-700 mb-4">Date: {date}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Certificate
      </a>
    </div>
  )
}

export default CertificateCard