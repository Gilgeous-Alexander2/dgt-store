export async function GetData() {
    const res = await fetch('http://localhost:1337/api/auto-marks?populate=*')
    const res2 = await res.json()

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res2
  }