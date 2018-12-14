import Link from 'next/link'

const Header = () => (
    <header>
        <Link as='home' href='/' >
            <h1>Wooz</h1>
        </Link>
    </header>
)

export default Header
