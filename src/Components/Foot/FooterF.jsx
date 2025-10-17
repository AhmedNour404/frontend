import { useEffect, useState } from "react";
import axios from "axios";
import "./Footer.css"
import { useContext } from "react";
import { LanguageContext } from "../Context/Context";
import { useEffectEvent } from "react";
export default function ContactForm() {
    const { language } = useContext(LanguageContext);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const [touched, setTouched] = useState({
        name: false,
        phone: false,
        message: false,
    });

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");

    // Validation function
    const validateField = (field, value, updatedForm) => {
        const newErrors = { ...errors };

        if (field === "name") {
            if (value.trim().length < 3) {
                newErrors.name =
                    language === "ar"
                        ? "الاسم لازم يكون 3 حروف على الاقل."
                        : "Name must be at least 3 characters.";
            } else {
                delete newErrors.name;
            }
        }

        if (field === "phone") {
            if (value === "") {
                newErrors.phone =
                    language === "ar"
                        ? "رقم الموبايل ما ينفعش يكون فاضي."
                        : "Cannot be empty.";
            } else if (!/^01\d{9}$/.test(value)) {
                newErrors.phone =
                    language === "ar"
                        ? "رقم الموبايل لازم يبدأ بـ 01 ويكون 11 رقم."
                        : "Phone must start with 01 and be 11 digits.";
            } else {
                delete newErrors.phone;
            }
        }

        if (field === "message") {
            if (value.trim().length === 0) {
                newErrors.message =
                    language === "ar"
                        ? "اكتب رسالة."
                        : "Leave a message.";
            } else {
                delete newErrors.message;
            }
        }

        const isNameValid = updatedForm.name.trim().length >= 3;
        const isPhoneValid = /^01\d{9}$/.test(updatedForm.phone);
        const isMessageValid = updatedForm.message.trim().length > 0;

        setErrors(newErrors);
        setIsValid(isNameValid && isPhoneValid && isMessageValid);
    };

    const handleChange = (field, value) => {
        // update the form data state
        const updatedForm = { ...formData, [field]: value };
        setFormData(updatedForm);

        // mark the field as "touched"
        setTouched({ ...touched, [field]: true });

        // validate the specific field
        validateField(field, value, updatedForm);
    };


    useEffect(() => {
        // Re-run validation for all fields when language changes
        const updatedErrors = {};

        if (formData.name.trim().length < 3 && formData.name.length > 0) {
            updatedErrors.name =
                language === "ar"
                    ? "الاسم لازم يكون 3 حروف على الاقل."
                    : "Name must be at least 3 characters.";
        }

        if (formData.phone && !/^01\d{9}$/.test(formData.phone)) {
            updatedErrors.phone =
                language === "ar"
                    ? "رقم الموبايل لازم يبدأ بـ 01 ويكون 11 رقم."
                    : "Phone must start with 01 and be 11 digits.";
        }

        if (formData.message.trim().length === 0 && touched.message) {
            updatedErrors.message =
                language === "ar" ? "اكتب رسالة." : "Leave a message.";
        }

        setErrors(updatedErrors);
    }, [language, formData, touched]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValid || isLoading) return;

        setIsLoading(true);
        setStatus("");

        try {
            const res = await axios.post("https://glowback.jameshowlett123789.workers.dev", formData);

            if (res.status === 200) {
                setStatus("success");
                setFormData({ name: "", phone: "", message: "" });
                setErrors({});
                setIsValid(false);
                setTouched({ name: false, phone: false, message: false });

            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("Error sending message.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full relative bg-[url(/contactus.jpg)] bg-cover bg-center flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/15 via-gray-900/60 to-gray-950"></div>

            <div className="py-8 w-full flex lg:flex-row flex-col z-30 lg:py-16 px-4 h-lvh">
                {/* Left side text */}
                <div className="lg:w-1/2 text-white h-1/2 flex flex-col justify-between">
                    <h2 className="text-4xl tracking-tight font-semibold text-center">
                        {language === "ar" ? (<>تواصل <span className="text-yellow-300">معنا</span></>) : (<>Contact <span className="text-yellow-300">Us</span></>)}
                    </h2>
                    <p className="font-oswald lg:text-3xl text-2xl text-center">
                        {language === "ar" ? " عندك سؤال او اقتراح او عايز تبعت فيدباك أو اي استفسار تواصل معنا." : "Do you have a question or suggestion, or want to send feedback or any inquiry? Let us know."}
                    </p>
                </div>

                {/* Form */}
                <div className="h-full lg:w-1/2">
                    <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-around text-white">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                {language === "ar" ? "اسمك" : " Your name"}
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className={`shadow-lg bg-transparent text-sm rounded-lg block w-full p-2.5 border-2 focus:outline-none
      ${errors.name
                                        ? "border-red-600 focus:border-red-600"
                                        : formData.name.trim().length >= 3
                                            ? "border-green-500 focus:border-green-500"
                                            : "border-gray-400 focus:border-green-400"
                                    }`}
                                placeholder={language === "ar" ? "احمد..." : "Ahmed..."}
                                required
                            />
                            {touched.name && (
                                <p className={`mt-2 text-sm ${errors.name ? "text-red-500" : "text-green-400"}`}>
                                    {errors.name ? errors.name : formData.name.length >= 3 ? language === "ar" ? "رائع!" : "Great!" : ""}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                                {language === "ar" ? "رقم تليفونك" : " Your phone number"}
                            </label>
                            <input
                                type="number"
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                className={`block p-3 w-full bg-transparent text-sm rounded-lg border-2 shadow-sm focus:outline-none
      ${errors.phone
                                        ? "border-red-600 focus:border-red-600"
                                        : /^01\d{9}$/.test(formData.phone)
                                            ? "border-green-500 focus:border-green-500"
                                            : "border-gray-400 focus:border-green-400"
                                    }`}
                                placeholder={language === "ar" ? "٠١xxxxxxxxx٥" : "01xxxxxxxxx5"}
                                required
                            />
                            {touched.phone && (
                                <p className={`mt-2 bg-transparent text-sm ${errors.phone ? "text-red-500" : "text-green-400"}`}>
                                    {errors.phone ? errors.phone : /^01\d{9}$/.test(formData.phone) ? language === "ar" ? "رائع!" : "Great!" : ""}
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className={`block mb-2 text-sm font-medium `}>

                                {language === "ar" ? "رسالتك" : " Your message"}
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                value={formData.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                className={`shadow-lg bg-transparent text-sm rounded-lg block w-full p-2.5 border-2 focus:outline-none
      ${errors.message
                                        ? "border-red-600 focus:border-red-600"
                                        : formData.message.trim().length > 3
                                            ? "border-green-500 focus:border-green-500"
                                            : "border-gray-400 focus:border-green-400"
                                    }`}
                                placeholder={language === "ar" ? "قولنا سؤالك" : "Leave a comment..."}
                                required
                            />
                            {touched.message && (
                                <p className={`mt-2 text-sm ${errors.message ? "text-red-500" : "text-green-400"}`}>
                                    {errors.message ? errors.message : formData.message.length > 0 ? language === "ar" ? "رائع!" : "Great!" : ""}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isValid || isLoading}
                            className={`py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit transition-colors ${isValid
                                ? "bg-primary-700 hover:bg-primary-800"
                                : "bg-gray-500  py-0 px-0 text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            {isLoading ? <div className="loader"></div> : language === "ar" ? "إرسال الرسالة" : "Send Message"}
                        </button>

                        {status === "success" ? (
                            <p className="text-green-400">
                                {language === "ar" ? "تم الإرسال بنجاح" : "Sent successfully"}
                            </p>
                        ) : status === "error" ? (
                            <p className="text-red-500">
                                {language === "ar" ? "حدث خطأ أثناء إرسال الرسالة." : "Error sending message."}
                            </p>
                        ) : null}


                    </form>
                </div>
            </div>
        </div >
    );
}
