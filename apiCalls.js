export const postSign = (sign, day) => {
    const url = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({sign: sign, day: day})
    }
}