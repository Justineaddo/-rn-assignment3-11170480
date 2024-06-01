import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  TextInput, 
  FlatList, 
  ScrollView,
  StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const categoriesData = [
  { id: '1', name: 'Exercise', description: '12 tasks', image: require('./assets/woman1.png') },
  { id: '2', name: 'Study', description: '12 tasks', image: require('./assets/woman.png') },
  { id: '3', name: 'Code', description: '12 tasks', image: require('./assets/code.png') },
  { id: '4', name: 'Coke', description: '12 tasks', image: require('./assets/coke.png') },
  { id: '6', name: 'Food', description: '12 tasks', image: require('./assets/food.png') },
  { id: '7', name: 'Read', description: '12 tasks', image: require('./assets/Read.png') },
  { id: '8', name: 'Movies', description: '12 tasks', image: require('./assets/movies.png') },
];

const taskData = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Data Structures and Algorithms' },
  { id: '4', name: 'Office Productivity Tools' },
  { id: '5', name: 'Systems Administration' },
  { id: '6', name: 'Database Administration' },
  { id: '7', name: 'UX/UI' },
  { id: '8', name: 'Product Design' },
  { id: '9', name: 'Cybersecurity' },
  { id: '10', name: 'Logic Systems' },
  { id: '11', name: 'Information Sydtems' },
  { id: '12', name: 'Django' },
  { id: '13', name: 'Python' },
  { id: '14', name: 'Javascript' },
  { id: '15', name: 'Java' },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.padding}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Hello, Devs</Text>
            <Text style={styles.subHeaderText}>14 tasks devs</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image source={require('./assets/person.png')} style={styles.profileImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
      <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
      />
          <View style={styles.filterIconContainer}>
            <Image source={require('./assets/Vector.png')} style={styles.filterIcon} />
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <FlatList
            data={categoriesData}
            renderItem={({ item }) => (
              <View style={styles.categoryCard}>
                <Text style={styles.categoryName}>{item.name}</Text>
                <Text style={styles.categoryDescription}>{item.description}</Text>
                <Image source={item.image} style={styles.categoryImage} />
              </View>
            )}
            keyExtractor={(item) => item.id} 
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.ongoingTasksContainer}>
          <Text style={styles.ongoingTasksTitle}>Ongoing Task</Text>
          <FlatList
            data={taskData}
            renderItem={({ item }) => (
              <View style={styles.taskCard}>
                <Text style={styles.taskName}>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  padding: {
    padding: 12,
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 38.4,
  },
  subHeaderText: {
    fontWeight: 'normal',
  },
  profileButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
  },
  profileImage: {
    width: 46,
    height: 45,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchIcon: {
    marginLeft: 10,
    width: 16,
    height: 16,
    top: 15,
    left: 3.97,
    gap: 0,
    paddingLeft: 60,
    
  },
  searchInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginLeft: -50,
  },
  filterIconContainer: {
    backgroundColor: '#F0522F',
    padding: 8,
    borderRadius: 10,
  },
  filterIcon: {
    width: 34,
    height: 34,
  },
  categoriesContainer: {
    marginTop: -5,
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: 'white',
    marginRight: 20,
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 14,
  },
  categoryImage: {
    width: 141,
    height: 130,
    marginTop: 10,
  },
  ongoingTasksContainer: {
    marginTop: -5,
  },
  ongoingTasksTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  taskCard: {
    backgroundColor: 'white',
    borderColor: '#E8D1BA',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    height: 128,
    justifyContent: 'center',
    marginBottom: 20,
  },
  taskName: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default App;
