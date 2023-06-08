const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");
const { fileURLToPath } = require("url");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
    .keys({
        PORT: Joi.number().default(3000),
        MONGO_URL: Joi.string().required().description("MongoDb url"),
        SMTP_HOST: Joi.string().description("server that will send the emails"),
        SMTP_PORT: Joi.number().description(
            "port to connect to the email server"
        ),
        SMTP_USERNAME: Joi.string().description("username for email server"),
        SMTP_PASSWORD: Joi.string().description("password for email server"),
        EMAIL_FROM: Joi.string().description(
            "Email id from which the email will be sent"
        ),
    })
    .unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    console.log(envVars.MONGO_URL);
    throw new Error(`Config validation error: ${error.message}`);
}

const objectContent = {
    port: envVars.PORT,
    mongoose: {
        url: envVars.MONGO_URL + "",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    email: {
        smtp: {
            host: envVars.SMTP_HOST,
            port: envVars.SMTP_PORT,
            auth: {
                user: envVars.SMTP_USERNAME,
                pass: envVars.SMTP_PASSWORD,
            },
        },
    },
    from: envVars.EMAIL_FROM,
};

module.exports = objectContent;
