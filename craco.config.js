const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components"),
      "@Redux": path.resolve(__dirname, "src/redux"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Models": path.resolve(__dirname, "src/models"),
      "@ServicesModules": path.resolve(__dirname, "src/services/modules"),
      "@Routes": path.resolve(__dirname, "src/routes"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Constants": path.resolve(__dirname, "src/constants"),
      "@Modules": path.resolve(__dirname, "src/modules"),
      "@Config": path.resolve(__dirname, "src/config"),
      "@Images": path.resolve(__dirname, "src/assets/images"),
      "@Api": path.resolve(__dirname, "src/services"),
      "@Root": path.resolve(__dirname, "src"),
    },
  },
};
