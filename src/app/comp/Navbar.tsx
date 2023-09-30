import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container">
                <div className="mx-auto">
                    <Link href="/">TUTDEV</Link>
                </div>
                <div className="mx-auto mt-4">
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
