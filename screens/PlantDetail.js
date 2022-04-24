import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { COLORS, ICONS, IMAGES } from "../constants";

const PlantDetail = ({ navigation }) => {
  const RequirmentsHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: COLORS.darkGray }}>
          Requirements
        </Text>
        <View
          style={{
            height: 2,
            width: 40,
            backgroundColor: COLORS.darkGray,
            marginTop: 15,
          }}
        ></View>
      </View>
    );
  };

  const RequirmentsIcon = ({ icon, percentage }) => {
    return (
      <View>
        <View style={{ height: 60, width: 50 }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image
              resizeMode="cover"
              style={{ height: "100%", width: "100%" }}
              source={icon}
            />
          </View>
          <View
            style={{
              position: "absolute",
              height: 3,
              width: "100%",
              backgroundColor: COLORS.lightGray,
              left: 0,
              bottom: 0,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              height: 3,
              width: percentage,
              backgroundColor: COLORS.primary,
              left: 0,
              bottom: 0,
            }}
          ></View>
        </View>
      </View>
    );
  };

  const RequirmentsDetail = ({ icon, text, detail }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: 50,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image
              resizeMode="cover"
              style={{ height: "100%", width: "100%" }}
              source={icon}
            />
          </View>
          <Text
            style={{ color: COLORS.darkGray, fontSize: 18, fontWeight: "500" }}
          >
            {text}
          </Text>
        </View>
        <Text
          style={{ fontSize: 16, fontWeight: "400", color: COLORS.lightGray }}
        >
          {detail}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 5,
        paddingTop: StatusBar.currentHeight || 48,
      }}
    >
      {/* Header */}
      <View style={{ height: "35%", backgroundColor: "red" }}>
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
          source={IMAGES.bannerBg}
        />
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              backgroundColor: COLORS.whiteOpacity,
              padding: 8,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ height: 25, width: 25 }}
              source={ICONS.back}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              style={{ height: 25, width: 25 }}
              source={ICONS.focus}
            />
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", padding: 20, bottom: 40 }}>
          <Text
            style={{ fontSize: 40, fontWeight: "bold", color: COLORS.white }}
          >
            Glory
          </Text>
          <Text style={{ fontSize: 40, color: COLORS.white }}>Mantas</Text>
        </View>
      </View>

      {/* Requirements */}
      <View
        style={{
          height: "65%",
          backgroundColor: COLORS.base,
          borderTopLeftRadius: 50,
          borderTopEndRadius: 50,
          marginTop: -50,
          padding: 30,
        }}
      >
        {/* Requirements Header */}
        <RequirmentsHeader />

        {/* Requirements Icons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 30,
          }}
        >
          <RequirmentsIcon icon={ICONS.sun} percentage="70%" />
          <RequirmentsIcon icon={ICONS.drop} percentage="50%" />
          <RequirmentsIcon icon={ICONS.temperature} percentage="80%" />
          <RequirmentsIcon icon={ICONS.garden} percentage="50%" />
          <RequirmentsIcon icon={ICONS.seed} percentage="50%" />
        </View>

        {/* Requirements Details */}
        <RequirmentsDetail
          icon={ICONS.sun}
          text="Sunlight"
          detail="15&#176;c"
        />
        <RequirmentsDetail
          icon={ICONS.drop}
          text="Water"
          detail="250 ML Daily"
        />
        <RequirmentsDetail
          icon={ICONS.temperature}
          text="Room Temp"
          detail="25&#176;c"
        />
        <RequirmentsDetail icon={ICONS.garden} text="Soil" detail="3 Kg" />
        <RequirmentsDetail
          icon={ICONS.seed}
          text="Fertilizer"
          detail="150 Mg"
        />
      </View>
      <View
        style={{
          position: "absolute",
          flex: 1,
          flexDirection: "row",
          backgroundColor: COLORS.base,
          width: "100%",
          height: "12%",
          bottom: 5,
          left: 5,
          padding: 5,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 25,
            borderTopEndRadius: 20,
            borderBottomEndRadius: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.white, padding: 10 }}>
            Take Action
          </Text>
          <Image
            style={{ height: 16, width: 16, margin: 10 }}
            source={ICONS.chevron}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.base,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 25,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.lightGray, padding: 10 }}>
            Almost 2 week of growing time
          </Text>
          <Image
            style={{ height: 16, width: 16, margin: 10 }}
            source={ICONS.downArrow}
          />
        </TouchableOpacity>
      </View>
      {/* Reuirment Footer */}
    </View>
  );
};

export default PlantDetail;
