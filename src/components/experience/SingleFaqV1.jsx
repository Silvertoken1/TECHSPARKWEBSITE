import React from 'react';

const SingleFaqV1 = ({ faq }) => {
    const { 
        accordionId, 
        collapsedClass, 
        dataTarget, 
        ariaExpanded, 
        ariaControls, 
        title, 
        collapseShow, 
        text, 
        firstText, 
        firstSpanText, 
        firstSpanDescription,
        secondSpanText,
        secondSpanDescription,
        thirdSpanText,
        thirdSpanDescription,
        fourthSpanText,
        fourthSpanDescription,
        secondText 
    } = faq

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={accordionId}>
                    <button className={`accordion-button ${collapsedClass}`} style={{ color: "white"}} type="button" data-bs-toggle="collapse" data-bs-target={dataTarget} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
                        {title}
                    </button>
                </h2>
                <div id={ariaControls} className={`accordion-collapse collapse ${collapseShow}`} aria-labelledby={accordionId} data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        <p>{text}</p>
                        <p>{firstText}</p>
                        <ol className="visible-decimal-list">
                            <li style={{ marginBottom: '10px' }}><span className='fw-bold'>{firstSpanText}</span>{firstSpanDescription}</li>
                            <li style={{ marginBottom: '10px' }}><span className='fw-bold'>{secondSpanText}</span>{secondSpanDescription}</li>
                            <li style={{ marginBottom: '10px' }}><span className='fw-bold'>{thirdSpanText}</span>{thirdSpanDescription}</li>
                            <li style={{ marginBottom: '10px' }}><span className='fw-bold'>{fourthSpanText}</span>{fourthSpanDescription}</li>
                        </ol>
                        <p>{secondText}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFaqV1;