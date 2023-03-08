import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/component/Home";
import login from "./src/component/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import quenPass from "./src/component/quenPass";
import Register from "./src/component/Register";
import OTP from "./src/component/OTP";
import enterPass from "./src/component/enterPass";
import Perfect from "./src/component/Perfect";
import Success from "./src/user/Success";
import infoUser from "./src/user/info/infoUser";

const Tab = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
        <Tab.Screen
          name="Đăng nhập"
          component={login}
          options={{
            header: () => null,
          }}
        />

        <Tab.Screen name="Quên mật khẩu" component={quenPass} />

        <Tab.Screen
          name="Đăng ký"
          component={Register}
          options={{
            header: () => null,
          }}
        />

        <Tab.Screen name="Nhập mã xác nhận" component={OTP} />

        <Tab.Screen name="Nhập mật khẩu" component={enterPass} />

        <Tab.Screen name="Hoàn tất" component={Perfect} />
        <Tab.Screen
          name="Thành công"
          component={Success}
          options={{
            header: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
