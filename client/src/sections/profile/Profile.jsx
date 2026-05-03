import SectionTitle from "../../components/ui/SectionTitle"

function Profile() {
  return (
    <section id="profile" className="py-12">
        <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(26,44,69,0.88),rgba(15,27,45,0.94))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
                <SectionTitle>My Profile</SectionTitle>
                <p className='mt-4 max-w-3xl text-[var(--text-muted)]'>
                    I am an undergraduate student at Sri Lanka Institute of Information Technology, pursuing a degree in Computer Science. 
                    I have experience working with Node.js, Express.js, React, Tailwind CSS, MongoDB and Docker containerization. 
                    </p>
            </div>
        </div>
    </section>
  )
}

export default Profile
