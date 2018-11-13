
export default {
    "extraBabelPlugins": [
        ["module-resolver", {
            "alias": {
                "components": "./src/components",
                "pages": "./src/pages",
                "assets": "./src/assets",
                "utils": "./src/utils",
                "services": "./src/services",
                "servers": "./src/servers"
            }
        }],
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ]
}