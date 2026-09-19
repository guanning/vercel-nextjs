import { NextRequest, NextResponse } from "next/server";
import db from '@/public/db'

export async function POST(request: Request) {
    const data = await request.json();
    await db.update(({Posts}) => Posts.unshift({
        id: Math.random().toString(36).slice(-8),
        ...data,
    }));
    return NextResponse.json({ 
        code: 0,
        message: "add article successfully",
        data: data,
    });
}



export async function GET(request: NextRequest) {
   const searchParams = request.nextUrl.searchParams;
    const pagenum = Number(searchParams.get('pagenum')) || 1;
    const pagesize = Number(searchParams.get('pagesize')) || 10;
    const query = searchParams.get('query') || '';

    const data = db.data.Posts;

    let filteredData = query ? data.filter(item =>{
        const {id, ...rest} = item;
        return Object.values(rest).some(value => value.toString().toLowerCase().includes(query.toLowerCase()));
    }) : data;

    const start = (pagenum - 1) * pagesize;
    const end = start + pagesize;
    const paginatedData = filteredData.slice(start, end);
    const total = filteredData.length;
    const totalpages = Math.ceil(total / pagesize);
    const hasnext = pagenum < totalpages;
    const hasprev = pagenum > 1;
    const nextpage = hasnext ? pagenum + 1 : null;
    const prevpage = hasprev ? pagenum - 1 : null;

    const result = {
        list: paginatedData,
        total: total,
        totalpages: totalpages,
        hasnext: hasnext,
        hasprev: hasprev,
        nextpage: nextpage,
        prevpage: prevpage,
    };

    return NextResponse.json({
        code: 0,
        message: "get articles successfully",
        data: result,
    });
}
