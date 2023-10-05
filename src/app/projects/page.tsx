import Navbar from "@/app/comp/Navbar";


export default function Projects() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-6xl font-bold">
                    My Projects </h1>
                {projectsGallery()}
            </main>
        </>

    )
}

function projectsGallery() {
    return (
        <>
            <div className="flex flex-row">
                <div className="p-4">
                    <p>test</p>
                </div>
                <div className="p-4">
                    <p>test</p>
                </div>
                <div className="p-4">
                    <p>test</p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="p-4">
                    <p>test</p>
                </div>
                <div className="p-4">
                    <p>test</p>
                </div>
                <div className="p-4">
                    <p>test</p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="p-4">
                    <p>test</p>
                </div>
                <div className="p-4">
                    <p>test</p>
                </div>
                <div className="p-4">
                    <p>test</p>
                </div>
            </div>
        </>
    )
}
