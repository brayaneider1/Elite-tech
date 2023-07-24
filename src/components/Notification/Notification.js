import { AnimatePresence, motion } from "framer-motion"
import React from "react"

const Notification = ({ notifications }) => {
  return (
    <div className="notification">
      <ul className="notification-list">
        <AnimatePresence initial={false}>
          {notifications.map((e, i) => (
            <motion.li
              key={i}
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className="notification-item"
            >
              <div className="notification-image-container">
                <img src={e.img} alt="" className="notification-image" />
              </div>
              <div className="notification-text">
                <p className="notification-title">Añadiendo Producto:</p>
                <p className="notification-id">{e.id}</p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default Notification;
