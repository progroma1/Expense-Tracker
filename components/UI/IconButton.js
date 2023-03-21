import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon }) => {
    return (
        <Pressable>
            <View>
                <Ionicons name='icon' />
            </View>
        </Pressable>
    );
};

export default IconButton;