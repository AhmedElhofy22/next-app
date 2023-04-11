import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={classes.header}>
    <div className={classes.logo}>Mundial's Stadiums</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Stadiums</Link>
        </li>
        <li>
          <Link to='/new-stadium'>Add New Stadium</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default NavBar
