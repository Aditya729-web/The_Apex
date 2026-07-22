export async function sendWhatsAppFeeReminder({ phone, studentName, amount, monthLabel }) {
  const graphVersion = process.env.WHATSAPP_GRAPH_VERSION || 'v23.0';
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME;
  const languageCode = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US';

  if (!token || !phoneNumberId || !templateName || !phone) {
    return { sent: false, reason: 'provider_not_configured' };
  }

  const digits = String(phone).replace(/\D/g, '');
  const normalizedPhone = digits.length === 10 ? `91${digits}` : digits;

  if (normalizedPhone.length < 10) {
    return { sent: false, reason: 'invalid_phone' };
  }

  const response = await fetch(`https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: normalizedPhone,
      type: 'template',
      template: {
        name: templateName,
        language: { code: languageCode },
        components: [
          {
            type: 'body',
            parameters: [
              { type: 'text', text: studentName },
              { type: 'text', text: monthLabel },
              { type: 'text', text: String(amount) }
            ]
          }
        ]
      }
    })
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    return { sent: false, reason: 'provider_error', details: result };
  }

  return { sent: true, details: result };
}
