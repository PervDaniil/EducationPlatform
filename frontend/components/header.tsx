export default function Header() {
    const sections = [
        "Home", "FAQ", "Contacts", "Info", "Courses", "Dashboard",
      ]
      
    return (
        <header className="w-full backdrop-blur-md shadow-2xs">
            <div className="py-8 px-10 flex items-center">
                <p className="font-[500]">Brain Center</p>
                <nav className="flex-1 flex items-center justify-center space-x-32">
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