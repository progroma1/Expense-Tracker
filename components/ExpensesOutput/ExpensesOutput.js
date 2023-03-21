import { View, StyleSheet } from 'react-native'
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        ammount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of pants',
        ammount: 89.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e3',
        description: 'Bananas',
        ammount: 5.99,
        date: new Date('2022-10-19')
    },
    {
        id: 'e4',
        description: 'Books',
        ammount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'Magazine',
        ammount: 11.99,
        date: new Date('2022-05-19')
    }
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} /> 
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingTop: 24,
        paddingBottom: 0,
    },
});