import { useRef } from 'react';

const videos = [
  {
    title: 'Depoimento 1',
    src: 'https://www.youtube.com/embed/4TKLi5JltfU',
  },
  {
    title: 'Depoimento 2',
    src: 'https://www.youtube.com/embed/ulPSKPlzaxM',
  },
  {
    title: 'Depoimento 3',
    src: 'https://www.youtube.com/embed/DZ0SsXC6zQc',
  },
  {
    title: 'Depoimento 4',
    src: 'https://www.youtube.com/embed/cAkNtiDVPr8',
  },
  {
    title: 'Depoimento 5',
    src: 'https://www.youtube.com/embed/TV2kIJ2Shaw',
  },
  {
    title: 'Depoimento 6',
    src: 'https://www.youtube.com/embed/k9ilFPO8xrA',
  },
];

export default function VideoTestimonialsSection() {
  const stripRef = useRef(null);

  const handleScroll = () => {
    if (!stripRef.current) return;
    stripRef.current.scrollBy({ left: 420, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900 mb-4">
            A opinião de quem usa e recomenda
          </h2>
          <p className="text-[clamp(1rem,2.4vw,1.125rem)] text-gray-600 max-w-2xl mx-auto">
            Milhares de negócios digitais já confiam no Único Drop para
            automatizar suas vendas e economizar tempo.
          </p>
        </div>

        <div
          ref={stripRef}
          className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        >
          {videos.map((video) => (
            <div
              key={video.src}
              className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px]"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src={video.src}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={handleScroll}
            className="bg-[#2472b3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f5f95] transition"
          >
            Ver mais depoimentos &gt;&gt;
          </button>
        </div>
      </div>
    </section>
  );
}
