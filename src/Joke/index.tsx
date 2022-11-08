import React, { CSSProperties, useContext, useEffect, useState } from 'react'
import Loader from '../Loader'
import Button from '../Button'
import useFetch from '../Hooks'
import { BackgroundContext } from '../Contexts'

const textStyle: CSSProperties = {
  color: 'white',
  fontSize: '42px'
}

const modalStyle: CSSProperties = {
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: '#000',
  opacity: 0.9
}

const modalContent: CSSProperties = {
  margin: '15% auto',
  padding: '20px',
  border: '1px solid #888',
  width: '65%'
}

const buttonStyle: CSSProperties = {
  cursor: 'pointer',
  margin: '10px',
  padding: '10px',
  color: 'white',
  backgroundColor: '#282c34',
  fontSize: '24px',
  borderRadius: '25px',
  borderColor: 'white'
}

const Joke = () => {
  const backgroundColor = useContext(BackgroundContext)
  const [data, isLoading, refresh] = useFetch('/v1/jokes')

  const [showWarning, setShowWarning] = useState(true)
  const [isActiveContinue, setIsActiveContinue] = useState(false)
  const [isActiveClose, setIsActiveClose] = useState(false)

  const generate = async () => {
    refresh({})
  }

  const continueModal = async () => {
    setShowWarning(false)
  }

  const closeModal = () => {
    setShowWarning(false)
  }

  const enterContinueButton = () => {
    setIsActiveContinue(true)
  }

  const leaveContinueButton = () => {
    setIsActiveContinue(false)
  }

  const enterCloseButton = () => {
    setIsActiveClose(true)
  }

  const leaveCloseButton = () => {
    setIsActiveClose(false)
  }

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return null
  }

  const { joke } = data[0] || {}

  return (
    <div>
      {showWarning ? (
        <div style={modalStyle}>
          <div style={{ ...modalContent, backgroundColor }}>
            <p style={{ margin: '5px' }}>
              <b>Warning:</b> The content you are about to see may include
              offensive, rude, and derogatory jokes. Are you sure you want to
              continue?
            </p>
            <button
              style={{
                ...buttonStyle,
                backgroundColor
              }}
              onClick={continueModal}
              onMouseEnter={enterContinueButton}
              onMouseLeave={leaveContinueButton}
            >
              Continue
            </button>
            <button
              style={{
                ...buttonStyle,
                backgroundColor
              }}
              onClick={closeModal}
              onMouseEnter={enterCloseButton}
              onMouseLeave={leaveCloseButton}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <>
          <p style={textStyle}>{joke}</p>
          <Button title='Generate new' onClick={generate} />
        </>
      )}
    </div>
  )
}

export default Joke
