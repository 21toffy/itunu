import React, { Fragment, useContext, useEffect } from "react";
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CaseItem from "./CasesItem";
// import Spinner from '../layout/Spinner';

import { useCase } from "../../hooks";

const Cases = () => {
  const {
    state: { cases, loading },
  } = useCase();
  
  return (
    <div className="pt-5">
      <h2 className="text-dark pt-1 textcenter">All Cases</h2>

      {cases.map((casee) => (
        <CaseItem casee={casee} />
      ))}
    </div>
  );
};

export default Cases;
