import React from 'react';
import Pdf from '../../pictures/BackEndMicroServiceDiagram.pdf'

class PizzeriaInformationComponent extends React.Component
{
    render()
    {
        return(
            <div>
            <object width="100%" height="800" data={Pdf} type="application/pdf"></object>
            </div>
        )
    }
}

export default PizzeriaInformationComponent;