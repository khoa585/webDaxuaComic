import moment from 'moment';
export const timeToString=(time)=>{
    let date = new moment(time);
    return date.format("hh:mm DD/MM/YYYY") ;
}
export const showTimeAgo = (time)=>{
    let timeMoment =  moment(time);
    let date = moment().diff(timeMoment);
    let diffDate = moment(date);
    if(diffDate.month()>1){
        return timeMoment.format("DD/MM/YY")
    }
    if(diffDate.date()>1){
        return diffDate.date() + " ngày trước" ;
    }
    if(diffDate.hour()>1){
        return diffDate.hour() + " giờ trước" ;
    }
    if(diffDate.minute()>1){
        return diffDate.minute() + " phút trước" ;
    }
    if(diffDate.second()>1){
        return diffDate.second() + " giây trước" ;
    }
}