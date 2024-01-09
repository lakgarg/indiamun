import { useEffect, useRef } from 'react'
import React from 'react';

const VideoPlayer = () => {

    const cloudinaryRef = useRef()
    const videoRef = useRef()

    useEffect(() => {
        if(cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name : 'dw8r04943'
        })
    }, [])

    return (
        <video ref = {videoRef} data-cld-public-id = './samples/animals/kitten-playing' width = {940} height = {560} controls/>
    )
}

export default VideoPlayer