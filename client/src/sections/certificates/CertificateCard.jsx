function CertificateCard({ certificate }) {
    const { title, issuer, date, link, credentialId } = certificate;
    
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-1">Issued by: {issuer}</p>
      <p className="text-gray-700 mb-4">Date: {date}</p>
      {credentialId && <p className="text-gray-700 mb-4">Credential ID: {credentialId}</p>}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Certificate
        </a>
      )}
    </div>
  )
}

export default CertificateCard
