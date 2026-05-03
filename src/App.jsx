import { useState, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/seed/card1/600/400",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/seed/card2/600/400",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/seed/card3/600/400",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/seed/card4/600/400",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/seed/card5/600/400",
    },
  ],
};

// ─── PART 1: NAVBAR ──────────────────────────────────────────────────────────
function Navbar({ active, setActive }) {
  const menus = ["Home", "Profile", "Contact"];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      <span className="text-xl font-bold tracking-tight text-gray-900">
        Nayla Pramesti Adhina
      </span>
      <div className="flex gap-2">
        {menus.map((menu) => (
          <button
            key={menu}
            onClick={() => setActive(menu)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === menu
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {menu}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── PART 2: CARD ────────────────────────────────────────────────────────────
function Card({ id, title, body, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
      {/* Image wrapper — guaranteed visible height */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://picsum.photos/600/400?random=${id}`;
          }}
        />
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Post #{id}
        </span>
        <h2 className="text-base font-semibold text-gray-900 leading-snug">
          {title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line flex-1">
          {body}
        </p>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Latest Posts</h2>
      <p className="text-sm text-gray-500 mb-8">
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.results.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

// ─── PROFILE PAGE ────────────────────────────────────────────────────────────
function ProfilePage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Banner */}
        <div className="h-28 bg-gradient-to-r from-gray-800 to-gray-600" />

        {/* Avatar + Info */}
        <div className="px-8 pb-8">
          <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white text-2xl font-bold border-4 border-white -mt-10 mb-4 shadow-md">
            NP
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Nayla Pramesti Adhina
          </h2>
          <p className="text-sm text-gray-500 mt-1 mb-6">
            Undergraduate of Computer Engineering
          </p>

          <hr className="border-gray-100 mb-6" />

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎂</span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">
                  Date of Birth
                </p>
                <p className="text-sm font-medium text-gray-800">
                  January 1, 2007
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">🎓</span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">
                  Major
                </p>
                <p className="text-sm font-medium text-gray-800">
                  Undergraduate of Computer Engineering
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">💼</span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/nayla-pramesti-adhina-821a44320/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline break-all"
                >
                  linkedin.com/in/nayla-pramesti-adhina-821a44320
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────
function ContactPage() {
  return (
    <section className="max-w-lg mx-auto px-6 py-16 text-center">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 flex flex-col items-center gap-6">
        {/* Instagram-style icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-md"
          style={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          }}
        >
          📸
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Me</h2>
          <p className="text-sm text-gray-500">
            Want to get in touch? Feel free to reach out through my Instagram!
          </p>
        </div>

        <a
          href="https://www.instagram.com/naylapramesti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold shadow-md transition-opacity hover:opacity-90"
          style={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
          }}
        >
          Visit @naylapramesti
        </a>

        <p className="text-xs text-gray-400">Opens Instagram in a new tab</p>
      </div>
    </section>
  );
}

// ─── PART 3: COUNTER (useState + useEffect) ──────────────────────────────────
function Counter() {
  const [count, setCount] = useState(0);

  // useEffect: alert fires exactly when count reaches 10
  useEffect(() => {
    if (count === 10) {
      alert("10 is divisible by 5");
    }
  }, [count]);

  return (
    <section className="max-w-lg mx-auto px-6 py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Counter Demo</h2>
      <p className="text-sm text-gray-500 mb-10">
        Click <strong>+</strong> or <strong>−</strong> to change the number.
        An alert will pop up when the count reaches{" "}
        <span className="font-semibold text-gray-700">10</span>. Hit{" "}
        <strong>Reset</strong> to start over.
      </p>

      {/* Circle display */}
      <div className="w-36 h-36 rounded-full bg-gray-900 text-white flex flex-col items-center justify-center mx-auto mb-10 shadow-lg">
        <span className="text-5xl font-bold leading-none">{count}</span>
        <span className="text-xs tracking-widest mt-1 text-gray-400 uppercase">
          count
        </span>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="w-14 h-14 rounded-full bg-white border border-gray-200 text-2xl font-bold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
        >
          −
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-5 py-2 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
        >
          Reset
        </button>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="w-14 h-14 rounded-full bg-gray-900 text-white text-2xl font-bold hover:bg-gray-700 active:scale-95 transition-all shadow-sm"
        >
          +
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Alert fires when count reaches exactly <strong>10</strong>
      </p>
    </section>
  );
}

// ─── ROOT APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar active={active} setActive={setActive} />

      {active === "Home" && (
        <>
          <hr className="border-gray-100" />
          <CardGrid />
          <hr className="border-gray-100" />
          <Counter />
        </>
      )}

      {active === "Profile" && <ProfilePage />}

      {active === "Contact" && <ContactPage />}
    </div>
  );
}
