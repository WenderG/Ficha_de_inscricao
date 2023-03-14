const mongoose = require("mongoose")

async function main() {
    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://Wender:l0gPqG0CpP8sRYmL@cluster0.gl2icmy.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado ao banco de dados!")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;
