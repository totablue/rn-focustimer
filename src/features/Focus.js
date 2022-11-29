import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/Colors";
import { spacing } from "../utils/Sizes";

const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setSubject}
                    label="What would you like to focus on?"
                />
                <View style={styles.button}>
                    <RoundedButton
                        onPress={() => addSubject(subject)}
                        style={styles.button}
                        title="+"
                        size={50}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {},
    button: {
        justifyContent: "center",
    },
    inputContainer: {
        padding: spacing.lg,
        justifyContent: "center",
        flexDirection: "row",
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm,
    },
});

export default Focus;
