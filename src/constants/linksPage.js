import React from "react"
import { Link } from 'gatsby'

const data = [
  {
    id: 1,
    text: "Home",
    div: "home",
    url: "/#home"
  },
  {
    id: 2,
    text: "About",
    div: "about",
    url: "/#about"
  },
  {
    id: 3,
    text: "Works",
    div: "works",
    url: "/#works"
  },
  {
    id: 4,
    text: "Services",
    div: "services",
    url: "/#services"
  },
  {
    id: 5,
    text: "Blogs",
    div: "blogs",
    url: "/#blogs",
  },
  {
    id: 6,
    text: "Contact",
    div: "contact",
    url: "/#contact"
  },
]


export default () => {
  return (
      <div className="navbar-nav ml-auto">
            {  data.map(link => {
                return (
                        <li className="nav-item" key={link.id}>
                          <Link to={link.url} className="nav-link text-uppercase font-weight-bold">{link.text}</Link>
                        </li>
                    )
              })
          }
      </div>
  )
}
