import React from 'react'

export default function Loading () {
  return (
    <>
      <div className="d-flex justify-content-center w3-animate-opacity" style={{height: '100vh'}}>
      <div className="align-self-center">
        <div className="spinner-grow" role="status" style={{width: '5em', height: '5em', color: '#33BDBE'}}>
        </div>
        <div className="text-center textLoading" style={{ marginLeft: '-30px'}}><h1>Loading...</h1></div>
      </div>
    </div>
    </>
  )
}