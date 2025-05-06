export default function Home() {
  const sections = [
    "Home", "FAQ", "Dashboard", "Contacts", "Info",
  ]
  return (
    <>
      <header className="w-full backdrop-blur-md shadow-2xs">
        <div className="py-8 px-10 flex items-center">
          <p className="font-[500]">Brain Center</p>
          <nav className="flex-1 flex justify-evenly items-center">
            {sections.map((section, index) => (
              <ol key={index}>
                <li><p className="font-[200]">{section}</p></li>
              </ol>
            ))}
          </nav>
        </div>
      </header>
      <section className="max-h-screen w-full bg-cover bg-[url('https://images.unsplash.com/photo-1695376425475-1b6b561f8e4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="min-h-screen w-full p-5 lg:p-20 flex flex-col">
          <h1 className="mt-10 text-7xl lg:text-[9.5em]">Brain Center</h1>
          <p className="ml-5 mt-10 text-xs lg:text-base text-gray-300 max-w-3xl">Explore our education platform "Brain Center". We offer a variety of high-quality English & IT courses designed for learners of all levels. Whether you're looking to improve your language skills or gain technical expertise, our expert instructors and interactive lessons will help you achieve your goals. Join our growing community and start learning today!</p>
          <div className="flex-1 flex items-end">
            <button className="mb-30 px-7.5 py-4 rounded-full bg-white text-black"><p>Get started</p></button>
          </div>
        </div>
      </section>
      <section className="max-h-screen w-full bg-cover bg-[url('https://images.unsplash.com/photo-1707730376818-a7a02fe896d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="min-h-screen w-full p-5 lg:p-20">

        </div>
      </section>
      <section className="max-h-screen w-full bg-center bg-black">
        <div className="min-h-screen w-full p-5 lg:p-20">

        </div>
      </section>
      <section className="max-h-screen w-full bg-center bg-[url('https://images.unsplash.com/photo-1693648793394-0b76b7eb042e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="min-h-screen w-full p-5 lg:p-20">

        </div>
      </section>
      <footer className="w-full min-h-[50vh] bg-white">
        <div className="w-full py-14 px-10">

        </div>
      </footer>
    </>
  );
}
