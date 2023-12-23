import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import Card from '../components/Card';

const HomeScreen = () => {
  
  // Example state data for cards and total balance
  const [cards, setCards] = useState([
    { cardholderName: "Emanuil Karapachov", type: "Visa", cardNumber: "4242424242424242", expiryDate: "3/25", balance: 1200 },
    { cardholderName: "Emanuil Karapachov", type: "MasterCard", cardNumber: "8282828282828282", expiryDate: "3/27", balance: 800 },
  ]);

  // Example transaction data
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Grocery Store", amount: "-50.00 €", date: "2023-12-20" },
    { id: 2, description: "Online Shopping", amount: "-25.30 €", date: "2023-12-19" },
    { id: 3, description: "Cafe", amount: "-5.75 €", date: "2023-12-18" },
  ]);

  // Get the last 3 transactions
  const lastThreeTransactions = transactions.slice(-3);

  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  // Calculate total balance
  const totalBalance = cards.reduce((acc, card) => acc + card.balance, 0);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Emko</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cards}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.totalBalanceContainer}>
      <View>
          <Text style={styles.totalBalanceTitle}>Total Balance</Text>
          <Text style={styles.totalBalanceAmount}>
            {isBalanceVisible ? `${totalBalance.toFixed(2)} €` : '****** €'}
          </Text>
        </View>
        <TouchableOpacity onPress={toggleBalanceVisibility}>
          <Ionicons name={isBalanceVisible ? 'eye' : 'eye-off'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.transactionBoxTitle}>Latest Transactions</Text>
    </>
  );

const renderTransaction = ({ item: transaction }) => {
  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{transaction.description}</Text>
        <Text style={styles.transactionMeta}>
          {transaction.type} • {transaction.date}
        </Text>
      </View>
      <Text style={styles.transactionAmount}>{transaction.amount}</Text>
    </View>
  );
};

return (
  <FlatList
    ListHeaderComponent={renderHeader}
    data={lastThreeTransactions}
    renderItem={renderTransaction}
    keyExtractor={(item) => item.id.toString()}
    style={styles.container}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.contentContainer}
  />
);
};

const styles = StyleSheet.create({
  cardList: {
    flexGrow: 0, 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  welcomeText: {
    fontSize: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  card: {
    backgroundColor: '#e6e6e6',
    padding: 20,
    borderRadius: 10,
    width: '40%',
  },
  cardType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBalance: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardDetails: {
    fontSize: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalBalanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2e6ff',
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },

  totalBalanceTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },

  totalBalanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  transactionBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 3,
  },
  transactionBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    marginLeft: 16,
    marginRight: 16
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  transactionMeta: {
    fontSize: 14,
    color: 'grey',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  transactionsList: {
    maxHeight: 192,
  },
  transactionBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
},
);

export default HomeScreen;
