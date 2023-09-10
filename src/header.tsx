export function Header() {
    return (
        <div className="h-16 flex flex-col justify-center">
            <nav className="flex justify-evenly">
                <a className="text-xl" href="/">
                    Home
                </a>
                <a className="text-xl" href="/projects">
                    Projekte
                </a>
                <a className="text-xl" href="/impressum">
                    Impressum
                </a>
            </nav>
        </div>
    );
}
