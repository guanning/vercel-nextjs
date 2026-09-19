import React from 'react'
import { photos } from '@/public/data'
import Image from 'next/image'


export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    console.log(id);
    const photo = photos.find((photo) => +photo.id === +id)
    if (!photo) {
        return <div>Photo not found</div>
    }
    return (
        <div className='container mx-auto pt-8'>
            <Image src={photo.src} alt="photo" width={400} height={400} className='rounded-lg block mx-auto'/>

            <div className='border-2 border-dashed p-3 border-gray-500 rounded-lg mt-6'>
                <p>
                    <strong>Title</strong>{photo?.alt}    
                </p>
                <p>
                    <strong>Price</strong>{photo?.price}    
                </p>
                <p>
                    <strong>Description</strong> insert description here  
                </p>
            </div>
        </div>
    )
}
