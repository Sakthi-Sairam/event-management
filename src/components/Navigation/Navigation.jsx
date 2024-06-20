import { Link } from "react-router-dom"
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">All Events</Link>
            </li>
            <li>
                <Link to="/find-events">Filter</Link>
            </li>
            <li>
                <Link to="/add-event">Add</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation