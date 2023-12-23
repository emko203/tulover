import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Sample data for transactions
const transactionsData = [
  {
    id: 't1',
    type: 'Income',
    category: 'Salary',
    amount: '+$2,500.00',
    date: '2023-12-01',
  },
  {
    id: 't2',
    type: 'Expense',
    category: 'Groceries',
    amount: '-$150.00',
    date: '2023-12-02',
  },
  // ... more transactions
];

const TransactionScreen = () => {
  // Render each transaction
  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionText}>
        <Text style={styles.transactionType}>{item.type} - {item.category}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionsData}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionText: {
    flexDirection: 'column',
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: 14,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionScreen;
