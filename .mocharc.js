module.exports = {
    recursive:true,
    slow:75,
    timeout:5000,
    spec:[
        'src/**/*.test.js'
    ],
    extension: ["ts"],
    require: "ts-node/register"
}