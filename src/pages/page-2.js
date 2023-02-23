import * as React from "react"
import { Link } from "gatsby"


const SecondPage = () => (
  <div className="container text-center my-5">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage

export const Head = () => (
  <div title="Page two" >Div</div>
)












