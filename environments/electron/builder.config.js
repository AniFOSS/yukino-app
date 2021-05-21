module.exports = {
    productName: "Yukino",
    appId: "io.github.zyrouge.yukino",
    copyright: "Copyright © 2021 Zyrouge",
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
    target: "nsis",
    publish: ["github"],
    nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: true,
    },
    generateUpdatesFilesForAllChannels: true,
};
