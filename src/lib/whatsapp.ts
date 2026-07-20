export function createWhatsAppUrl(phone: string, message: string): string {
  const normalizedPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}

export function createProductWhatsAppUrl(productName: string): string {
  const message = `Olá! Tenho interesse no produto ${productName}. Gostaria de receber mais informações.`;
  return createWhatsAppUrl('+55 31 99535-6001', message);
}
