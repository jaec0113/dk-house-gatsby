import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <div className="navList">
        <Link to="#">Reserve</Link>
        <Link to="#">OR Bada</Link>
        <Link to="#">TR Jeongwon</Link>
        <Link to="#">SR Jeongwon</Link>
        <Link to="#">Facilities</Link>
        <Link to="#">Nearby</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Rates</Link>
        <Link to="#">Contact Us</Link>
      </div>
    </nav>
  )
}
