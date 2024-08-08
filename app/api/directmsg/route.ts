import { auth } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import DirectMsgModel from '@/lib/models/DirectMsgModel';

export const POST = auth(async (...args: any) => {
  const [req] = args;
  const { name, msg, email, phone } = await req.json();

  try {
    await dbConnect();
    // @ts-ignore
    let dmsg = await DirectMsgModel({
      name,
      msg,
      email,
      phone,
    });
    await dmsg.save();
    return Response.json(
      { message: 'Review Successfully added' },
      {
        status: 201,
      },
    );
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      },
    );
  }
}) as any;

export const GET = auth(async (...args: any) => {
  try {
    await dbConnect();

    let directmsgs = await DirectMsgModel.find().lean();
    return Response.json(directmsgs);
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      },
    );
  }
}) as any;
