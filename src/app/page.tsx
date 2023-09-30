import Navbar from "@/app/comp/Navbar";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-6xl font-bold text-center">
                    Welcome to tutdev </h1>
            </main>
        </>

    )
}
