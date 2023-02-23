import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

async function handler(req : NextApiRequest, res : NextApiResponse) {
   await client.user.create({
    data : {
        name :"sunoddk",
        email : "sunokryu3sdf19@gmail.com"
    },
   });
   res.json({
    ok : true,
   });
}

export default handler;