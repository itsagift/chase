import { Link } from 'gatsby';

function Header(){
return(
  <header className='header'>
    <h1 className='header-title'>Chase Reynolds</h1>
    <nav className='header-links'>
      <Link to="/">
        Home
      </Link>
      <Link to="/blog">
        Blog
      </Link>
      <Link to="#about">
        Projects
      </Link>
    </nav>
  </header>
)
}

export default Header