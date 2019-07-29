export const postSign = async (sign) => {
  try {
    const url = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({sign: sign})
    }

    const getData = await fetch(url, options)
    if(!getData.ok) {
      throw new Error('Something went wrong... but we\'ll give you a do-over.')
    }
    const response = getData.json();
    return response
  } catch (error) {
    throw Error(error.message)
  }
}

// export const getEmotion = async (message) => {
//   try {
//     const url = ''
//     const options = {
//       method: ''
//     }
//   } catch(error) {
//     throw Error(error.message)
//   }
// }