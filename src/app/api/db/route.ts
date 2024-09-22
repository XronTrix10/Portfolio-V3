import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextResponse } from "next/server";

export const runtime = "edge";

const KV_KEY = "VISIT_COUNT";

/**
 * It handles the GET request for the /api/db route.
 * It increments the value in the KV store by 1 and returns the new value.
 * @returns {Promise<NextResponse>} the response object.
 */
export const GET = async (): Promise<NextResponse> => {
  const myKv = getRequestContext().env.PORTFOLIO_STORAGE;

  try {
    const value = await myKv.get(KV_KEY);

    // If the value is not found, set it to 1
    if (!value) {
      const new_value = 1;
      await myKv.put(KV_KEY, String(new_value));
      return new NextResponse(String(new_value + 1), {
        status: 200,
      });
    }

    // If the value is found, increment it by 1
    await myKv.put(KV_KEY, String(Number(value) + 1));
    return new NextResponse(JSON.stringify({ count: Number(value) + 1 }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ status: 500, error }), {
      status: 500,
    });
  }
};
