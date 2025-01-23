import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const blog = await response.json();
//   console.log(blog);
  return(
    <div className="border bg-black/30 max-w-xl px-6 py-5 rounded-lg text-white/90 border-white/50 mt-20 shadow-lg mx-auto">
    <div className="space-y-3">
      <p className="text-sm text-white/60">
        <span className="font-semibold text-[#FFD700]">Blog ID :</span> {blog.id}
      </p>
  
      <h3 className="text-2xl font-semibold text-[#00E5FF] tracking-wide">
        {blog.title}
      </h3>
  
      <div className="text-base text-white/80 leading-relaxed">
        {blog.body}
      </div>
  
      
      <div className="mt-5 text-sm text-white/50 border-t border-white/30 pt-3">
        UserId : {blog.userId}
      </div>
    </div>
  </div>
  
  
  )

}
