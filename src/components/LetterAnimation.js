// import { useAnimationControls,motion } from 'framer-motion'
// import React, { useState } from 'react'

// const LetterAnimation = ({ letterClass, strArray, idx }) => {
//   const controls = useAnimationControls()
//   const [isPlaying, setIsPlaying] = useState(false)


//   const rubberBand = () => {
//     controls.start({
//       transform:[
//         "scale3d(1, 1, 1)", 
//         "scale3d(1.4, 0.55, 1)", 
//         "scale3d(0.75, 1.25, 1)", 
//         "scale3d(0.9, 1.05, 1)", 
//         "scale3d(1, 1, 1)", 
//       ],
//       transition:{        
//         times:[0,0.4,0.6,0.7,0.8,0.9]
//       }
//     })
//     setIsPlaying(true)
//   }

//   return (
//     <span>
//       {strArray.map((char, i) => (
//        <motion.span
//        key={char + i}
//        className={`${letterClass} _${i + idx}`}
//        animate={controls}
//        onMouseOver={() => {
//         setIsPlaying(true)
//          if (isPlaying) {
//            rubberBand();
//          }
//        }}
//        onAnimationComplete={() => {
//          setIsPlaying(false);
//        }}
//      >
//        {char}
//      </motion.span>
//       ))}
//     </span>
//   )
// }

// export default LetterAnimation

const LetterAnimation = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default LetterAnimation