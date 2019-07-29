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

export const getEmotion = async (message) => {
  try {
    const url = `https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text=${message}&token=339faaf0299540c48cba72afe04e9044`;
    // const options = {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json;charset=UTF-8'},
    //   body: { message: message}
    // }
    const results = await fetch(url);
    const parsed = await results.json();
    console.log('parsed', parsed)
    const verdict = parsed.sentiment.type
    console.log('verdict', verdict)
    return verdict
  } catch(error) {
    throw Error(error.message)
  }
}