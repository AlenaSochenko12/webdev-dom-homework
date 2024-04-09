export const generateDate = ({comment}) => {
    let myDate = new Date(comment.date);
    const day = myDate.getDate().toString().padStart(2, '0');
    const month = (myDate.getMonth() + 1).toString().padStart(2, '0');
    const year = myDate.getFullYear().toString().slice(-2);
    let hour = myDate.getHours().toString().padStart(2, '0');
    let minute = myDate.getMinutes().toString().padStart(2, '0');
    let fullDate = day + "." + month + "." + year + " " + hour + ":" + minute;
    return fullDate;
  }