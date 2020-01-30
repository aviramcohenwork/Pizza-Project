import React from 'react';
import Backend from '../../pictures/BackEndMicroServiceDiagram.pdf'
import PdfFrontend from '../../pictures/FrontEndDiagram.pdf'

class PizzeriaInformationComponent extends React.Component
{
    render()
    {
        return(
            <div>
            <object width="100%" height="800" data={Backend} type="application/pdf"></object>
            <object width="100%" height="800" data={PdfFrontend} type="application/pdf"></object>
            </div>
        )
    }
}

export default PizzeriaInformationComponent;