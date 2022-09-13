import React, { CSSProperties, useEffect, useState } from 'react'
import { getJoke } from '../Http/client'
import Loader from '../Loader'
import Button from '../Button'

const textStyle: CSSProperties = {
  color: '#FFF',
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
  backgroundColor: '#282c34',
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

const Joke = (): JSX.Element => {
  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showWarning, setShowWarning] = useState(true)
  const [isActiveContinue, setIsActiveContinue] = useState(false)
  const [isActiveClose, setIsActiveClose] = useState(false)

  const generate = async () => {
    setIsLoading(true)
    const response = await getJoke()
    const { data } = response
    const { joke } = data[0]
    setJoke(joke)
    setIsLoading(false)
  }

  const continueModal = async () => {
    setShowWarning(false)
    setIsLoading(true)
    const response = await getJoke()
    const { data } = response
    const { joke } = data[0]
    setJoke(joke)
    setIsLoading(false)
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

  return (
    <div>
      {showWarning && (
        <div style={modalStyle}>
          <div style={modalContent}>
            <p style={{ margin: '5px' }}>
              <b>Warning:</b> The content you are about to see could include
              offensive, rude, and derogatory jokes. Are you sure you want to
              continue?
            </p>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: isActiveContinue ? '#414754' : '#313640'
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
                backgroundColor: isActiveClose ? '#414754' : '#313640'
              }}
              onClick={closeModal}
              onMouseEnter={enterCloseButton}
              onMouseLeave={leaveCloseButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <p style={textStyle}>{joke}</p>
      <Button title='Generate new' onClick={generate} />
    </div>
  )
}

export default Joke
