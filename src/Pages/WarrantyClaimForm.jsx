import React, {useState} from 'react';
import emailjs from 'emailjs-com';


function WarrantyClaimForm() {
    const [formData, setFormData] = useState({
        date: '',
        companyName: '',
        customerName: '',
        invoiceNumber: '',
        partNumber: '',
        vehicleDetails: '',
        make: '',
        model: '',
        year: '',
        chassisNumber: '',
        engineType: '',
        dateFitted: '',
        kmsReading: '',
        dateFailed: '',
        explanation: '',
    });
    const [files, setFiles] = useState({
        workshopInvoice: null,
        workshopReport: null,
        additionalDocument: null,
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
        if (!isFormValid) {
            alert("Please fill all the required fields.");
            return;
        }
        const templateParams = {
            date: formData.date,
            companyName: formData.companyName,
            customerName: formData.customerName,
            invoiceNumber: formData.invoiceNumber,
            partNumber: formData.partNumber,
            vehicleDetails: formData.vehicleDetails,
            make: formData.make,
            model: formData.model,
            year: formData.year,
            chassisNumber: formData.chassisNumber,
            engineType: formData.engineType,
            dateFitted: formData.dateFitted,
            kmsReading: formData.kmsReading,
            dateFailed: formData.dateFailed,
            explanation: formData.explanation,
        };
        emailjs.send('service_jvncx2v', 'template_au08sml', templateParams, 'PdDZjNPwGentfmflT')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the email. Please try again.");
            });
        e.target.reset();
        setFiles({workshopInvoice: null, workshopReport: null, additionalDocument: null});
    };

    return (
        <div className="container mt-5">
            <div style={{display: "flex", justifyContent: "flex-end", width: "88%"}}>
                <div className="row mb-3" style={{paddingBottom: "46px"}}>
                    <div className="col-md-6" style={{width: "100%"}}>
                        <label htmlFor="date" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>
            <h2 className="text-center" style={{color: "#184374", fontSize: "40px", fontWeight: "700"}}>Warranty Claim
                Form</h2>
            <form onSubmit={handleSubmit} style={{paddingTop: "51px"}}>
                <div className="row mb-3" style={{paddingBottom: "46px"}}>
                    <div className="col-md-6">
                        <label htmlFor="companyName" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="companyName"
                            name="companyName"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="customerName" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Customer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="customerName"
                            name="customerName"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row mb-3" style={{paddingBottom: "46px"}}>
                    <div className="col-md-6">
                        <label htmlFor="invoiceNumber" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Invoice Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="invoiceNumber"
                            name="invoiceNumber"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="partNumber" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Part Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="partNumber"
                            name="partNumber"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3" style={{paddingBottom: "46px"}}>
                    <label htmlFor="vehicleDetails" className="form-label"
                           style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Vehicle Details</label>
                    <input
                        type="text"
                        className="form-control"
                        id="vehicleDetails"
                        name="vehicleDetails"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row mb-3" style={{paddingBottom: "46px"}}>
                    <div className="col-md-4">
                        <label htmlFor="make" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Make</label>
                        <input
                            type="text"
                            className="form-control"
                            id="make"
                            name="make"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="model" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Model</label>
                        <input
                            type="text"
                            className="form-control"
                            id="model"
                            name="model"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="year" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Year</label>
                        <input
                            type="text"
                            className="form-control"
                            id="year"
                            name="year"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3" style={{paddingBottom: "46px"}}>
                    <div className="col-md-6">
                        <label htmlFor="chassisNumber" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Chassis Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="chassisNumber"
                            name="chassisNumber"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="engineType" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Engine Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="engineType"
                            name="engineType"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3" style={{paddingBottom: "46px"}}>
                    <div className="col-md-6">
                        <label htmlFor="dateFitted" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Date Fitted</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateFitted"
                            name="dateFitted"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="kmsReading" className="form-label"
                               style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Kms Reading</label>
                        <input
                            type="text"
                            className="form-control"
                            id="kmsReading"
                            name="kmsReading"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>


                <div className="mb-3">
                    <label htmlFor="dateFailed" className="form-label"
                           style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Date Failed</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dateFailed"
                        name="dateFailed"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="explanation" className="form-label"
                           style={{color: "#184374", fontSize: "20px", fontWeight: "600"}}>Explanation</label>
                    <textarea
                        className="form-control"
                        id="explanation"
                        name="explanation"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-center mb-5 mt-4">
                    <button type="submit" className="btn btn-danger">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default WarrantyClaimForm;



