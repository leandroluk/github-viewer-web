import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  initialColorMode: "system",
  shadows: {
    outline: "0 0 0 1px red !important",
  },
  colors: {
    eco: {
      50: "#EBFCEA",
      100: "#DBF5D9",
      200: "#B7E7B3",
      300: "#91DA8B",
      400: "#70CF68",
      500: "#5CC851",
      600: "#4FC445",
      700: "#40AC36",
      800: "#35992E",
      900: "#288523",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  styles: {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    global: (props: any) => ({
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: `${mode("gray.300", "gray.700")(props)} ${mode(
          "gray.100",
          "gray.800",
        )(props)}`,
      },
      "*::-webkit-scrollbar": {
        height: "8px",
        width: "8px",
      },
      "*::-webkit-scrollbar-track": {
        borderRadius: "5px",
        backgroundColor: mode("gray.100", "gray.800")(props),
      },
      "*::-webkit-scrollbar-track:hover": {
        backgroundColor: mode("gray.100", "gray.800")(props),
      },
      "*::-webkit-scrollbar-track:active": {
        backgroundColor: mode("gray.100", "gray.800")(props),
      },
      "*::-webkit-scrollbar-thumb": {
        borderRadius: "9px",
        backgroundColor: mode("gray.300", "gray.700")(props),
      },
      "*::-webkit-scrollbar-thumb:hover": {
        backgroundColor: mode("gray.300", "gray.700")(props),
      },
      "*::-webkit-scrollbar-thumb:active": {
        backgroundColor: mode("gray.300", "gray.700")(props),
      },
    }),
  },
});

export default theme;
