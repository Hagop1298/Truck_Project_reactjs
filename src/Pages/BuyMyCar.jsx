import React from "react";
import {useState} from "react";
import emailjs from "emailjs-com";
import {FaEnvelope} from "react-icons/fa";

const BuyMyCar = () => {
    const [formData, setFormData] = useState({
        approvedBy: "",
        pinnacleEntry: "",
        towingFormDone: "",
        eFTProcessed: "",
        cashChq: "",
        date: "",
        purchasedFor: "",
        otherExport: "",
        wOVRLodged: "",
        vehicleReceived: "",
        mVRCreated: "",
        wOVRStatus: "",
        firstName: "",
        lastName: "",
        residentialAddress: "",
        suburb: "",
        state: "",
        officeUseOnlyDate: "",
        pPSRCheckDone: "",
        copyOfRego: "",
        copyOfLicence: "",
        fromCheckedBy: "",
        dateReceived: "",
        name: "",
        enterBankBsb: "",
        enterACno: "",
        sellerDate: "",
        readyonthistime: "",
        readyNow: "",
        pickupTime: "",
        locationOfKey: "",
        phone: "",
        contactPerson: "",
        businessName: "",
        address: "",
        amount: "",
        damageAndFaults: "",
        speedoOdometerReading: "",
        regoNumber: "",
        engineCapacity: "",
        engineNumber: "",
        regoExpiryDate: "",
        vinNumber: "",
        colour: "",
        year: "",
        makeModel: "",
        saleValue: "",
        fax: "",
        email: "",
        expiryDate: "",
        licenseNo: "",
        mobile: "",
        phoneHome: "",
        postcode: "",
        carType: "",
        financeType: "",
        elv: "",
        retain: ""
    });

    const handleChange = (e) => {
        const {name, value, type} = e.target;
        if (type === "radio") {
            setFormData({
                ...formData,
                [name]: value,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
        const carTypeYes = formData.carType ? `${formData.carType}` : '';
        const financeTypeYes = formData.financeType ? `${formData.financeType}` : '';
        const selectedPurchasedType = formData.elv ? `${formData.elv}` : '';
        const selectedOtherExportType = formData.retain ? `${formData.retain}` : '';
        const templateParams = {
            approvedBy: formData.approvedBy,
            pinnacleEntry: formData.pinnacleEntry,
            towingFormDone: formData.towingFormDone,
            eFTProcessed: formData.eFTProcessed,
            cashChq: formData.cashChq,
            date: formData.date,
            purchasedFor: formData.purchasedFor,
            otherExport: formData.otherExport,
            wOVRLodged: formData.wOVRLodged,
            vehicleReceived: formData.vehicleReceived,
            mVRCreated: formData.mVRCreated,
            wOVRStatus: formData.wOVRStatus,
            firstName: formData.firstName,
            lastName: formData.lastName,
            residentialAddress: formData.residentialAddress,
            suburb: formData.suburb,
            state: formData.state,
            officeUseOnlyDate: formData.officeUseOnlyDate,
            pPSRCheckDone: formData.pPSRCheckDone,
            copyOfRego: formData.copyOfRego,
            copyOfLicence: formData.copyOfLicence,
            fromCheckedBy: formData.fromCheckedBy,
            dateReceived: formData.dateReceived,
            name: formData.name,
            enterBankBsb: formData.enterBankBsb,
            enterACno: formData.enterACno,
            sellerDate: formData.sellerDate,
            readyonthistime: formData.readyonthistime,
            readyNow: formData.readyNow,
            pickupTime: formData.pickupTime,
            locationOfKey: formData.locationOfKey,
            phone: formData.phone,
            contactPerson: formData.contactPerson,
            businessName: formData.businessName,
            address: formData.address,
            amount: formData.amount,
            damageAndFaults: formData.damageAndFaults,
            speedoOdometerReading: formData.speedoOdometerReading,
            regoNumber: formData.regoNumber,
            engineCapacity: formData.engineCapacity,
            engineNumber: formData.engineNumber,
            regoExpiryDate: formData.regoExpiryDate,
            vinNumber: formData.vinNumber,
            colour: formData.colour,
            year: formData.year,
            makeModel: formData.makeModel,
            saleValue: formData.saleValue,
            fax: formData.fax,
            email: formData.email,
            expiryDate: formData.expiryDate,
            licenseNo: formData.licenseNo,
            mobile: formData.mobile,
            phoneHome: formData.phoneHome,
            postcode: formData.postcode,
            selectedCarType: carTypeYes,
            selectedFinanceType: financeTypeYes,
            selectedPurchasedType: selectedPurchasedType,
            selectedOtherExportType: selectedOtherExportType

        };

        emailjs
            .send(
                "service_jvncx2v",
                "template_shssevp",
                templateParams,
                "PdDZjNPwGentfmflT"
            )
            .then((response) => {
                alert("Email sent successfully!");
            })
            .catch((error) => {
                console.log("FAILED...", error);
                alert("Failed to send email.");
            });
    };

    return (
        <div className="container py-5">
            <h1
                className="text-center mb-4"
                style={{color: "#184671", fontWeight: "700"}}
            >
                Buy my car
            </h1>
            <form onSubmit={sendEmail}>
                <div
                    className="mb-4"
                    style={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "4px",
                        backgroundColor: "#F9FAFB",
                    }}
                >
                    <div className="row align-items-center" style={{padding: "10px"}}>
                        <div className="col-md-3">
                            <p
                                style={{
                                    color: "#184374",
                                    fontWeight: "700",
                                    fontSize: "24px",
                                    margin: "0",
                                }}
                            >
                                SELLER DETAILS
                            </p>
                        </div>
                        <div className="col-md-6 d-flex ">
                            <p style={{color: "#6B7280", margin: "0"}}>
                                Care: Form to be completed by the registered owner of the
                                vehicle
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="name"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"

                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="lastName"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"

                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="residentialAddress"
                        className="form-label"
                        style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}
                    >
                        Residential address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="residentialAddress"
                        name="residentialAddress"

                        value={formData.residentialAddress}
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="suburb"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Suburb
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="suburb"
                            name="suburb"

                            value={formData.suburb}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="state"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            State
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            name="state"

                            value={formData.state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="postcode"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Postcode
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="postcode"
                            name="postcode"

                            value={formData.postcode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <p style={{fontSize: "24px", fontWeight: "700", color: "#184374"}}>
                        Contact Details:
                    </p>
                    <div className="col-md-6">
                        <label
                            htmlFor="phoneHome"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Phone-Home
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneHome"
                            name="phoneHome"

                            value={formData.phoneHome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="mobile"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Mobile
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="mobile"
                            name="mobile"

                            value={formData.mobile}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="licenseNo"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Seller's Driver License No:
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="licenseNo"
                            name="licenseNo"

                            value={formData.licenseNo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="expiryDate"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            License Expiry Date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="email"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"

                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="fax"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Fax
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fax"
                            name="fax"

                            value={formData.fax}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="saleValue"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Agreed Sale Value: $
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="saleValue"
                            name="saleValue"

                            value={formData.saleValue}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "400",
                                marginTop: "42px",
                                color: "#6B7280",
                            }}
                        >
                            (Price agreed to sale the vehicle based on description provided).
                        </p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div
                        style={{
                            border: "1px solid #E5E7EB",
                            borderRadius: "4px",
                            backgroundColor: "#F9FAFB",
                        }}
                    >
                        <div className="row align-items-center" style={{padding: "10px"}}>
                            <div className="col-md-3">
                                <p
                                    style={{
                                        color: "#184374",
                                        fontWeight: "700",
                                        fontSize: "24px",
                                        margin: "0",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Vehicle Details
                                </p>
                            </div>
                            <div className="col-md-6 d-flex ">
                                <p style={{color: "#6B7280", margin: "0"}}>
                                    Note: (Every field in the whole form needs to be completed).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="makeModel"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Make & Model:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="makeModel"
                            name="makeModel"

                            value={formData.makeModel}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="year"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Year:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="year"
                            name="year"

                            value={formData.year}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="colour"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Colour:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="colour"
                            name="colour"

                            value={formData.colour}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="vinNumber"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Vin Number:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="vinNumber"
                            name="vinNumber"

                            value={formData.vinNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="regoExpiryDate"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Rego Expiry Date:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="regoExpiryDate"
                            name="regoExpiryDate"

                            value={formData.regoExpiryDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="engineNumber"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Engine Number:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="engineNumber"
                            name="engineNumber"

                            value={formData.engineNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="engineCapacity"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Engine Capacity:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="engineCapacity"
                            name="engineCapacity"

                            value={formData.engineCapacity}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="regoNumber"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Rego Number:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="regoNumber"
                            name="regoNumber"

                            value={formData.regoNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="speedoOdometerReading"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Speedo / Odometer Reading:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="speedoOdometerReading"
                            name="speedoOdometerReading"

                            value={formData.speedoOdometerReading}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mt-4 mb-3">
                    <div className="mb-3">
                        <label
                            className="form-label"
                            style={{
                                fontWeight: "600",
                                fontSize: "20px",
                                color: "#184371",
                            }}
                        >
                            Body Shape:
                        </label>
                        <div
                            style={{
                                fontWeight: "500",
                                fontSize: "18px",
                                color: "#184371",
                            }}
                        >
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="carType"
                                    id="hatch"
                                    value="Hatch"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="hatch">
                                    Hatch
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="carType"
                                    id="sedan"
                                    value="Sedan"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="sedan">
                                    Sedan
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="carType"
                                    id="wagon"
                                    value="Wagon"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="wagon">
                                    Wagon
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="carType"
                                    id="coupe"
                                    value="Coupe"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="coupe">
                                    Coupe/2VDR
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="carType"
                                    id="van"
                                    value="Van"
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="van">
                                    Coupe/2VDR
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label"
                            style={{
                                fontWeight: "600",
                                fontSize: "20px",
                                color: "#184371",
                            }}
                        >
                            Damage & Faults
                        </label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Describe any damage or faults"
                            name="damageAndFaults"
                            value={formData.damageAndFaults}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label"
                            style={{
                                fontWeight: "600",
                                fontSize: "20px",
                                color: "#184371",
                            }}
                        >
                            Is there any finance owing on the vehicle?
                        </label>
                        <div
                            style={{
                                fontWeight: "500",
                                fontSize: "18px",
                                color: "#184371",
                            }}
                        >
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="financeType"
                                    id="yesFinance"
                                    value='yesFinance'
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="yesFinance">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="financeType"
                                    id="noFinance"
                                    value='noFinance'
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="noFinance">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label"
                            style={{
                                fontWeight: "600",
                                fontSize: "20px",
                                color: "#184371",
                            }}
                        >
                            Amount $
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter amount"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div
                        style={{
                            border: "1px solid #E5E7EB",
                            borderRadius: "4px",
                            backgroundColor: "#F9FAFB",
                        }}
                    >
                        <div className="row align-items-center" style={{padding: "10px"}}>
                            <div className="col-md-4">
                                <p
                                    style={{
                                        color: "#184374",
                                        fontWeight: "700",
                                        fontSize: "24px",
                                        margin: "0",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Pick up address & Details
                                </p>
                            </div>
                            <div className="col-md-6 d-flex ">
                                <p style={{color: "#6B7280", margin: "0"}}>
                                    (Note as above if same).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="address"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Address:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="businessName"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Business Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="businessName"
                            name="businessName"

                            value={formData.businessName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label
                            htmlFor="contactPerson"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Contact Person::
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="contactPerson"
                            name="contactPerson"

                            value={formData.contactPerson}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="phone"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Phone:
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"

                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label
                            htmlFor="locationOfKey"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Location Of Key:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="locationOfKey"
                            name="locationOfKey"

                            value={formData.locationOfKey}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="pickupTime"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Pickup Time:
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="pickupTime"
                            name="pickupTime"

                            value={formData.pickupTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="readyNow"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Ready Now:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="readyNow"
                            name="readyNow"

                            value={formData.readyNow}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="readyonthistime"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Ready on this date/time:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="readyonthistime"
                            name="readyonthistime"

                            value={formData.readyonthistime}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="mb-3">
                        <h5
                            style={{
                                backgroundColor: "#E5E7EB",
                                padding: "10px",
                                fontSize: "24px",
                                color: "#184371",
                                fontWeight: "700",
                            }}
                        >
                            Important: Read the declaration below carefully before signing.
                        </h5>
                        <ol
                            style={{
                                fontWeight: "400",
                                fontSize: "16px",
                                color: "#184371",
                            }}
                        >
                            <li>
                                I agree to sell above vehicle and its accessories to Jetis Pty
                                Ltd for the agreed value above.
                            </li>
                            <li>
                                I certify that I have full title to the vehicle and its
                                accessories and there are no monies owing to any third party
                                concerning the vehicle by the way of lease, hire purchase
                                agreement, bill of sale, personal loan promissory note, or any
                                other agreement, and the vehicle and its accessories are
                                completely unencumbered.
                            </li>
                            <li>
                                To the best of my knowledge the odometer reading details
                                represents the true distance the vehicle has travelled.
                            </li>
                            <li>
                                There are no fines or infringement notices outstanding in
                                relation to this vehicle.
                            </li>
                            <li>
                                I declare and warrant for the benefit of Jetis Pty Ltd that the
                                contents of this declaration are true, accurate and correct, and
                                I acknowledge the dealer may rely on such contents.
                            </li>
                        </ol>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label
                                className="form-label"
                                htmlFor="sellerDate"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    color: "#184371",
                                }}
                            >
                                Date:
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter date"
                                name="sellerDate"
                                id="sellerDate"
                                value={formData.sellerDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label
                                className="form-label"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    color: "#184371",
                                }}
                            >
                                For EFT Payment: A/C No.
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter A/C No."
                                id="enterACno"
                                name="enterACno"
                                value={formData.enterACno}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label
                                className="form-label"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    color: "#184371",
                                }}
                            >
                                Bank BSB:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Bank BSB"
                                id="enterBankBsb"
                                name="enterBankBsb"
                                value={formData.enterBankBsb}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label
                                className="form-label"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "20px",
                                    color: "#184371",
                                }}
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                color: "#184674",
                            }}
                        >
                            Please email to{" "}
                            <a
                                href="mailto:accounts@jetis.com.au"
                                target="_blank"
                                className="text-center text-semibold"
                                style={{color: "#405FF2", textDecoration: "none"}}
                            >
                                accounts@jetis.com.au
                            </a>
                            or call on:
                            <span>
                            <a
                                href="tel:0260759999"
                                className="text-center text-semibold"
                                style={{color: "#405FF2", textDecoration: "none"}}
                            >
                                0260759999
                            </a></span>
                        </p>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#184374",
                            }}
                        >
                            Strictly no action on towing or issue of payment will be taken
                            until this form is completed in full and signed noting that:
                        </p>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#184374",
                            }}
                        >
                            (a) A copy of registration papers and drivers licence is
                            from private sellers.
                        </p>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#184374",
                            }}
                        >
                            {" "}
                            (b) Payment will be made by stated method, once all checks have
                            been passed and the vehicle is received at the branch.
                        </p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div
                        style={{
                            border: "1px solid #E5E7EB",
                            borderRadius: "4px",
                            backgroundColor: "#F9FAFB",
                        }}
                    >
                        <div className="row align-items-center" style={{padding: "10px"}}>
                            <div className="col-md-12">
                                <p
                                    style={{
                                        color: "#184374",
                                        fontWeight: "700",
                                        fontSize: "24px",
                                        margin: "0",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    OFFICE USE ONLY
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="dateReceived"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Date Received:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="dateReceived"
                            name="dateReceived"

                            value={formData.dateReceived}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="fromCheckedBy"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            From Checked By:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fromCheckedBy"
                            name="fromCheckedBy"

                            value={formData.fromCheckedBy}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="copyOfLicence"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Copy Of D/Licence:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="copyOfLicence"
                            name="copyOfLicence"

                            value={formData.copyOfLicence}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="copyOfRego"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Copy Of Rego?
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="copyOfRego"
                            name="copyOfRego"

                            value={formData.copyOfRego}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="pPSRCheckDone"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            PPSR Check Done:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="pPSRCheckDone"
                            name="pPSRCheckDone"

                            value={formData.pPSRCheckDone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="wOVRStatus"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            WOVR Status:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="wOVRStatus"
                            name="wOVRStatus"

                            value={formData.wOVRStatus}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="approvedBy"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Approved By:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="approvedBy"
                            name="approvedBy"

                            value={formData.approvedBy}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="pinnacleEntry"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Pinnacle Entry
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="pinnacleEntry"
                            name="pinnacleEntry"

                            value={formData.pinnacleEntry}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="towingFormDone"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Towing Form Done
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="towingFormDone"
                            name="towingFormDone"

                            value={formData.towingFormDone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="eFTProcessed"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            EFT Processed:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="eFTProcessed"
                            name="eFTProcessed"

                            value={formData.eFTProcessed}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="cashChq"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Cash/Chq
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cashChq"
                            name="cashChq"

                            value={formData.cashChq}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="officeUseOnlyDate"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Date:
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="officeUseOnlyDate"
                            name="officeUseOnlyDate"

                            value={formData.officeUseOnlyDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <p style={{fontSize: "20px", fontWeight: "600", color: "#184371"}}>
                        Purchased For:
                    </p>
                    <div className="col-md-3">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="elv"
                                id="wrecking"
                                value="Wrecking"
                                onChange={handleChange}
                            />
                            <label
                                style={{
                                    color: "#184374",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                                className="form-check-label"
                                htmlFor="wrecking"
                            >
                                Wrecking (Parts)
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="elv"
                                id="elv"
                                value="Elv"
                                onChange={handleChange}
                            />
                            <label
                                style={{
                                    color: "#184374",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                                className="form-check-label"
                                htmlFor="elv"
                            >
                                ELV (Crushing)
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <p style={{fontSize: "20px", fontWeight: "600", color: "#184371"}}>
                        Other: Export
                    </p>
                    <div className="col-md-2">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="retain"
                                id="retain"
                                value="Retain"
                                onChange={handleChange}
                            />
                            <label
                                style={{
                                    color: "#184374",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                                className="form-check-label"
                                htmlFor="retain"
                            >
                                Retain
                            </label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="retain"
                                id="resale"
                                value="Resale"
                                onChange={handleChange}
                            />
                            <label
                                style={{
                                    color: "#184374",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                                className="form-check-label"
                                htmlFor="resale"
                            >
                                Resale
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="wOVRLodged"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            WOVR Lodged
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="wOVRLodged"
                            name="wOVRLodged"

                            value={formData.wOVRLodged}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="vehicleReceived"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            Vehicle Received:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="vehicleReceived"
                            name="vehicleReceived"

                            value={formData.vehicleReceived}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="mVRCreated"
                            className="form-label"
                            style={{
                                color: "#184374",
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            MVR Created:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="mVRCreated"
                            name="mVRCreated"

                            value={formData.mVRCreated}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BuyMyCar;
