import React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { COLORS, ICONS, IMAGES } from "../constants";

const Home = ({ navigation }) => {
  //dummy data
  const DATA = [
    {
      id: 1,
      title: "Dikto",
      img: IMAGES.plant1,
      favourite: 0,
    },
    {
      id: 2,
      title: "Luivas",
      img: IMAGES.plant2,
      favourite: 1,
    },
    {
      id: 3,
      title: "Jarks",
      img: IMAGES.plant3,
      favourite: 0,
    },
    {
      id: 4,
      title: "Orcyd",
      img: IMAGES.plant4,
      favourite: 0,
    },
  ];
  const renderNewPlants = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderTopLeftRadius: 20,
          borderTopEndRadius: 20,
          borderBottomEndRadius: 50,
          borderBottomLeftRadius: 50,
          padding: 10,
        }}
      >
        {/* Top Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 12,
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 24, color: COLORS.white }}>New Plants</Text>
          <TouchableOpacity>
            <Image source={ICONS.focus} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item) => String(item.id)}
            data={DATA}
            renderItem={renderNewPlantsData}
          />
        </View>
      </View>
    );
  };

  const renderNewPlantsData = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Image
          resizeMode="cover"
          style={{ height: 120, width: 100, borderRadius: 20 }}
          source={item.img}
        />
        <View
          style={{
            padding: 5,
            position: "absolute",
            backgroundColor: COLORS.primary,
            bottom: 12,
            right: 0,
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
          }}
        >
          <Text style={{ color: COLORS.white }}>{item.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
        paddingTop: StatusBar.currentHeight || 45,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.base,
          flex: 1,
        }}
      >
        {/* New Plants */}
        <View style={{ height: "30%", backgroundColor: COLORS.white }}>
          {renderNewPlants()}
        </View>

        {/* Today's Share */}
        <View
          style={{
            height: "50%",
            backgroundColor: COLORS.white,
            borderBottomEndRadius: 30,
            borderBottomLeftRadius: 30,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: COLORS.darkGray,
                paddingBottom: 20,
              }}
            >
              Today's Share
            </Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.lightGray }}>See all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 60,
            }}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PlantDetail")}
                style={{ flex: 1, padding: 10 }}
              >
                <Image
                  resizeMode="cover"
                  style={{ height: "100%", width: "100%", borderRadius: 20 }}
                  source={IMAGES.plant5}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("PlantDetail")}
                style={{ flex: 1, padding: 10 }}
              >
                <Image
                  resizeMode="cover"
                  style={{ height: "100%", width: "100%", borderRadius: 20 }}
                  source={IMAGES.plant6}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("PlantDetail")}
              style={{ flex: 1, padding: 10 }}
            >
              <Image
                resizeMode="cover"
                style={{ height: "100%", width: "100%", borderRadius: 20 }}
                source={IMAGES.plant7}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Added Friends */}
        <View style={{ height: "20%", padding: 10, paddingHorizontal: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 24, color: COLORS.darkGray }}>
              Added Friends
            </Text>
            <Text style={{ fontSize: 16, color: COLORS.lightGray }}>
              5 total
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Image
                  style={{
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                  }}
                  source={IMAGES.profile1}
                />
              </View>
              <View style={{ transform: [{ translateX: -20 }] }}>
                <Image
                  style={{
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                  }}
                  source={IMAGES.profile2}
                />
              </View>
              <View style={{ transform: [{ translateX: -40 }] }}>
                <Image
                  style={{
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                  }}
                  source={IMAGES.profile3}
                />
              </View>
              <View style={{ transform: [{ translateX: -30 }] }}>
                <Text style={{ fontSize: 16, color: COLORS.lightGray }}>
                  +2 more
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, color: COLORS.lightGray }}>
                Add More
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.plus,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: 50,
                  borderRadius: 10,
                  marginLeft: 10,
                }}
              >
                <Image
                  style={{ height: 30, width: 30, borderRadius: 20 }}
                  source={ICONS.plus}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
