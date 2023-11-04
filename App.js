import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text> Mr.Pres</Text>
      <StatusBar style="auto" />
      <div className="App">
                <h1 className="geeks">GeeksforGeeks</h1>
                <h3>Fetch data from an api in react</h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
      
    </View>
  );
}

componentDidMount() 
  fetch("https://www.tronalddump.io/")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              items: json,
              DataisLoaded: true,
          });
      });


render() 
  const { DataisLoaded, items } = this.state;
  if (!DataisLoaded)
      return (
          <div>
              <h1> Pleses wait some time.... </h1>
          </div>
      );

const styles = StyleSheet.create({
  containger: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const allCaps = (text) => {
  setAllCapsText(text.toUpperCase())
}
