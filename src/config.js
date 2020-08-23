const dev = {
  STRIPE_KEY:
    "pk_test_51HHwTcDgSmyzZUnYGqr1KYIjfD6mjmevmg4HUjNnMB1k6fITMQO4VIskVbX0mU2N3gAeipTe3QVhZ1FAkcfmL3HW00xhEKqj90",
  s3: {
    REGION: "us-east-2",
    BUCKET: "gsweb-notes-app-2-api-dev-attachmentsbucket-dh42vd5yzbrg",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://kb5r6ui9hc.execute-api.us-east-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_dBqOODknA",
    APP_CLIENT_ID: "66feqg6e27jfcacdf4f8vjoir7",
    IDENTITY_POOL_ID: "us-east-2:a2517a4f-e273-4774-803f-b70a0c4101dd",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51HHwTcDgSmyzZUnYGqr1KYIjfD6mjmevmg4HUjNnMB1k6fITMQO4VIskVbX0mU2N3gAeipTe3QVhZ1FAkcfmL3HW00xhEKqj90",
  s3: {
    REGION: "us-east-2",
    BUCKET: "gsweb-notes-app-2-api-prod-attachmentsbucket-1mc3qobv7pn78",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://4nyg28chx7.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_K57SeRiFv",
    APP_CLIENT_ID: "7rn51rujrm55jb6cfie4g4vh0",
    IDENTITY_POOL_ID: "us-east-2:802545ca-32ff-464a-92b9-38fd690466e1",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;
export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
