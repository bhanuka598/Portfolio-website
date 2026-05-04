import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth' // Smooth scroll to top
            }
        )
    }

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="rounded-full border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(22,34,52,0.94),rgba(10,18,32,0.98))] p-3 text-cyan-300 shadow-[0_18px_42px_rgba(0,0,0,0.34),0_0_0_1px_rgba(34,211,238,0.05)] transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-[0_26px_60px_rgba(0,0,0,0.38),0_0_24px_rgba(34,211,238,0.08)]"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    )
}

export default ScrollToTop
