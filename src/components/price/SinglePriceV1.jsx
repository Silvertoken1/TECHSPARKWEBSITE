import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePriceV1 = ({ price }) => {
    const { cardClass, itemClass, planName, planPrice, planType, planText, btnLink, btnText, btnClass, checkList1, checkList2, checkList3, checkList4, checkListIcon } = price

    return (
        <>
            <div className={`pricing-style-one ${cardClass ? cardClass : ""} col-md-6`}>
                <div className={`item ${itemClass ? itemClass : ""}`}>
                    <div className="pricing-header">
                       
                       
                    </div>
                    <div className="pricing-info">
                        <ul>
                            <li><i className={checkListIcon}></i> {checkList1}</li>
                            <li><i className={checkListIcon}></i> {checkList2}</li>
                            <li><i className={checkListIcon}></i> {checkList3}</li>
                            <li><i className={checkListIcon}></i> {checkList4}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePriceV1;