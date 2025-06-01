import ChefIcon from "../images/chef-icon.png"

export default function Header (){
  return (
      <header className="header">
        <img src={ChefIcon} alt="chef-icon" />
        <h1>Chef Phoenix</h1>
      </header>
  )
}