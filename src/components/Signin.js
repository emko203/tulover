import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, TextInput, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const Signin = () => {
	return (
		<View >
			<Text>Ugabuga</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	searchBar: {
		width: width * 0.8,
		backgroundColor: '#4f438c',
		marginTop: 10,
		padding: 5,
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center'
	}
});

export default Signin;