import React, { useContext, useRef, useEffect } from 'react';
// import CaseContext from "../../context/case/provider/";
import { useCase } from "../../hooks";

const Filter = () => {
  const text = useRef("");
  const { filterList, clearFilter, state } = useCase();
  const { filtered } = state;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
      console.log('yesyesyyes')
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterList(e.target.value);
        } else {
      clearFilter();
    }
  };

  return (
    <form className="ml-auto">
      <div class="form-group">
    <label for="exampleInputEmail1">search for for Case</label>

      <input
        ref={text}
        type="text"
        placeholder="Filter Cases..."
        onChange={onChange}
        class="form-control"
      />
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
    </form>
  );
};

export default Filter;
