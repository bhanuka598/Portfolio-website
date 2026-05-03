function Badge({ children, color }) {
  const colorClasses = {
    red: 'bg-red-500 text-white',
    green: 'bg-green-500 text-white',
    blue: 'bg-blue-500 text-white',
    yellow: 'bg-yellow-500 text-black',
    gray: 'bg-gray-500 text-white',
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[color] || colorClasses.gray}`}>
      {children}
    </span>
  )
}

export default Badge