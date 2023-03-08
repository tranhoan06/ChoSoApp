/* It's a JSX code. */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeAcc from "../user/Home-acc";
import Account from "./Account";
import AddNew from "./AddNew";
import Category from "./Category";
import Icon from "react-native-vector-icons/MaterialIcons";
import infoUser from "./info/infoUser";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import editUserInfo from "./info/editUserInfo";
import userHKD from "./info/userHKD";
import editUserHKD from "./info/editUserHKD";
import userDoanhNghiep from "./info/userDoanhNghiep";
import editUserDN from "./info/editUserDN";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const bottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Trang chủ") {
            iconName = "home";
            size = focused ? 35 : 25;
          } else if (route.name === "Account") {
            iconName = "supervised-user-circle";
            size = focused ? 35 : 25;
          } else if (route.name === "Danh mục") {
            iconName = "category";
            size = focused ? 35 : 25;
          } else if (route.name === "Thêm mới") {
            iconName = "add-circle-outline";
            size = focused ? 35 : 25;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#1790E2",
        inactiveTintColor: "#2C2E31",
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeAcc}
        options={{
          header: () => null,
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
        }}
      />
      <Tab.Screen
        name="Danh mục"
        component={Category}
        options={{
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
        }}
      />
      <Tab.Screen
        name="Thêm mới"
        component={AddNew}
        options={{
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabelStyle: {
            fontSize: 13,
            marginBottom: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Success = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen
          name="BottomTab"
          component={bottomTab}
          options={{
            header: () => null,
          }}
        />

        {/* <Stack.Screen
          name="Thông tin cá nhân"
          component={infoUser}
          options={{
            header: () => null,
          }}
        /> */}

        {/* <Stack.Screen
          name="Thông tin cá nhân"
          component={userHKD}
          options={{
            header: () => null,
          }}
        /> */}

        <Stack.Screen
          name="Thông tin cá nhân"
          component={userDoanhNghiep}
          options={{
            header: () => null,
          }}
        />

        {/* <Stack.Screen
          name="Sửa thông tin cá nhân"
          component={editUserInfo}
          options={{
            header: () => null,
          }}
        /> */}

        {/* <Stack.Screen
          name="Sửa thông tin cá nhân"
          component={editUserHKD}
          options={{
            header: () => null,
          }}
        /> */}

        <Stack.Screen
          name="Sửa thông tin cá nhân"
          component={editUserDN}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarStyle: {
    height: 70,
    paddingTop: 10,
  },
});

export default Success;
