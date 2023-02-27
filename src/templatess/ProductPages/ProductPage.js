import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "@gatsbyjs/reach-router"

export default function ProductPage({ data: { product } }) {
  console.log("🚀 ~ file: ProductPage.js:7 ~ ProductPage ~ data:", product)
  const {
    description,
    id,
    image: { url },
    name,
    price: { formatted_with_symbol },
  } = product

  return (
    <Layout>
      <main class="main">
        <div class="productCard_block">
          <div class="productCard_block_image">
            <div class="productCard_leftSide clearfix">
              <div class="sliderBlock">
                <ul class="sliderBlock_items">
                  <img
                    src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones1.png?raw=true"
                    alt="headphones"
                  />
                </ul>

                <div class="sliderBlock_controls">
                  <div class="sliderBlock_controls__navigatin">
                    <div class="sliderBlock_controls__wrapper">
                      <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                      </div>
                      <div class="sliderBlock_controls__arrow sliderBlock_controls__arrowForward">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="productCard_block_info">
            <div class="productCard_rightSide">
              <div class="block_specification">
                <div class="block_specification__specificationShow">
                  <i
                    class="fa fa-cog block_specification__button block_specification__button__rotate"
                    aria-hidden="true"
                  ></i>
                  <span class="block_specification__text">spec</span>
                </div>
                <div class="block_specification__informationShow hide">
                  <i
                    class="fa fa-info-circle block_specification__button block_specification__button__jump"
                    aria-hidden="true"
                  ></i>
                  <span class="block_specification__text">inform</span>
                </div>
              </div>

              <p class="block_model">
                <span class="block_model__text">Model: </span>
                <span class="block_model__number">505795</span>
              </p>

              <div class="block_product">
                <h2 class="block_name block_name__mainName">
                  MOMENTUM<sup>&reg; </sup>
                </h2>
                <h2 class="block_name block_name__addName">Wireless Black</h2>

                <p class="block_product__advantagesProduct">
                  Wireless headphones with integrated microphone
                </p>

                <div class="block_informationAboutDevice">
                  <div class="block_descriptionCharacteristic block_descriptionCharacteristic__disActive">
                    <table class="block_specificationInformation_table">
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
                  </div>

                  <div class="block_descriptionInformation">
                    <span>
                      Peak performance with active noise cancelation.
                      Sennheiser's new MOMENTUM Wireless - Closed
                      circumauralheadphone featuring
                      <a class="block_product__link" href="#">
                        Bluetooth<sup>&reg;</sup>
                      </a>
                      wireless technology and NoiseGard Hybrid active noise
                      cancelation
                    </span>
                  </div>

                  <div class="row">
                    <div class="row_price">
                      <div class="block_price">
                        <p class="block_price__currency">$499.95</p>
                        <p class="block_price__shipping">
                          Shipping and taxes extra
                        </p>
                      </div>
                      <div class="block_goodColor">
                        <span class="text_specification">
                          Choose your colors:
                        </span>
                        <div class="block_goodColor__allColors">
                          <input
                            type="radio"
                            name="colorOfItem"
                            class="radio_button"
                            id="radioColor"
                            checked
                          />
                          <label
                            for="radioColor"
                            class="block_goodColor__radio block_goodColor__black"
                          ></label>
                          <input
                            type="radio"
                            name="colorOfItem"
                            class="radio_button"
                            id="radioColor2"
                          />
                          <label
                            for="radioColor2"
                            class="block_goodColor__radio block_goodColor__silver"
                          ></label>
                        </div>
                      </div>
                    </div>

                    <div class="row_quantity">
                      <div class="block_quantity">
                        <div class="block_quantity__chooseBlock">
                          <span class="text_specification">Quantity</span>
                          <input
                            class="block_quantity__number"
                            name="quantityNumber"
                            type="text"
                            min="1"
                            value="1"
                          />
                          <button class="block_quantity__button block_quantity__up"></button>
                          <button class="block_quantity__button block_quantity__down"></button>
                        </div>
                        <button class="button button_addToCard">
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
