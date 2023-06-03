export const formatEmail = (email:String)=>{
    //validate if the author is email or just name 
    const partialEmail = email.split("@");
    let fristPart = partialEmail[0];
    let secondPart = partialEmail[1].split(".");

    let formatedEmail = fristPart + "@***." + secondPart[1];
    return formatedEmail
}


export const formatDate = (timestamp:VarDate)=>{
    let date =  new Date(timestamp)
    let formatedDate =  date.toLocaleDateString("en-GB", 
     { day: 'numeric', year: 'numeric', month: 'long' }); // DD MM YYYY

    return formatedDate

}