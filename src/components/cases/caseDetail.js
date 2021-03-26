import React, {useState, useContext} from 'react';

// getCaseDetail

const CaseForm = () => {
    const [casee, setCase] =useState({
        name:'',
        legacy_id: '',
        expiring_date:'',
        // documents: undefined,
        // previewImages: [],
        // message: [],

    });
    const onChange = e =>
    setCase({
        ...casee, [e.target.name]:e.target.value
        
    })  

    // const selectFiles = (e)  => {
    //     let images = [];
    
    //     for (let i = 0; i < e.target.files.length; i++) {
    //       images.push(URL.createObjectURL(e.target.files[i]))
    //     }
    //     setCase({
    //         message: [],
    //         documents: e.target.files,
    //         previewImages: images
    //       });
    // }
    const onSumbit = e =>{
        e.preventDefault();

        setCase({
            name:'',
            legacy_id: '',
            expiring_date:'',
            // documents: undefined,
            // previewImages: [],
            // message: [],
        })
        console.log(casee);
        
    }
    // const { name, legacy_id, expiring_date, selectdocumentsedFiles, previewImages, message} = casee;
    const { name, legacy_id, expiring_date} = casee;
    return (
        <form onSumbit={onSumbit} className="pt-5">
            <h2 className="text-dark">Add Case</h2>
            <div class="form-group">
            <input
            className="form-control" 
                type="text"
                placeholder='name'
                name='name'
                value={name}
                onChange={onChange}

            />
            </div>
            <div class="form-group">
            <input
            className="form-control" 
                type="text"
                placeholder='Legacy Id'
                name='legacy_id'
                value={legacy_id}
                onChange={onChange}
                
            />
            </div>
            
            <div class="form-group">

            <input
            className="form-control" 
                type="text"
                placeholder='Expiry Date'
                name='expiring_date'
                value={expiring_date}
                onChange={onChange}
                
            />
            </div>

            {/* <div class="form-group">
            <input
            className="form-" 
            type="file" 
            multiple accept="image/*" 
            onChange={selectFiles} />
            </div> */}

            <div class="form-group">
            <input
            className="btn btn-dark btn-sm form-control" 
            type="submit" 
           
            value='Submit Case' />
            </div>
        </form>
    )
}

export default CaseForm
