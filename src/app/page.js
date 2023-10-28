import React from 'react';
import Hero from "@/components/Home/Hero";
import Latest from "@/components/Home/Latest";
import PlainLayout from "@/components/Master/Plain-Layout";

// Prisma Direct Database Data Pull
// Hero // Latest/Populer/ Trending

const Page = () => {
    return (
        <PlainLayout>
            <Hero/>
            <Latest/>
        </PlainLayout>
    );
};

export default Page;