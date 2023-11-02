import GoogleMapView from "@/components/map/GoogleMapView";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="mt-20 padding-x padding-y max-width h-screen">
        <div
          className="grid 
    grid-cols-1
    md:grid-cols-4 h-screen"
        >
          <div className="p-3 bg-slate-100">
          
          </div>
          <div className=" col-span-3 bg-blue-100">
          <GoogleMapView/>

            
          </div>
        </div>
      </div>
    </main>
  );
}
