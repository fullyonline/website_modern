import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex flex-col h-5/6">
            <div className="flex justify-center">
                <Image
                    src="/portrait.png"
                    alt="Picture of R. S."
                    width={200}
                    height={200}
                    style={{ borderRadius: '50%' }}
                />
            </div>
            <div className="flex justify-center">
                <p className="text-xl">Romano Sabbatella</p>
            </div>
        </main>
    );
}
