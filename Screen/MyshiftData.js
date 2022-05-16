import moment from "moment"
export const Todaydata =[
    {
    // day:moment().calendar().split(' ')[0],
    timestart:moment().add('hours').format('HH:mm'),
    timeend:moment().add(2, 'hours').format('HH:mm'),
    city:'Karachi'
},
    {
    // day:moment().add(1,'days').calendar().split(' ')[0],
        timestart:moment().add(1,'hours').format('HH:mm'),
    timeend:moment().add(3, 'hours').format('HH:mm'),
    city:'Karachi'
},
    {
    // day:moment().add(2, 'days').format("MMM DD"),
    timestart:moment().add(5,'hours').format('HH:mm'),
    timeend:moment().add(7, 'hours').format('HH:mm'),
    city:'Karachi'
},
]
export const TomorData= [
    {
        timestart:moment().add(2,'hours').format('HH:mm'),
        timeend:moment().add(4, 'hours').format('HH:mm'),
        city:'Karachi'
    },
    {
        timestart:moment().add(5,'hours').format('HH:mm'),
        timeend:moment().add(7, 'hours').format('HH:mm'),
        city:'Karachi'
    }
]
