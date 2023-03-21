import { Pressable, View, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';

const ExpensesItem = ({ description, ammount, date }) => {
  return (
    <Pressable>
        <View style={styles.expenseItem}>
            <View>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.ammountContainer}>
                <Text style={styles.ammount}>{ammount.toFixed(2)}</Text>
            </View>
        </View>
    </Pressable>
  ); 
};

export default ExpensesItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    ammountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    ammount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
});