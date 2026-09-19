import { NextResponse } from "next/server";
import db from "@/public/db";


export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const { id } = await params;
    await db.update(({Posts}) => {
        const index = Posts.findIndex((post) => post.id === id);
        if (index !== -1) {
            Posts.splice(index, 1);
        }
    });
    return NextResponse.json({
      code: 0,
      id,
      message: "remove article successfully",
    });
  }

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{id: string}> }
  ) {
    const {id} = await params;
    const data = await request.json(); // { title, content }

    let index = -1;
    await db.update(({Posts}) => {
        index = Posts.findIndex((post) => post.id === id);
        if (index !== -1) {
            Posts[index] = {...Posts[index], ...data};
        }
    });
    return NextResponse.json({
      code: 0,
      message: "PATCH article successfully",
      data: db.data.Posts[index],
    });
  }

  export async function GET(
    request: Request,
    { params }: { params: Promise<{id: string}> }
  ) {
    const {id} = await params;
    const article = await db.data.Posts.find((post) => post.id === id);
    return NextResponse.json({
      code: 0,
      message: "GET article successfully",
      data: article,
    });
  }