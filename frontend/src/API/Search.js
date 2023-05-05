export const search = async(phoneNumber)=>{
    var myHeaders = new Headers();
    myHeaders.append("apikey", "gL1dc8Sz964zWBoSKaKJkdhxV1V5TVZ4");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    const data = await fetch(`https://api.apilayer.com/number_verification/validate?number=${phoneNumber}`, requestOptions)
    const verResult = await data.json();
    return verResult
}
