import React from "react"
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaTwitter></FaTwitter>,
    url: "https://twitter.com/sammie_norton",
  },
  {
    id: 2,
    icon: <FaLinkedin></FaLinkedin>,
    url: "https://www.linkedin.com/in/samuel-norton-67859a56/",
  },
  {
    id: 3,
    icon: <FaGithub></FaGithub>,
    url: "https://github.com/samnorton",
  },
  {
    id: 4,
    icon: <FaEnvelope></FaEnvelope>,
    url: "mailto:samuelnico.norton@gmail.com",
  }
]


const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default () => {
  return (
    <ul>{links}</ul>
  )
}
