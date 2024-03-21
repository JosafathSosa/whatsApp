import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { styles } from "./WelcomePage.styles";

const CreatePassComponent = () => {
  const [email, setEmail] = useState("");
  const [saveButton, setSaveButton] = useState("");
  const [pass, setPass] = useState("");

  var id_res = 214;
  var mp = "Visa";
  var tf = "7654";
  var c = "BUS";
  var e = "ACTIVO2";
  var prn = "654321";
  var p = "550";
  var pn = "Ramiro Josafath Sosa Jimenez";
  var osc = "AGS2";
  var on = "Aguascalientes1";
  var dsc = "GDL2";
  var dn = "Guadalajara";
  var ddt = "2024-03-22T12:00:00-06:00";
  var adt = "2024-03-22T15:00:00-06:00";
  var carr = "676";
  var z = "puerta de embarque/carril/anden2";
  var s = "1A,1B";
  var cñ = "Prueba1234";

  const handleSubmit = async () => {
    /*if (!email) {
      return alert("Please enter your email address.");
    }*/

    try {
      const response = await fetch(
        `https://crearobjeto-klapxs6vqa-uc.a.run.app?id=${id_res}&mp=${mp}&tf=${tf}&c=${c}&e=${e}&prn=${prn}&p=${p}&pn=${pn}&osc=${osc}&on=${on}&dsc=${dsc}&dn=${dn}&ddt=${ddt}&adt=${adt}&carr=${carr}&z=${z}&s=${s}&cñ=${cñ}`
      );

      if (!response.ok) {
        throw new Error(`Error al obtener el objeto: ${response.status}`);
      }

      const data = await response.json();
      if ("LINK" in data) {
        console.log(data.LINK);
        setPass(data.LINK);
      }
    } catch (error) {
      console.log(error);
    }

    /*
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        body: `email=${email}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      //console.log(response);

      if (!response.ok) {
        throw new Error("Error creating pass");
      }
      const link = await response.text();
      //console.log(link);

      setPass(link);
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }*/
  };

  const goToPass = () => {
    //console.log(pass);
    Linking.openURL(`${pass}`);
  };

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 30, marginBottom: 30 }}>Google Wallet API:</Text>

      <TouchableOpacity onPress={goToPass}>
        {pass ? (
          <Image
            source={require("../../../assets/wallet-button.png")}
            style={{ width: 275, height: 50 }}
          />
        ) : (
          <Button title="Create Pass" onPress={handleSubmit} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CreatePassComponent;
