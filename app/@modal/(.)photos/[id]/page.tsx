'use client'
import React from 'react'
import { photos } from '@/public/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const router = useRouter()
    const { id } = await params
    const photo = photos.find((photo) => +photo.id === +id)
    if (!photo) {
        return <div>Photo not found</div>
    }
    return (
        <div className='flex justify-center items-center fixed inset-0 bg-gray-500/80' onClick={() => router.back()}>
            <Image src={photo.src} alt="photo" width={400} height={400} className='rounded-lg block mx-auto' onClick={(e) => e.stopPropagation()} />
        </div>
    )
}
