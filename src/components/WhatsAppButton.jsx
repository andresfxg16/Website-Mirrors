import React from "react";
import { useCart } from "../hooks/useCart.js";

export function WhatsAppButton() {
  const { cart } = useCart();

  const handleWhatsAppClick = () => {
    // Lógica para generar el mensaje predeterminado para WhatsApp
    const message = encodeURIComponent(
      "Hola, quiero recibir una cotización sobre el(los) siguiente(s) producto(s):\n" +
        // Generar la lista de productos y sus características
        cart.map((product) => {
            return `\n✅ ${product.title} (${product.quantity} Unidades)\n`;
          })
          .join("")
    );

    // URL de WhatsApp con el número y mensaje predefinido
    const whatsappURL = `https://api.whatsapp.com/send?phone=3229779169&text=${message}`;

    // Abrir enlace de WhatsApp en una nueva ventana
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      className="text-white font-semibold py-2 px-4 rounded bg-green-500 hover:bg-green-600 border-none"
      onClick={handleWhatsAppClick}
    >
      Solicitar Cotización
    </button>
  );
}
