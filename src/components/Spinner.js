import React from 'react';
import { Puff } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <>
            <div className="loader">
                <Puff
                    height="60"
                    width="60"
                    radius={1}
                    color="#18b498"
                    ariaLabel="puff-loading"
                    visible={true}
                />
            </div>
        </>
    )
}

export default Spinner
