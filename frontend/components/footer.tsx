export default function Footer() {
    return (
        <footer className="w-full bg-white border-t">
            <div className="max-w-7xl mx-auto pt-48 py-14 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 text-gray-700">
                                {/* About */}
                                <div>
                    <h5 className="text-xl font-semibold mb-4">About Brain Center</h5>
                    <p className="text-xs">
                        Brain Center is an online education platform offering top-notch English and IT courses.
                        We empower learners of all levels to grow their skills and achieve their goals through expert instruction and engaging lessons.
                    </p>
                </div>

                {/* Contacts */}
                <div>
                    <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
                    <p>Email: <a href="mailto:support@braincenter.com" >support@braincenter.com</a></p>
                    <p>Phone: +996 999 999 999</p>
                    <p>Location: st. Ivanovka 101A</p>
                </div>

                {/* Terms of Usage */}
                <div>
                    <h5 className="text-xl font-semibold mb-4">Terms of Usage</h5>
                    <ul className="space-y-2">
                        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
                    <ul className="space-y-2">
                        <li><a href="/courses" className="hover:underline">Courses</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 py-12 border-t mt-5">
                &copy; {new Date().getFullYear()} Brain Center. All rights reserved.
            </div>
        </footer>
    );
}
