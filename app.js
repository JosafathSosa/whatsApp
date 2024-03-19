const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { GoogleAuth } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const { log } = require("console");
const cors = require("cors");

// TODO: Define Issuer ID
const issuerId = "3388000000022329932";

// TODO: Define Class ID
const classId = `${issuerId}.codelab_class`;

const baseUrl = "https://walletobjects.googleapis.com/walletobjects/v1";

const credentials = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

const httpClient = new GoogleAuth({
  credentials: credentials,
  scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
});

async function createPassClass(req, res) {
  // TODO: Create a Generic pass class
  let genericClass = {
    id: `${classId}`,
    classTemplateInfo: {
      cardTemplateOverride: {
        cardRowTemplateInfos: [
          {
            twoItems: {
              startItem: {
                firstValue: {
                  fields: [
                    {
                      fieldPath: 'object.textModulesData["points"]',
                    },
                  ],
                },
              },
              endItem: {
                firstValue: {
                  fields: [
                    {
                      fieldPath: 'object.textModulesData["contacts"]',
                    },
                  ],
                },
              },
            },
          },
        ],
      },
      detailsTemplateOverride: {
        detailsItemInfos: [
          {
            item: {
              firstValue: {
                fields: [
                  {
                    fieldPath: 'class.imageModulesData["event_banner"]',
                  },
                ],
              },
            },
          },
          {
            item: {
              firstValue: {
                fields: [
                  {
                    fieldPath: 'class.textModulesData["game_overview"]',
                  },
                ],
              },
            },
          },
          {
            item: {
              firstValue: {
                fields: [
                  {
                    fieldPath: 'class.linksModuleData.uris["official_site"]',
                  },
                ],
              },
            },
          },
        ],
      },
    },
    imageModulesData: [
      {
        mainImage: {
          sourceUri: {
            uri: "https://storage.googleapis.com/wallet-lab-tools-codelab-artifacts-public/google-io-2021-card.png",
          },
          contentDescription: {
            defaultValue: {
              language: "en-US",
              value: "Google I/O 2022 Banner",
            },
          },
        },
        id: "event_banner",
      },
    ],
    textModulesData: [
      {
        header: "Gather points meeting new people at Google I/O",
        body: "Join the game and accumulate points in this badge by meeting other attendees in the event.",
        id: "game_overview",
      },
    ],
    linksModuleData: {
      uris: [
        {
          uri: "https://io.google/2022/",
          description: "Official I/O '22 Site",
          id: "official_site",
        },
      ],
    },
  };

  let response;
  try {
    // Check if the class exists already
    response = await httpClient.request({
      url: `${baseUrl}/genericClass/${classId}`,
      method: "GET",
    });

    console.log("Class already exists");
    console.log(response);
  } catch (err) {
    if (err.response && err.response.status === 404) {
      // Class does not exist
      // Create it now
      response = await httpClient.request({
        url: `${baseUrl}/genericClass`,
        method: "POST",
        data: genericClass,
      });

      console.log("Class insert response");
      console.log(response);
    } else {
      // Something else went wrong
      console.log(err);
      res.send("Something went wrong...check the console logs!");
    }
  }
}

async function createPassObject(req, res) {
  // TODO: Create a new Generic pass for the user
  let objectSuffix = `${req.body.email.replace(/[^\w.-]/g, "_")}`;
  let objectId = `${issuerId}.${objectSuffix}`;

  //console.log(objectSuffix);

  let genericObject = {
    id: `${objectId}`,
    classId: classId,
    genericType: "GENERIC_TYPE_UNSPECIFIED",
    hexBackgroundColor: "#4285f4",
    logo: {
      sourceUri: {
        uri: "https://storage.googleapis.com/wallet-lab-tools-codelab-artifacts-public/pass_google_logo.jpg",
      },
    },
    cardTitle: {
      defaultValue: {
        language: "en",
        value: "Google I/O '22",
      },
    },
    subheader: {
      defaultValue: {
        language: "en",
        value: "Origen:",
      },
    },
    header: {
      defaultValue: {
        language: "en",
        value: "Aguascalientes",
      },
    },
    barcode: {
      type: "QR_CODE",
      value: `${objectId}`,
    },
    heroImage: {
      sourceUri: {
        uri: "https://storage.googleapis.com/wallet-lab-tools-codelab-artifacts-public/google-io-hero-demo-only.jpg",
      },
    },
    textModulesData: [
      {
        header: "POINTS",
        body: "1234",
        id: "points",
      },
      {
        header: "CONTACTS",
        body: "20",
        id: "contacts",
      },
    ],
  };

  // TODO: Create the signed JWT and link
  const claims = {
    iss: credentials.client_email,
    aud: "google",
    origins: [],
    typ: "savetowallet",
    payload: {
      genericObjects: [genericObject],
    },
  };

  const token = jwt.sign(claims, credentials.private_key, {
    algorithm: "RS256",
  });
  const saveUrl = `https://pay.google.com/gp/v/save/${token}`;

  //console.log(saveUrl);
  res.send(`${saveUrl}`);
}

const app = express();

app.use(cors({ origin: "http://localhost:8081" })); // Replace with your web app's origin

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.post("/", async (req, res) => {
  await createPassClass(req, res);
  await createPassObject(req, res);
});

// Your backend logic here...

app.listen(3000, () => console.log("Server listening on port 3000"));
