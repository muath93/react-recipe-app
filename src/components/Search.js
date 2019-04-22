import React from 'react'

export default function Search(props) {
    const { handelChange, handelSubmit, search } = props;
    return (
        <div className='container'>
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className='text-slanted text-capitalize'>
                    search recipes with {' '} <strong className='text-orange'>Food2Foek</strong></h1>
                <form className='mt-4'>
                    <label htmlFor="search" className='text-capitalize'>
                        types recipes seperated by comma...
                    </label>
                    <div className='input-group'>
                        <input
                            type="text"
                            name='search'
                            className='form-control form-control-lg'
                            placeholder='chicken,onion,carrots'
                            value={search}
                            onChange={handelChange} />
                        <div className="input-group-append">
                            <button
                                type='submit'
                                className='input-group-text bg-primary text-white'
                                onClick={handelSubmit}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
