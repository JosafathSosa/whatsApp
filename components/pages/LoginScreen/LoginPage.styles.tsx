import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    root: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerView: {
        marginTop: 50,
        display: "flex",
        gap: 30,
        paddingHorizontal: 60
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center"
    },
    desc: {
        textAlign: "center"
    },
    inputContainer:{
        overflow: "hidden",


    },
    inputCountry: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#00A884",
        marginBottom: 10
    },
    inputNumber: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    inputNumerStyle: {
        overflow: "hidden",
        borderBottomWidth:1,
        borderBottomColor: "#00A884",
        paddingLeft: 20
    },
    btn: {
        backgroundColor: "#00A884",
        borderRadius: 10,
        marginBottom: 50,
        width: 60
    },
    
})