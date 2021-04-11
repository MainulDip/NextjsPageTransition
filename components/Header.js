import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Seameless <span>Page</span> Transition
      </h1>
      <p className={headerStyles.description}>Smooth Experience</p>
    </div>
  )
}

export default Header
