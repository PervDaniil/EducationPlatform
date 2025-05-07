export default function HeroSection() {
    return (
        <section className="max-h-screen w-full bg-cover bg-[url('https://images.unsplash.com/photo-1695376425475-1b6b561f8e4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="min-h-screen w-full p-5 lg:p-20 flex flex-col">
                <h1 className="mt-20 text-7xl lg:text-[9.5em]">Brain Center</h1>
                <p className="ml-8 mt-10 text-xs lg:text-base text-gray-300 max-w-3xl">Explore our education platform "Brain Center". We offer a variety of high-quality English & IT courses designed for learners of all levels. Whether you're looking to improve your language skills or gain technical expertise, our expert instructors and interactive lessons will help you achieve your goals. Join our growing community and start learning today!</p>
                <div className="flex-1 flex items-end">
                    <button className="mb-25 px-7.5 py-4 rounded-full bg-white text-black"><p>Get started</p></button>
                </div>
            </div>
        </section>
    )
}