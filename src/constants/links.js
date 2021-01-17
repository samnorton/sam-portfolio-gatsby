import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const data = [
  {
    id: 1,
    text: "Home",
    url: "/#home",
  },
  {
    id: 2,
    text: "About",
    url: "/#about",
  },
  {
    id: 3,
    text: "Works",
    url: "/#works",
  },
  {
    id: 4,
    text: "Services",
    url: "/#services",
  },
  {
    id: 5,
    text: "Blogs",
    url: "/#blogs",
  },
  {
    id: 6,
    text: "Contact",
    url: "/#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
          <AnchorLink to={link.url}>{link.text}</AnchorLink>
    </li>
  )
})

export default () => {
  return (
    <ul>
      {tempLinks}
    </ul>
  )
}
