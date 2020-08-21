export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "gsweb-notes-app-uploads",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://hr7wsf86g5.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_h0tTVSObq",
    APP_CLIENT_ID: "3r7o9jb9mr9kknaa5bqlmpo9cg",
    IDENTITY_POOL_ID: "us-east-2:aa274064-f435-43f6-9d56-3da32eb1bd80",
  },
  social: {
    FB: "713668255858640",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HHwTcDgSmyzZUnYGqr1KYIjfD6mjmevmg4HUjNnMB1k6fITMQO4VIskVbX0mU2N3gAeipTe3QVhZ1FAkcfmL3HW00xhEKqj90"
};
