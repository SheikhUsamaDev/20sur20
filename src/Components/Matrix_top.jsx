import React from 'react'
import { Button } from 'react-bootstrap'
import { BsChatLeftTextFill } from 'react-icons/bs'
import { MdInsertPhoto, MdSegment, } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Matrix_top() {
  return (
    <div className="flex-box-3">
    <div className="Box">
      <h1>ENTER_The_MATRIX</h1>
    </div>
    <div className="flex-box-5">
      <div>
        <p className='d-none'>
          <Link to={'/matrix'} className="btn-5">
            {" "}
            <BsChatLeftTextFill/>  CHAT
          </Link>
        </p>
      </div>
      <div>
        <p>
          <Link to={'/text-image'} className="btn-5">
           
            <MdInsertPhoto fontSize="16px" className='me-1'/> MATRICE D'IMAGE
          </Link>
        </p>
       
      </div>
      <div>
      <p>
          <Link to={'/chat'} className="btn-5 active">
            {" "}
            <MdSegment fontSize="16px" className='me-1'/> MATRICE DE CHAT
        
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}
