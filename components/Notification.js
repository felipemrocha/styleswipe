import { Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Notification = ({ count,size }) => {
    if (count <= 0) return null;
    
    return (
      <Svg
        height={size}
        width={size}
        style={{ position: 'absolute', top: -1, right: -4 }}
        className=""
      >
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill="#4A9E6C"
        />
      </Svg>
    );
  };

export default Notification