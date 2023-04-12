import classes from './NavBar.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header className={classes.header}>
    <div className={classes.logo}>Mundial's Stadiums</div>
    <nav>
      <ul>
        <li>
          <Link href='/'>All Stadiums</Link>
        </li>
        <li>
          <Link href='/new-stadium'>Add New Stadium</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default NavBar
