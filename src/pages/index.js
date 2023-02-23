import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import Sidebar from '../components/Sidebar';
import { HeaderC } from "../components/Header/Header";



export const pageQuery = graphql`
query mainDashQuery {
  allChecMerchant {
    nodes {
      name
    }
  }
}
`;
const IndexPage = ({ data }) => {
  console.log('data', data)

  return <div className="content-AppGlass">

    <div className="AppGlass">
      <Sidebar />
      <MainDash />
    </div>
  </div>



}




export default IndexPage

