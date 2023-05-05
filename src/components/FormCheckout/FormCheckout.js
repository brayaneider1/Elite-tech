import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  UilUser,
  UilPostcard,
  UilAt,
  UilMobileAndroid,
  UilMapMarkerAlt,
  UilHouseUser,
} from "@iconscout/react-unicons"
import NequiImg from "../../imgs/nequi.png"
import BancolombiaImg from "../../imgs/bancolombia.png"
import ReactWhatsapp from "react-whatsapp"

export const FormCheckout = ({ cart }) => {
  console.log("🚀 ~ file: FormCheckout.js:16 ~ FormCheckout ~ cart:", cart)
  const form = useForm({
    mode: "onChange", // I want to change it to onBlur
  })

  const { register, handleSubmit, formState, watch } = form
  const { isValid, errors, isDirty } = formState

  const [showPayment, setShowPayment] = useState(false)
  const [Data, setDataForm] = useState()

  const onSubmit = data => {
    setShowPayment(true)
    setDataForm(data)
  }

  return (
    <div className="form-checkout">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <span>Datos de envío </span>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-style"
                      placeholder="Cédula"
                      id="logemail"
                      autocomplete="off"
                      {...register("cedula", { required: true })}
                    />
                    <UilPostcard className="input-icon uil uil-at" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-style"
                      placeholder="Nombre completo"
                      id="logemail"
                      autocomplete="off"
                      required
                      {...register("names", { required: true })}
                    />
                    <UilUser className="input-icon uil uil-at" />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-style"
                      placeholder="Correo electronico"
                      id="logemail"
                      autocomplete="off"
                      required
                      {...register("email", { required: true })}
                    />
                    <UilAt className="input-icon uil uil-at" />
                  </div>

                  <div className="form-group">
                    <input
                      type="number"
                      className="form-style"
                      placeholder="Número de contacto"
                      id="logemail"
                      autocomplete="off"
                      required
                      {...register("phone", { required: true })}
                    />
                    <UilMobileAndroid className="input-icon uil uil-at" />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-style"
                      placeholder="Ciudad o municipio"
                      id="logemail"
                      autocomplete="off"
                      required
                      {...register("location", { required: true })}
                    />
                    <UilMapMarkerAlt className="input-icon uil uil-at" />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-style"
                      placeholder="Dirección de entrega"
                      id="logemail"
                      autocomplete="off"
                      required
                      {...register("direction", { required: true })}
                    />
                    <UilHouseUser className="input-icon uil uil-at" />
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid}
                    className="button_log"
                  >
                    Medios de pago
                  </button>
                </form>
                {/*    <div className="switch-payment">
                  <div className="nequi">Nequi </div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label for="reg-log"></label>
                  <div className="bancolombia"> Bancolombia </div>
                </div> */}

                {showPayment && (
                  <div>
                    <span>
                      Aquí tienes nuestras cuentas bancarias para que realices
                      el deposito
                    </span>

                    <div className="switch-payment">
                      <div className="card-3d-wrap mx-auto mr-5">
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="center-wrap">
                              <span className="title-payment">Nequi </span>
                              <img src={NequiImg} />
                              <span className="description-payment">
                                Cuenta
                              </span>
                              <p> 3175607784 </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-3d-wrap mx-auto">
                        <div className="card-3d-wrapper">
                          <div className="card-front">
                            <div className="center-wrap">
                              <span className="title-payment">Nequi </span>
                              <img src={BancolombiaImg} />
                              <span className="description-payment">
                                Cuenta
                              </span>
                              <p> 4558265659865 </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="contaner-submit">
                      <span>
                        Una vez realizado el deposito es necesario que nos
                        envies un mensaje con los datos ingresados en este
                        formulario,por favor presiona Enviar
                      </span>

                      <ReactWhatsapp
                      className="wrappper-wp-btn"
                        number="573175607784"
                        message={`Hola Elite,he realizado una compra por el valor de:  *${
                          cart?.subtotal.formatted_with_symbol
                        }* 

                        ---------------Detalle de compra------------
                        ${cart?.line_items?.map(
                          item =>
                            "*" +
                            item.name +
                            "*" +
                            ": " +
                            item?.quantity +
                            " Unidades\n"
                        )}
                        
                        ---------------Datos para envio-------------
                        *Cedula*:  ${Data.cedula}
                        *Nombres*: ${Data.names}
                        *Correo electónico*: ${Data.email}
                        *Contacto*: ${Data.phone}
                        *Municipio*: ${Data.location}
                        *Dirección*: ${Data.direction}
                        `}
                      >
                        <button className="submit-checkout">Enviar</button>
                      </ReactWhatsapp>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
