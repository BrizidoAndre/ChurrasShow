

export function dateBeautify(date){
    objectDate = {
        hour:'',
        date:'',
    }

    dateArray = date.split('T')
    dateCalendar = dateArray[0]
    dateHour = dateArray[1]

    objectDate.date =  dateCalendar.replaceAll('-','/')
    objectDate.hour = dateHour.slice(0,5)

    return objectDate;
}