import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"

const links = [
  {
    name: "Podcast with StartupFever",
    link: "https://startupfever.de/lars-groeber/",
  },
  {
    name: "Interview with Citrus Global (Youtube)",
    link: "https://www.youtube.com/watch?v=fXRVv3kRdQ0",
  },
]

const socal = [
  {
    icon: require("../images/linkedin.svg"),
    name: "Linkedin",
    link: "https://www.linkedin.com/in/larsgroeber",
  },
  {
    icon: require("../images/github.svg"),
    name: "github",
    link: "https://github.com/larsgroeber",
  },
  {
    icon: require("../images/twitter.svg"),
    name: "twitter",
    link: "https://twitter.com/GroeberLars",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <h1>Lars Gröber</h1>
      <p className="subtitle">
        CTO & Co-Founder of{" "}
        <a href="https://inheaden.io" target="_blank" rel="noopener noreferrer">
          Inheaden
        </a>
      </p>
      <p className="subtitle">
        Maker of{" "}
        <a href="https://inco.video" target="_blank" rel="noopener noreferrer">
          Inheaden Connect
        </a>
      </p>

      <div className="links">
        {links.map(l => (
          <p key={l.name}>
            <a href={l.link} target="_blank" rel="noopener noreferrer">
              {l.name}
            </a>
          </p>
        ))}
      </div>

      <div
        className="social-media"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${socal.length}, 40px)`,
        }}
      >
        {socal.map(s => (
          <a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={s.icon} alt={s.name} />
          </a>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
