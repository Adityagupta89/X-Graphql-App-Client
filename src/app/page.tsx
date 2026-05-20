"use client";
export default function Home() {
  return <div className="grid grid-cols-3  ">
    <div>
     left sidebar
    </div>
    <div className="col-span-2">
      Main feed
    </div>
    <div>
     right content
    </div>
  </div>;
}
