import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import ContactContext from '../../context/contact/contactContext';
import './Case.css';
const CasesItem = ({ casee }) => {
  // const contactContext = useContext(ContactContext);
  const { id, name, legacy_id ,expiry_date, casee_status, user_incharge} = casee;


  return (
    
        <div className="pt-1">

          
          <div class="card login-box">
          <div class="card-body">
            <p class="card-title"><i class="fas fa-file-signature pr-2"></i><strong>Case Name:</strong>{name}</p>
            <p><i class="fas fa-passport pr-2"></i><strong>Legacy ID:</strong>{legacy_id}</p>
            <p><i class="fas fa-calendar-week pr-2"></i><strong>Expiry :</strong>{expiry_date}</p>
            <p><i class="fas fa-minus-circle"></i><strong>Case Status :</strong>{casee_status.toLowerCase()}</p>
        </div>
        <p class="text-center">
          <button class='btn btn-dark btn-sm'> Change status </button>
        </p>   
          </div>
        </div>

);
  }


CasesItem.propTypes = {
  casee: PropTypes.object.isRequired
};

export default CasesItem;