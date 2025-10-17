

export const openWhatsApp = (phone, message) => {
  const encodedMessage = encodeURIComponent(message);

  const whatsappLinkApp = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
  const whatsappLinkWeb = `https://wa.me/${phone}?text=${encodedMessage}`;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = whatsappLinkApp;
  } else {
    window.open(whatsappLinkWeb, "_blank");
  }
};
