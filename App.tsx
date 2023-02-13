// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import ContadorScreen from './src/screens/ContadorScreen'
import {SafeAreaView} from 'react-native';
import TareaScreen from './src/screens/TareaScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1,
    backgroundColor: '#284258'}} >
       {/* <HolaMundoScreen />
       <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
