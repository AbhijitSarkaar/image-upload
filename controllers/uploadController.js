const {
    S3Client,
    ListBucketsCommand,
    PutObjectCommand,
} = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const fs = require("fs");
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
    // const command = new ListBucketsCommand({});

    console.log(req.files);

    // const fileStream = fs.createReadStream("public/uploads/product-4.jpg");
    // console.log(fileStream);

    // const command = new PutObjectCommand({
    //     Bucket: "full-stack-project-files",
    //     Key: "product-image.jpg",
    //     Body: req.files[0],
    // });

    // const target = {
    //     Bucket: "full-stack-project-files",
    //     Key: "product-image.jpg",
    //     Body: req.files[0],
    // };
    try {
        // const response = await client.send(command);
        // console.log(response);
        // const { Owner, Buckets } = await client.send(command);
        // console.log(
        //     `${Owner.DisplayName} owns ${Buckets.length} bucket${
        //         Buckets.length === 1 ? "" : "s"
        //     }:`
        // );
        // console.log(`${Buckets.map((b) => ` • ${b.Name}`).join("\n")}`);
        //s3 image upload
        const upload = new Upload({
            client,
            params: {
                Bucket: "full-stack-project-files",
                Key: "product-image-1.jpg",
                // Body: fileStream,
                Body: req.files[0].buffer,
            },
            // queueSize: 3,
        });
        upload.on("httpUploadProgress", (progress) => {
            console.log(progress);
        });
        await upload.done();
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
