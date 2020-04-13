import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import icon_github from '../images/icon-github.svg'
import icon_instagram from '../images/icon-instagram.svg'
import icon_twitter from '../images/icon-twitter.svg'
import icon_pintarest from '../images/icon-pinterest-circle.svg'

const IndexPage = () => (
  <Layout>
    <div className="l-container">
      <div class="v-block">UIdeveloper</div>
      <div class="h-block">Hana<br/>Tokumoto</div>

      <SEO title="Home" />
      <img src={icon_github} alt="icon github" style={{ width: '20px', margin: '0 auto 20px' }} />
      <img src={icon_instagram} alt="icon instagram" style={{ width: '20px', margin: '0 auto 20px' }} />
      <img src={icon_twitter} alt="icon twitter" style={{ width: '20px', margin: '0 auto 20px' }} />
      <img src={icon_pintarest} alt="icon twitter" style={{ width: '20px', margin: '0 auto 20px' }} />

      <div className="main-image" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </div>
  </Layout>
)

export default IndexPage
