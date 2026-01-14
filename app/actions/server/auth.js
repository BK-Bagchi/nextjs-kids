"use server";

import bcrypt from "bcryptjs";
import { collections, dbConnect } from "@/app/lib/dbConnect";

export const postUser = async (user) => {
  const { email, name, password } = user;
  //check payload
  if (!email || !password) return null;

  //check user
  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) return null;

  //create user
  const newUser = {
    provider: "credentials",
    email,
    name,
    password: await bcrypt.hash(password, 10),
    role: "user",
  };

  //insert user
  const result = await dbConnect(collections.USERS).insertOne(newUser);
  if (result.insertedId)
    return { ...newUser, insertedId: result.insertedId.toString() };
};
