export default function Header() {
    const sections = [
        "Home", "FAQ", "Dashboard", "Contacts", "Info",
      ]
      
    return (
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
    )
}