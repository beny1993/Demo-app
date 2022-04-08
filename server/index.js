import { TribeClient } from "@tribeplatform/gql-client"

const client = new TribeClient({
    clientId: "5a353896-7ea4d70e865f",
    clientSecret: "13cb58fdf097425fa3d34d765c599dd5",
    graphqlUrl: "https://app.tribe.so/graphql",
})

client.generateToken({
    networkId: "haP4DXwkNo",
    memberId: "7T8J4V0EwA",
}).then(async accessToken => {
    console.log(accessToken)
})

