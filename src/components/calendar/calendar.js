import { CalendarStyle } from "./style";
import { StyleSheet } from "react-native";
import moment from "moment"
import 'moment/locale/pt-br';
import { useEffect } from "react";

//instância da data atual
const currentDate = new Date();

//define a data inicial como sendo o primeiro dia do mês
const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);

//define a data final como sendo o último dia do mês
const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

// Configuração de datas marcadas com borda inferior
const markedDatesArray = {
    '2024-05-15': {
        customStyles: {
            container: {
                borderBottomWidth: 2,
                borderBottomColor: '#64532C'
            },
            text: {
                color: '#CAA858'
            }
        }
    },
    '2024-05-16': {
        customStyles: {
            container: {
                borderBottomWidth: 2,
                borderBottomColor: '#64532C'
            },
            text: {
                color: '#CAA858'
            }
        }
    }
};

export const Calendar = ({ setCalendarDate }) => {

    // const  markedDatesFunc = date => {
    //     // Line
    //     if (date.isoWeekday() === 6) { // Saturdays
    //         return {
    //             lines: [{
    //             color: 'F2E6D0',
    //             selectedColor: 'F2E6D0'
    //         }]
    //         };
    //     }
    //     return {};
    // }

    // useEffect(() => {markedDatesFunc()},[])

    return (
        <CalendarStyle
            scrollable
            onDateSelected={date => setCalendarDate(moment(date).format('YYYY-MM-DD'))}

            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={styleCalendar.selectedAnimationStyle}
            iconLeftStyle={styleCalendar.iconsStyle}
            iconRightStyle={styleCalendar.iconsStyle}

            selectedDate={currentDate}
            startingDate={moment()}
            minDate={moment()}
            maxDate={endingDate}

            markedDates={markedDatesArray }

            calendarHeaderStyle={styleCalendar.calendarHeaderStyle}
            dateNumberStyle={styleCalendar.numberDateStyle}
            dateNameStyle={styleCalendar.nameDateStyle}

            // estilização do item que está selecionado - efeito do item marcado
            highlightDateNameStyle={styleCalendar.selectedDateNameStyle}
            highlightDateNumberStyle={styleCalendar.selectedDateNumberStyle}
            highlightDateContainerStyle={styleCalendar.selectedContainerStyle}
            IconContainer={{ flex: 0.1 }}
        />
    )
}

const styleCalendar = StyleSheet.create({
    iconsStyle: {
        display: 'none'
    },
    calendarHeaderStyle: {
        fontSize: 20,
        textAlign: "center",
        alignSelf: 'flex-start',
        color: '#C1A25A',
        fontFamily: "lato_regular",
        paddingHorizontal: 16,
        width: '100%',
        textTransform: 'capitalize',
        borderColor: "#C1A25A",
        borderBottomWidth: 1,

    },
    nameDateStyle: {
        color: "#F2E6D0",
        fontSize: 14,
        fontFamily: "lato_light",
        textTransform: "capitalize"
    },
    numberDateStyle: {
        color: "#F2E6D0",
        fontSize: 12,
        fontFamily: "lato_regular",
    },
    selectedDateNameStyle: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textTransform: 'capitalize'
    },
    selectedDateNumberStyle: {
        color: "white",
        fontSize: 14
    },
    selectedContainerStyle: {
        backgroundColor: `#C1A25A`
    },
    selectedAnimationStyle: {
        type: "border",
        duration: 200,
        borderWidth: 2,
        borderHighlightColor: "#C1A25A"
    }
})