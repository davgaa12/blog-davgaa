import { HomePage } from "@/components/page/HomePage";

export default function Home() {
  return (
    <div>
      <main>
        <div className="video-background">
          <iframe
            className="fixed h-screen pointer-events-none z-0 w-screen scale-[1.2] "
            // src="https://www.youtube.com/embed/Y1BmjPeatI4?autoplay=1&loop=1&playlist=Y1BmjPeatI4&mute=1"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
        <HomePage />
      </main>
      ;
    </div>
  );
}
