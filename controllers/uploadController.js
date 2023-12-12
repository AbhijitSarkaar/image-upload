const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

const dotenv = require("dotenv");
dotenv.config();

let client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    },
});

const uploadPage = (req, res) => {
    res.render("pages/upload");
};

const uploadFiles = async (req, res) => {
    const command = new ListBucketsCommand({});

    try {
        const { Owner, Buckets } = await client.send(command);
        console.log(
            `${Owner.DisplayName} owns ${Buckets.length} bucket${
                Buckets.length === 1 ? "" : "s"
            }:`
        );
        console.log(`${Buckets.map((b) => ` • ${b.Name}`).join("\n")}`);
    } catch (error) {
        console.log(error);
    }

    res.json({
        message: "upload successful",
    });
};

module.exports = {
    uploadPage,
    uploadFiles,
};
