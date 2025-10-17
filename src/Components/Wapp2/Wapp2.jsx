import React from "react";

import { openWhatsApp } from "./Wapp2";

export default function WhatsAppButton({ phone, message, label, className = "" }) {
  return (
    <button onClick={() => openWhatsApp(phone, message)} className={className}>
      {label}
    </button>
  );
}