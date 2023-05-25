const FUNCTION_URL = import.meta.env.VITE_EMAIL_FUNCTION_URL

export const sendEmail = async (contactFormData) => {
  try {
    const functionRes = await fetch(FUNCTION_URL, {
      method: 'POST',
      body: JSON.stringify(contactFormData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return functionRes
  } catch (err) {
    console.log(err)
  }
}
