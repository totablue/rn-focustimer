import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import { colors } from "../utils/Colors";
import { fontSizes, spacing } from "../utils/Sizes";

const FocusHistory = ({ history }) => {
    if (!history || !history.length)
        return (
            <Text style={styles.title}>
                We haven't focused on anything yet!
            </Text>
        );

    const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList data={history} renderItem={renderItem} />
        </View>
    );
};

export default FocusHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.md,
    },
    item: {
        color: colors.textColor,
        fontSize: fontSizes.md,
        paddingTop: spacing.sm,
    },
    title: {
        color: colors.textColor,
        fontSize: fontSizes.md,
        fontWeight: "bold",
    },
});
