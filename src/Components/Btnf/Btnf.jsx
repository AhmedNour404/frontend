import { useState, useEffect } from "react";
import axios from "axios";
import "./Btnf.css";
import { openWhatsApp } from "../Wapp2/Wapp2";
import { useContext } from "react";
import { LanguageContext } from "../Context/Context";
export default function ContactForm({ pay, className = "" }) {

    const { language } = useContext(LanguageContext);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    });
    const [touched, setTouched] = useState({
        name: false,
        phone: false,
    });


    const [isLoading, setIsLoading] = useState(false);




    useEffect(() => {
        if (!pay) {
            setFormData({ name: "", phone: "" });
            setErrors({});
            setTouched({ name: false, phone: false });
            setStatus("");
            setIsValid(false);
        }
    }, [pay]);

useEffect(() => {
    Object.keys(formData).forEach((field) => {
        if (touched[field]) {
            validateField(field, formData[field]);
        }
    });
}, [language]);


    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");
    const [isValid, setIsValid] = useState(false);

    // Live validation while typing
    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        if (!touched[field]) {
            setTouched((prev) => ({ ...prev, [field]: true }));
        }

        validateField(field, value);
    };



    const validateField = (field, value) => {
        setErrors((prev) => {
            const newErrors = { ...prev };

            if (field === "name") {
                if (value.trim().length < 3) {
                    newErrors.name = language === "ar" ? "يجب أن يكون الاسم 3 أحرف على الأقل" : "Name must be at least 3 characters.";
                } else {
                    delete newErrors.name;
                }
            }

            if (field === "phone") {
                if (value === "") {
                    newErrors.phone = "Cannot be empty";
                } else if (!/^01\d{9}$/.test(value)) {
                    newErrors.phone = language === "ar" ? "رقم الهاتف غير صالح" : "Invalid phone number.";
                } else {
                    delete newErrors.phone;
                }
            }
            const updatedForm = { ...formData, [field]: value };

            // ✅ Check all fields, not just current one
            const isNameValid = updatedForm.name.trim().length >= 3;
            const isPhoneValid = /^01\d{9}$/.test(updatedForm.phone);

            setIsValid(isNameValid && isPhoneValid);

            return newErrors;
        });
    };




    return (
        <div className="absolute flex items-center  inset-0 h-full ">
            <div className={`dark:bg-gray-800 z-[100] ${pay ? "flex" : "hidden"} bg-gray-100 w-full  rounded-lg  inset-0    h-full `}>

                <div className="  flex flex-col justify-around items-center pt-1  w-full px-1 ">
                    <div className=" text-center font-oswald  w-full pt-1 pb-1  outline-yellow-300  rounded-lg flex  justify-center dark:text-white text-gray-700 ">
                        <p className="text-4xl  font-semibold text-shadow-amber-300 text-shadow-md/40 ">Start <span className="text-white">Now</span></p>

                    </div>
                    <div className=" h-1/3 flex flex-col justify-around items-center">

                        <div className="w-72">
                            <div className="relative ">
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}


                                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white   focus:outline-none focus:ring-0 peer  ${errors.name ? "border-red-700 focus:border-red-700" : " border-green-500 focus:border-green-500"
                                        }`}
                                    placeholder=" "
                                />
                                <label htmlFor="name" className={`absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-800 bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${errors.name ? "text-red-700" : "text-green-400"}`}> {language === "ar" ? "اسمك" : " Your name"}</label>
                            </div>
                            {touched.name && (
                                <p className={`mt-2 text-[15px] ${errors.name ? "text-red-500" : "text-green-400"}`}>
                                    {errors.name ? errors.name : formData.name.length >= 3 ? language === "ar" ? "رائع!" : "Great!" : ""}
                                </p>
                            )}

                        </div>

                        <div className="w-72">
                            <div className="relative">
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                     pattern="[0-9]*"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) =>{ const val = e.target.value ;if (/^\d*$/.test(val)) {handleChange("phone", val)}}}


                                    // 👈 here
                                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white   focus:outline-none focus:ring-0 peer ${errors.phone ? "border-red-700 focus:border-red-700" : " border-green-500 focus:border-green-500"
                                        }`}
                                    placeholder=" "
                                />

                                <label htmlFor="phone" className={`absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-800 bg-gray-100 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${errors.phone ? "text-red-700" : "text-green-400"}`}>{language === "ar" ? "رقم تليفونك" : " Your phone number"}</label>
                            </div>


                            {touched.phone && (
                                <p className={`mt-2 text-[15px] ${errors.phone ? "text-red-500" : "text-green-400"}`}>
                                    {errors.phone ? errors.phone : /^01\d{9}$/.test(formData.phone) ? language === "ar" ? "رائع!" : "Great!" : ""}
                                </p>
                            )}




                        </div>


                    </div>

                    <button
                        onClick={async (e) => {
                            e.preventDefault();
                            if (!isValid || isLoading) return;

                            setIsLoading(true);

                            try {
                                const res = await axios.post("https://glowback.jameshowlett123789.workers.dev", {
                                    ...formData,
                                    message: "Quick contact form submission",
                                });


                                if (res.status === 200) {
                                    setStatus("sent");
                                    setFormData({ name: "", phone: "" });
                                    setErrors({});
                                    setIsValid(false);
                                } else {
                                    setStatus("error");
                                }
                            } catch (error) {
                                console.error(error);
                                setStatus("Error sending message.");
                            } finally {
                                setIsLoading(false);

                                setTimeout(() => {
                                    openWhatsApp("201114668713", `مرحبا  شكراً لتواصلك معنا`);
                                }, 1000);

                            }
                        }}
                        disabled={!isValid || isLoading}
                        className={`py-3 mb-5 px-10 font-medium text-center text-xm text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none
    ${isValid
                                ? "bg-primary-700 focus:ring-primary-800 text-white"
                                : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}
                    >
                        {isLoading ? <div className="loader"></div> : language === "ar" ? "إرسال" : "Submit"}
                    </button>
                    {status==="sent"? language==="ar"? <p className="text-green-400 text-center">تم الإرسال بنجاح</p> : <p className="text-green-400 text-center">Sent successfully</p> : status==="error" ? <p className="text-red-400 text-center">{language==="ar" ? "حدث خطأ أثناء الإرسال" : "Error sending message."}</p> : null}
                </div>
            </div>
        </div>
    );
}
