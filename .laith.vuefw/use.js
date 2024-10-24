const _0x41e38d = _0x5834;
(function (_0x2196da, _0x533f58) {
  const _0x301d5f = _0x5834,
    _0x562d5a = _0x2196da();
  while (!![]) {
    try {
      const _0x130d61 =
        parseInt(_0x301d5f(0xa8)) / 0x1 +
        parseInt(_0x301d5f(0x8b)) / 0x2 +
        parseInt(_0x301d5f(0x85)) / 0x3 +
        (parseInt(_0x301d5f(0xa7)) / 0x4) * (-parseInt(_0x301d5f(0x89)) / 0x5) +
        (parseInt(_0x301d5f(0x9f)) / 0x6) * (-parseInt(_0x301d5f(0x84)) / 0x7) +
        (parseInt(_0x301d5f(0x8a)) / 0x8) * (-parseInt(_0x301d5f(0x90)) / 0x9) +
        parseInt(_0x301d5f(0xb0)) / 0xa;
      if (_0x130d61 === _0x533f58) break;
      else _0x562d5a["push"](_0x562d5a["shift"]());
    } catch (_0x3076f9) {
      _0x562d5a["push"](_0x562d5a["shift"]());
    }
  }
})(_0x5aed, 0x2ed8d);
import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
function _0x5aed() {
  const _0x50ba35 = [
    "\x1b[0m",
    "892fNFokE",
    "326437RUxgSX",
    "tailwind",
    "\x1b[38;5;214m",
    "🌊\x20TailwindCSS",
    "red",
    "/**\x20@type\x20{import(\x27tailwindcss\x27).Config}\x20*/\x0aexport\x20default\x20{\x0a\x20\x20content:\x20[\x0a\x20\x20\x20\x20\x22./src/**/*.{html,js,jsx,ts,tsx,vue}\x22,\x0a\x20\x20\x20\x20\x22./public/**/*.html\x22,\x0a\x20\x20\x20\x20\x22./*.html\x22\x0a\x20\x20],\x0a\x20\x20theme:\x20{\x0a\x20\x20\x20\x20extend:\x20{},\x0a\x20\x20},\x0a\x20\x20plugins:\x20[],\x0a}",
    "//\x20@tailwind",
    "src/main.js",
    "425640Zxxljp",
    "\x20installation\x20complete!",
    "import\x20{\x20createPinia\x20}\x20from\x20\x27pinia\x27;\x20//\x20@pinia",
    "reset",
    "pinia\x20🍍",
    ".use(createPinia())\x20//\x20#pinia",
    "npm\x20install\x20pinia",
    "error",
    "blue",
    "🍍\x20Pinia",
    "8533BxUVKt",
    "356193Kiivhg",
    "pinia",
    "//\x20@pinia",
    "message",
    "5825njQTTI",
    "2136392XSDDZp",
    "598522NlMUVV",
    "Error\x20updating\x20main.js:\x20",
    "import\x20{\x20defineStore\x20}\x20from\x20\x27pinia\x27;\x0a\x0aexport\x20const\x20useCounterStore\x20=\x20defineStore(\x27counter\x27,\x20{\x0a\x20\x20state:\x20()\x20=>\x20({\x20count:\x200\x20}),\x0a\x20\x20actions:\x20{\x0a\x20\x20\x20\x20increment()\x20{\x0a\x20\x20\x20\x20\x20\x20this.count++;\x0a\x20\x20\x20\x20},\x0a\x20\x20\x20\x20decrement()\x20{\x0a\x20\x20\x20\x20\x20\x20this.count--;\x0a\x20\x20\x20\x20},\x0a\x20\x20\x20\x20reset()\x20{\x0a\x20\x20\x20\x20\x20\x20this.count\x20=\x200;\x0a\x20\x20\x20\x20},\x0a\x20\x20},\x0a});",
    "src/tw.css",
    "tailwind\x20🌊",
    "9kJxqly",
    "\x1b[30m%s\x1b[0m\x1b[34m%s\x1b[0m",
    "utf8",
    "orange",
    "Error\x20creating\x20",
    "src/stores/counter.js",
    "includes",
    "inherit",
    "\x1b[32m",
    "import\x20\x27./tw.css\x27;\x20//\x20@tailwind",
    "//\x20#pinia",
    "import\x20\x27./tw.css\x27",
    "Running\x20TailwindCSS\x20installation...",
    "Error:\x20",
    "Running\x20Pinia\x20installation...",
    "336NYpMaj",
    "yellow",
    "log",
    "Use\x20\x27npm\x20run\x20use\x27\x20for\x20all\x20available\x20commmands.",
    "forEach",
    "npx\x20tailwindcss\x20init\x20-p",
    "argv",
  ];
  _0x5aed = function () {
    return _0x50ba35;
  };
  return _0x5aed();
}
const colors = {
  orange: _0x41e38d(0xaa),
  blue: "\x1b[34m",
  reset: _0x41e38d(0xa6),
  green: _0x41e38d(0x98),
  red: "\x1b[31m",
  yellow: "\x1b[33m",
};
function runCommand(_0x551c2b) {
  const _0x568c0b = _0x41e38d;
  try {
    return execSync(_0x551c2b, { stdio: _0x568c0b(0x97) }), !![];
  } catch (_0x2103a8) {
    return (
      console[_0x568c0b(0x81)](
        colors[_0x568c0b(0xac)] +
          _0x568c0b(0x9d) +
          _0x2103a8[_0x568c0b(0x88)] +
          colors[_0x568c0b(0xb3)]
      ),
      ![]
    );
  }
}
function createFile(_0x20a6df, _0x5a1e8f) {
  const _0x1ae8f0 = _0x41e38d;
  try {
    return writeFileSync(_0x20a6df, _0x5a1e8f), !![];
  } catch (_0x4c359f) {
    return (
      console[_0x1ae8f0(0x81)](
        colors[_0x1ae8f0(0xac)] +
          _0x1ae8f0(0x94) +
          _0x20a6df +
          ":\x20" +
          _0x4c359f[_0x1ae8f0(0x88)] +
          colors["reset"]
      ),
      ![]
    );
  }
}
function _0x5834(_0x542bd9, _0x342aeb) {
  const _0x5aeded = _0x5aed();
  return (
    (_0x5834 = function (_0x5834c5, _0x3c747c) {
      _0x5834c5 = _0x5834c5 - 0x7e;
      let _0xab6e0f = _0x5aeded[_0x5834c5];
      return _0xab6e0f;
    }),
    _0x5834(_0x542bd9, _0x342aeb)
  );
}
function updateMainFile(_0x5812a5) {
  const _0x6512c7 = _0x41e38d;
  try {
    let _0x2b053b = readFileSync("src/main.js", _0x6512c7(0x92));
    if (_0x5812a5 === _0x6512c7(0xa9))
      !_0x2b053b[_0x6512c7(0x96)](_0x6512c7(0x9b)) &&
        (_0x2b053b = _0x2b053b["replace"](_0x6512c7(0xae), _0x6512c7(0x99)));
    else
      _0x5812a5 === _0x6512c7(0x86) &&
        (!_0x2b053b[_0x6512c7(0x96)](
          "import\x20{\x20createPinia\x20}\x20from\x20\x27pinia\x27"
        ) &&
          (_0x2b053b = _0x2b053b["replace"](_0x6512c7(0x87), _0x6512c7(0xb2))),
        !_0x2b053b[_0x6512c7(0x96)](".use(createPinia())") &&
          (_0x2b053b = _0x2b053b["replace"](_0x6512c7(0x9a), _0x6512c7(0x7f))));
    return writeFileSync(_0x6512c7(0xaf), _0x2b053b), !![];
  } catch (_0x25ad81) {
    return (
      console[_0x6512c7(0x81)](
        colors[_0x6512c7(0xac)] +
          _0x6512c7(0x8c) +
          _0x25ad81[_0x6512c7(0x88)] +
          colors[_0x6512c7(0xb3)]
      ),
      ![]
    );
  }
}
async function setupTailwind() {
  const _0xee067b = _0x41e38d;
  if (
    !runCommand(
      "npm\x20install\x20-D\x20tailwindcss\x20postcss\x20autoprefixer"
    )
  )
    return ![];
  if (!runCommand(_0xee067b(0xa4))) return ![];
  const _0x42470b = _0xee067b(0xad),
    _0x4f4178 =
      "@tailwind\x20base;\x0a@tailwind\x20components;\x0a@tailwind\x20utilities;";
  if (!createFile("tailwind.config.js", _0x42470b)) return ![];
  !existsSync("src") && mkdirSync("src");
  if (!createFile(_0xee067b(0x8e), _0x4f4178)) return ![];
  if (!updateMainFile(_0xee067b(0xa9))) return ![];
  return !![];
}
async function setupPinia() {
  const _0x53f023 = _0x41e38d;
  if (!runCommand(_0x53f023(0x80))) return ![];
  const _0x2386ae = _0x53f023(0x8d);
  !existsSync("src/stores") && mkdirSync("src/stores");
  if (!createFile(_0x53f023(0x95), _0x2386ae)) return ![];
  if (!updateMainFile(_0x53f023(0x86))) return ![];
  return !![];
}
const pinia = async () => {
    const _0x5f3a77 = _0x41e38d;
    console[_0x5f3a77(0xa1)](
      colors[_0x5f3a77(0x93)] + _0x5f3a77(0x9e) + colors[_0x5f3a77(0xb3)]
    );
    try {
      const _0x4cc766 = await setupPinia();
      _0x4cc766 &&
        console[_0x5f3a77(0xa1)](
          colors[_0x5f3a77(0xa0)] +
            _0x5f3a77(0x83) +
            colors[_0x5f3a77(0xb3)] +
            colors[_0x5f3a77(0x82)] +
            _0x5f3a77(0xb1) +
            colors[_0x5f3a77(0xb3)]
        );
    } catch (_0x154182) {
      console[_0x5f3a77(0x81)](
        colors[_0x5f3a77(0xac)] +
          _0x5f3a77(0x9d) +
          _0x154182[_0x5f3a77(0x88)] +
          colors[_0x5f3a77(0xb3)]
      );
    }
  },
  tailwind = async () => {
    const _0x246814 = _0x41e38d;
    console["log"](
      colors["orange"] + _0x246814(0x9c) + colors[_0x246814(0xb3)]
    );
    try {
      const _0x3d4dd6 = await setupTailwind();
      _0x3d4dd6 &&
        console[_0x246814(0xa1)](
          colors[_0x246814(0xa0)] +
            _0x246814(0xab) +
            colors[_0x246814(0xb3)] +
            colors[_0x246814(0x82)] +
            _0x246814(0xb1) +
            colors["reset"]
        );
    } catch (_0x43db8c) {
      console[_0x246814(0x81)](
        colors[_0x246814(0xac)] +
          _0x246814(0x9d) +
          _0x43db8c[_0x246814(0x88)] +
          colors[_0x246814(0xb3)]
      );
    }
  },
  args = process[_0x41e38d(0xa5)]["slice"](0x2),
  command = args[0x0]?.["toLowerCase"]() || "",
  help = () => {
    const _0x22b80a = _0x41e38d;
    ls[_0x22b80a(0xa3)]((_0x2bea6a, _0x430aaf) => {
      const _0x380321 = _0x22b80a;
      console["log"](
        _0x380321(0x91),
        _0x430aaf + 0x1 + ".\x20npm\x20run\x20use",
        "\x20" + _0x2bea6a
      );
    }),
      console[_0x22b80a(0xa1)]();
  },
  ls = [_0x41e38d(0x7e), _0x41e38d(0x8f)];
switch (command) {
  case "":
    help();
    break;
  case _0x41e38d(0x86):
    pinia();
    break;
  case _0x41e38d(0xa9):
    tailwind();
    break;
  default:
    console["error"](
      colors["red"] +
        "Unknown\x20command:" +
        colors[_0x41e38d(0xb3)] +
        "\x20" +
        command
    ),
      console[_0x41e38d(0xa1)](
        colors[_0x41e38d(0xa0)] + _0x41e38d(0xa2) + colors[_0x41e38d(0xb3)]
      );
}