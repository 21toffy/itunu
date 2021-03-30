import React, { useContext } from "react";
import { useAlert } from '../../hooks/useAlert';


const Alerts = () => {
  const { alerts, setAlert } = useAlert();

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <span className="text-white"><i className="fas fa-info-circle" />{" "}{alert.msg}</span>
        
      </div>
    ))
  );
};

export default Alerts;
