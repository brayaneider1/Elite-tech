import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Notification = ({notifications}) => {
  console.log("🚀 ~ file: Notification.js:5 ~ Notification ~ notifications:", notifications)
  return (
    <ul>
        <AnimatePresence initial={false}>
          {notifications.map((e, i) => (
              <motion.li
              key={i}
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
              <img src={e.img} alt="" srcset="" width="50px"/>
              <p>Añadiendo Producto:<br/><p>{e.id}</p></p>
              
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
  )
}

export default Notification