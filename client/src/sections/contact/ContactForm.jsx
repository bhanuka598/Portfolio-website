function ContactForm() {
    return (
        <form className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" /> 
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send Message
            </button>
        </form>
    )
}

export default ContactForm