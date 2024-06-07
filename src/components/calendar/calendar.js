import { CalendarStyle } from "./style";
import { StyleSheet } from "react-native";
import moment from "moment"
import 'moment/locale/pt-br';

//instância da data atual
const currentDate = new Date();

//define a data inicial como sendo o primeiro dia do mês
const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2);

//define a data final como sendo o último dia do mês
const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

export const Calendar = ({setCalendarDate}) => {
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
        fontSize: 22,
        textAlign: "center",
        alignSelf: 'flex-start',
        color: '#4E4B59',
        fontFamily: "MontserratAlternates_600SemiBold",
        paddingHorizontal: 16
    },
    nameDateStyle: {
        color: "#F2E6D0",
        fontSize: 14,
        fontFamily:"lato_light",
        textTransform: "capitalize"
    },
    numberDateStyle: {
        color: "#F2E6D0",
        fontSize: 12
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
        backgroundColor: `#60BFC5`
    },
    selectedAnimationStyle: {
        type: "border",
        duration: 200,
        borderWidth: 2,
        borderHighlightColor: "#49B3BA"
    }
})