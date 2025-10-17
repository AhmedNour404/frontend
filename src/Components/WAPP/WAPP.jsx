import React from "react";

export default function WhatsAppButton({ phone, message, label ,className="" }) {
  
  const encodedMessage = encodeURIComponent(message);

  const handleClick = () => {
    const whatsappLinkApp = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
    const whatsappLinkWeb = `https://wa.me/${phone}?text=${encodedMessage}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile, always open WhatsApp app
      window.location.href = whatsappLinkApp;
    } else {
      // On desktop, try WhatsApp Desktop app, fallback to Web
      const timeout = setTimeout(() => {
        window.open(whatsappLinkWeb, "_blank");
      }, 1000);

      window.location.href = whatsappLinkApp;

      // If it works, cancel fallback
      window.addEventListener("blur", () => clearTimeout(timeout));
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`   ${className}`}
    >   
      {label}
    </button>
  );
}
