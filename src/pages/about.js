import * as React from "react"
import { Link } from "gatsby"


const AboutPage = () => (
  <div className="container  my-5">
    <div className="container">
      <h1 >What you need to know</h1>
      <p>
        <ul>
          <li>Bootstrap 5 support with SASS</li>
          <li>Customize theme via <span className="font-monospace ">layout.scss</span></li>
          <li>If any issue report to <a href="https://github.com/r-ichard/gatsby-starter-bootstrap-5" target="_blank" rel="noopener noreferrer">Github Repo</a></li>
        </ul>
      </p>
      <p>Created by <a href="https://github.com/r-ichard" target="_blank" rel="noopener noreferrer">Richard Raduly</a></p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
