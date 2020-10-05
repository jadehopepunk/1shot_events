const EmojiWord = ({ children }) => (
  <strong className="font-semibold" style={{ whiteSpace: "nowrap" }}>
    {children}
  </strong>
);

const Hero = () => (
  <div className="bg-blue-400 px-4 py-20">
    <div className="flex flex-col align-middle">
      <h1 className="text-5xl text-center font-medium mb-2">1Shot</h1>
      <p className="text-3xl text-center mb-4">
        Create a free, untracked <EmojiWord>event 🗓️</EmojiWord> for your <EmojiWord>friends 😎</EmojiWord> that{" "}
        <EmojiWord>deletes itself 👻</EmojiWord> when you're done
      </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-teal-400 px-4 py-6">
        <h2 className="text-4xl mb-20">What?</h2>
      </div>
      <div className="bg-gray-400 px-4 py-6">
        <h2 className="text-4xl">When?</h2>
      </div>
      <div className="bg-gray-300 px-4 py-6">
        <h2 className="text-4xl">Who?</h2>
      </div>
    </div>
  );
}
