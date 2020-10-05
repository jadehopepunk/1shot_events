const EmojiWord = ({ children }) => (
  <strong className="font-semibold" style={{ whiteSpace: "nowrap" }}>
    {children}
  </strong>
);

const Hero = () => (
  <div className="bg-blue-400 px-4 py-10">
    <div className="flex flex-col align-middle">
      <h1 className="text-5xl text-center font-medium mb-2">1Shot</h1>
      <p className="text-3xl text-center mb-4">
        Create a free, untracked <EmojiWord>event 🗓️</EmojiWord> for your <EmojiWord>friends 😎</EmojiWord> that{" "}
        <EmojiWord>deletes itself 👻</EmojiWord> when you're done
      </p>
      <button class="bg-transparent text-blue-800 font-semibold py-2 px-4 flex flex-row justify-center">
        more details
        <svg className="h-6 w-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
