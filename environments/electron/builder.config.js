const {
    name: productCode,
    productName,
    appId,
    author,
} = require("../../package.json");

module.exports = {
    productName,
    appId,
    copyright: `Copyright © ${new Date().getUTCFullYear()} ${author.name}`,
    files: [
        "dist/vite/**/*",
        "resources/**/*",
        "environments/electron/**/*",
        "node_modules/**/*",
        "package.json",
    ],
    directories: {
        buildResources: "resources",
        output: "dist/electron",
    },
    extraMetadata: {
        main: "environments/electron/main.js",
    },
    protocols: [
        {
            name: "deep-link",
            schemes: [productCode],
        },
    ],
    publish: ["github"],
    win: {
        target: "nsis",
    },
    nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: true,
        perMachine: true,
    },
    linux: {
        target: "AppImage",
    },
    mac: {
        target: "dmg",
        category: "public.app-category.entertainment",
    },
    generateUpdatesFilesForAllChannels: true,
};
