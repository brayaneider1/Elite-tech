import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown, faArrowDown91, faArrowDownAZ, faArrowUp } from '@fortawesome/free-solid-svg-icons'
export default function ProductPage({ data: { product } }) {
  console.log("🚀 ~ file: ProductPage.js:7 ~ ProductPage ~ data:", product)
  const {
    description,
    id,
    image: { url },
    name,
    price: { formatted_with_symbol },
  } = product

  const recortarString = (strg) => {
    let a = strg.replace("<p>", '');
    let b = a.replace("</p>", "");
    return b;
  }

  return (
    <Layout>
      <main className="main">
        <div className="productCard_block">
          <div className="productCard_block_image">
            <div className="productCard_leftSide clearfix">
              <motion.div
                /* initial={{
                  y: 0,
                }}
                animate={{ y: -60 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                }} */
                className="sliderBlock"
              >
                <ul

                  className="sliderBlock_items"
                >
                  <img
                    src={url}
                    alt="headphones"
                  />
                </ul>

              </motion.div>
              {/* <div className="sliderBlock_controls">
                  <div className="sliderBlock_controls__navigatin">
                    <div className="sliderBlock_controls__wrapper">
                      <div className="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                      </div>
                      <div className="sliderBlock_controls__arrow sliderBlock_controls__arrowForward">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>

          <div className="productCard_block_info">
            <div className="productCard_rightSide">
              <div className="block_specification">
                <div className="block_specification__specificationShow">
                  <i
                    className="fa fa-cog block_specification__button block_specification__button__rotate"
                    aria-hidden="true"
                  ></i>
                  <span className="block_specification__text">spec</span>
                </div>
                <div className="block_specification__informationShow hide">
                  <i
                    className="fa fa-info-circle block_specification__button block_specification__button__jump"
                    aria-hidden="true"
                  ></i>
                  <span className="block_specification__text">inform</span>
                </div>
              </div>

              <p className="block_model">
                <span className="block_model__text">Model: </span>
                <span className="block_model__number">505795</span>
              </p>

              <div className="block_product">
                <h2 className="block_name block_name__mainName">
                  {name}<sup>&reg; </sup>
                </h2>
                <h2 className="block_name block_name__addName">Wireless Black</h2>

                <p className="block_product__advantagesProduct">
                  Wireless headphones with integrated microphone
                </p>

                <div className="block_informationAboutDevice">
                  {/* <div className="block_descriptionCharacteristic block_descriptionCharacteristic__disActive">
                    <table className="block_specificationInformation_table">
                      <tr>
                        <th>Characteristic</th>
                        <th>Value</th>
                      </tr>
                      <tr>
                        <td>Ear Coupling</td>
                        <td>Around Ear</td>
                      </tr>
                      <tr>
                        <td>Transducer Principle</td>
                        <td>Dynamic, Closed-back</td>
                      </tr>
                      <tr>
                        <td>Frequency Response</td>
                        <td>16Hz – 22kHz</td>
                      </tr>
                      <tr>
                        <td>Sound Pressure Level (SPL)</td>
                        <td>113 dB (Passive: 1 kHz/1 Vrms)</td>
                      </tr>
                      <tr>
                        <td>Total Harmonic Distortion (THD)</td>
                        <td>&lt;0.5% (1 kHz, 100 dB SPL)</td>
                      </tr>
                      <tr>
                        <td>Volume Control</td>
                        <td>Earcup control when Bluetooth connected</td>
                      </tr>
                      <tr>
                        <td>Microphone Type</td>
                        <td>
                          Dual omni-directional microphone <br />
                          (2 mic beam forming array)
                        </td>
                      </tr>
                      <tr>
                        <td>Cable / Connector</td>
                        <td>1.4m (Detachable) / 3.5mm Angled</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>260g (9.17 oz)</td>
                      </tr>
                    </table>
                  </div> */}

                  <div className="block_descriptionInformation">
                    <span>
                      {recortarString(description)}
                    </span>
                  </div>

                  <div className="row">
                    <div className="row_price">
                      <div className="block_price">
                        <p className="block_price__currency">{formatted_with_symbol}</p>
                        <p className="block_price__shipping">
                          Shipping and taxes extra
                        </p>
                      </div>
                      <div className="block_goodColor">
                        <span className="text_specification">
                          colores:
                        </span>
                        <div className="block_goodColor__allColors">
                          <input
                            type="radio"
                            name="colorOfItem"
                            className="radio_button"
                            id="radioColor"
                            checked
                          />
                          <label
                            for="radioColor"
                            className="block_goodColor__radio block_goodColor__black"
                          ></label>
                          <input
                            type="radio"
                            name="colorOfItem"
                            className="radio_button"
                            id="radioColor2"
                          />
                          <label
                            for="radioColor2"
                            className="block_goodColor__radio block_goodColor__silver"
                          ></label>
                        </div>
                      </div>
                    </div>

                    <div className="row_quantity">
                      <div className="block_quantity">
                        <div className="block_quantity__chooseBlock">
                          <div classNameName="block_quantity__chooseBlock__quantity">
                            <span className="text_specification">Quantity</span>
                            <input
                              className="block_quantity__number"
                              name="quantityNumber"
                              type="text"
                              min="1"
                              value="1"
                            />
                            <div className="button_arrow">
                              <button><FontAwesomeIcon icon={faArrowUp} color="gray" /> </button>
                              <button><FontAwesomeIcon icon={faArrowDown} color="gray" /></button>
                            </div>
                          </div>
                          <div style={{ display: "flex" }}>
                            <button className="block_quantity__chooseBlock__button">
                              Add to Cart
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    product: checProduct(id: { eq: $id }) {
      name
      image {
        url
      }
      description
      price {
        formatted_with_symbol
      }
      id
    }
  }
`
