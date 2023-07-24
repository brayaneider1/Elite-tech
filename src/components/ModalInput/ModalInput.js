import React, { useState, useRef, useEffect } from "react"
import "./ModalInput.scss"
import { InputComponent } from "../InputComponent/InputComponent"
import { FaSearch } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"

export const ModalInput = ({ products }) => {
  console.log("🚀 ~ file: ModalInput.js:9 ~ ModalInput ~ products:", products)
  const [showModal, setShowModal] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const inputRef = useRef(null)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredResults = products.nodes.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    )
    setSearchResults(filteredResults)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        closeModal()
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div key="1" className="input-container">
      <div className="input-icon" onClick={openModal} ref={inputRef}>
        <InputComponent key="Input-first" />
      </div>
      <div onClick={openModal} ref={inputRef} className="search-icon">
        <FaSearch />
      </div>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <InputComponent key="input-search" onChange={handleSearch} />
            {searchResults.length !== 0 ? (
              <ul className="search-results">
                {searchResults.map(({ id, name, image }) => (
                  <li onClick={() => navigate(`/product/${id}/`)} key={id}>
                    <img src={image.url} alt={name} />
                    {name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
