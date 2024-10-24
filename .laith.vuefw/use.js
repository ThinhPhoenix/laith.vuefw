function _0x4c3f(_0x14cb94, _0x1d96e4) {
  const _0x1b3ab2 = _0x1b3a();
  return (
    (_0x4c3f = function (_0x4c3f8d, _0x4a1198) {
      _0x4c3f8d = _0x4c3f8d - 0x6e;
      let _0x4cfe20 = _0x1b3ab2[_0x4c3f8d];
      return _0x4cfe20;
    }),
    _0x4c3f(_0x14cb94, _0x1d96e4)
  );
}
function _0x1b3a() {
  const _0x1cbc5a = [
    "12730110NtCiZh",
    "red",
    ".use(createPinia());\x20//#pinia",
    "tailwind\x20🌊",
    "pinia",
    "2521705EdnWPR",
    "669KgXilG",
    "Error\x20updating\x20main.js:\x20",
    "\x1b[30m%s\x1b[0m\x1b[34m%s\x1b[0m",
    "4362300NdsJiN",
    "\x1b[31m",
    "\x1b[34m",
    "Use\x20\x27npm\x20run\x20use\x27\x20for\x20all\x20available\x20commmands.",
    "/**\x20@type\x20{import(\x27tailwindcss\x27).Config}\x20*/\x0aexport\x20default\x20{\x0a\x20\x20content:\x20[\x0a\x20\x20\x20\x20\x22./src/**/*.{html,js,jsx,ts,tsx,vue}\x22,\x0a\x20\x20\x20\x20\x22./public/**/*.html\x22,\x0a\x20\x20\x20\x20\x22./*.html\x22\x0a\x20\x20],\x0a\x20\x20theme:\x20{\x0a\x20\x20\x20\x20extend:\x20{},\x0a\x20\x20},\x0a\x20\x20plugins:\x20[],\x0a}",
    "forEach",
    "import\x20\x27./tw.css\x27",
    "src/tw.css",
    "tailwind.config.js",
    "npm\x20install\x20pinia",
    "orange",
    ".\x20npm\x20run\x20use",
    "src",
    "tailwind",
    "//@pinia",
    "28fwWHda",
    "import\x20{\x20createPinia\x20}\x20from\x20\x27pinia\x27;\x20//@pinia",
    "src/main.js",
    "message",
    "18504FiqOMa",
    "error",
    "Unknown\x20command:",
    "405858YcNMaH",
    "src/stores/counter.js",
    "//@tailwind",
    "toLowerCase",
    "216666wjMcYf",
    "Error:\x20",
    "src/stores",
    "751984IZOclI",
    "includes",
    "\x1b[33m",
    "utf8",
    "inherit",
    "blue",
    "\x20installation\x20complete!",
    "1jyRJsV",
    "slice",
    "log",
    "reset",
    "@tailwind\x20base;\x0a@tailwind\x20components;\x0a@tailwind\x20utilities;",
    "\x1b[0m",
    "import\x20\x27./tw.css\x27;\x20//@tailwind",
    ".use(createPinia())",
    "Running\x20TailwindCSS\x20installation...",
    "npx\x20tailwindcss\x20init\x20-p",
  ];
  _0x1b3a = function () {
    return _0x1cbc5a;
  };
  return _0x1b3a();
}
const _0x78b3 = _0x4c3f;
(function (_0x4be584, _0x36caa6) {
  const _0x345210 = _0x4c3f,
    _0x26e146 = _0x4be584();
  while (!![]) {
    try {
      const _0x10d610 =
        (-parseInt(_0x345210(0xa1)) / 0x1) *
          (-parseInt(_0x345210(0x93)) / 0x2) +
        (-parseInt(_0x345210(0x7a)) / 0x3) *
          (-parseInt(_0x345210(0x90)) / 0x4) +
        -parseInt(_0x345210(0x79)) / 0x5 +
        parseInt(_0x345210(0x7d)) / 0x6 +
        (-parseInt(_0x345210(0x8c)) / 0x7) *
          (-parseInt(_0x345210(0x9a)) / 0x8) +
        parseInt(_0x345210(0x97)) / 0x9 +
        -parseInt(_0x345210(0x74)) / 0xa;
      if (_0x10d610 === _0x36caa6) break;
      else _0x26e146["push"](_0x26e146["shift"]());
    } catch (_0x204e7c) {
      _0x26e146["push"](_0x26e146["shift"]());
    }
  }
})(_0x1b3a, 0x8ea63);
import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
const colors = {
  orange: "\x1b[38;5;214m",
  blue: _0x78b3(0x7f),
  reset: _0x78b3(0x6f),
  green: "\x1b[32m",
  red: _0x78b3(0x7e),
  yellow: _0x78b3(0x9c),
};
function runCommand(_0x122479) {
  const _0x1eebcd = _0x78b3;
  try {
    return execSync(_0x122479, { stdio: _0x1eebcd(0x9e) }), !![];
  } catch (_0xaf43b6) {
    return (
      console["error"](
        colors[_0x1eebcd(0x75)] +
          "Error:\x20" +
          _0xaf43b6[_0x1eebcd(0x8f)] +
          colors["reset"]
      ),
      ![]
    );
  }
}
function createFile(_0x15000f, _0x387616) {
  const _0x53e05d = _0x78b3;
  try {
    return writeFileSync(_0x15000f, _0x387616), !![];
  } catch (_0x2f4cef) {
    return (
      console[_0x53e05d(0x91)](
        colors[_0x53e05d(0x75)] +
          "Error\x20creating\x20" +
          _0x15000f +
          ":\x20" +
          _0x2f4cef[_0x53e05d(0x8f)] +
          colors[_0x53e05d(0xa4)]
      ),
      ![]
    );
  }
}
function updateMainFile(_0x559207) {
  const _0x3e473b = _0x78b3;
  try {
    let _0x1c366f = readFileSync(_0x3e473b(0x8e), _0x3e473b(0x9d));
    if (_0x559207 === _0x3e473b(0x8a))
      !_0x1c366f[_0x3e473b(0x9b)](_0x3e473b(0x83)) &&
        (_0x1c366f = _0x1c366f["replace"](_0x3e473b(0x95), _0x3e473b(0x70)));
    else
      _0x559207 === _0x3e473b(0x78) &&
        (!_0x1c366f["includes"](
          "import\x20{\x20createPinia\x20}\x20from\x20\x27pinia\x27"
        ) &&
          (_0x1c366f = _0x1c366f["replace"](_0x3e473b(0x8b), _0x3e473b(0x8d))),
        !_0x1c366f["includes"](_0x3e473b(0x71)) &&
          (_0x1c366f = _0x1c366f["replace"]("//#pinia", _0x3e473b(0x76))));
    return writeFileSync("src/main.js", _0x1c366f), !![];
  } catch (_0x57dc0a) {
    return (
      console[_0x3e473b(0x91)](
        colors["red"] +
          _0x3e473b(0x7b) +
          _0x57dc0a[_0x3e473b(0x8f)] +
          colors[_0x3e473b(0xa4)]
      ),
      ![]
    );
  }
}
async function setupTailwind() {
  const _0x50e6e8 = _0x78b3;
  if (
    !runCommand(
      "npm\x20install\x20-D\x20tailwindcss\x20postcss\x20autoprefixer"
    )
  )
    return ![];
  if (!runCommand(_0x50e6e8(0x73))) return ![];
  const _0xbd25e2 = _0x50e6e8(0x81),
    _0x116427 = _0x50e6e8(0x6e);
  if (!createFile(_0x50e6e8(0x85), _0xbd25e2)) return ![];
  !existsSync("src") && mkdirSync(_0x50e6e8(0x89));
  if (!createFile(_0x50e6e8(0x84), _0x116427)) return ![];
  if (!updateMainFile(_0x50e6e8(0x8a))) return ![];
  return !![];
}
async function setupPinia() {
  const _0x7690f6 = _0x78b3;
  if (!runCommand(_0x7690f6(0x86))) return ![];
  const _0x53ebf9 =
    "import\x20{\x20defineStore\x20}\x20from\x20\x27pinia\x27;\x0a\x0aexport\x20const\x20useCounterStore\x20=\x20defineStore(\x27counter\x27,\x20{\x0a\x20\x20state:\x20()\x20=>\x20({\x20count:\x200\x20}),\x0a\x20\x20actions:\x20{\x0a\x20\x20\x20\x20increment()\x20{\x0a\x20\x20\x20\x20\x20\x20this.count++;\x0a\x20\x20\x20\x20},\x0a\x20\x20\x20\x20decrement()\x20{\x0a\x20\x20\x20\x20\x20\x20this.count--;\x0a\x20\x20\x20\x20},\x0a\x20\x20\x20\x20reset()\x20{\x0a\x20\x20\x20\x20\x20\x20this.count\x20=\x200;\x0a\x20\x20\x20\x20},\x0a\x20\x20},\x0a});";
  !existsSync(_0x7690f6(0x99)) && mkdirSync(_0x7690f6(0x99));
  if (!createFile(_0x7690f6(0x94), _0x53ebf9)) return ![];
  if (!updateMainFile("pinia")) return ![];
  return !![];
}
const pinia = async () => {
    const _0x42e7b8 = _0x78b3;
    console["log"](
      colors[_0x42e7b8(0x87)] +
        "Running\x20Pinia\x20installation..." +
        colors[_0x42e7b8(0xa4)]
    );
    try {
      const _0x36439a = await setupPinia();
      _0x36439a &&
        console[_0x42e7b8(0xa3)](
          colors["yellow"] +
            "🍍\x20Pinia" +
            colors[_0x42e7b8(0xa4)] +
            colors[_0x42e7b8(0x9f)] +
            _0x42e7b8(0xa0) +
            colors["reset"]
        );
    } catch (_0x219508) {
      console[_0x42e7b8(0x91)](
        colors["red"] +
          "Error:\x20" +
          _0x219508[_0x42e7b8(0x8f)] +
          colors[_0x42e7b8(0xa4)]
      );
    }
  },
  tailwind = async () => {
    const _0x9ca353 = _0x78b3;
    console[_0x9ca353(0xa3)](
      colors[_0x9ca353(0x87)] + _0x9ca353(0x72) + colors[_0x9ca353(0xa4)]
    );
    try {
      const _0xdbb90e = await setupTailwind();
      _0xdbb90e &&
        console[_0x9ca353(0xa3)](
          colors["yellow"] +
            "🌊\x20TailwindCSS" +
            colors[_0x9ca353(0xa4)] +
            colors[_0x9ca353(0x9f)] +
            _0x9ca353(0xa0) +
            colors["reset"]
        );
    } catch (_0x44b641) {
      console["error"](
        colors[_0x9ca353(0x75)] +
          _0x9ca353(0x98) +
          _0x44b641[_0x9ca353(0x8f)] +
          colors["reset"]
      );
    }
  },
  args = process["argv"][_0x78b3(0xa2)](0x2),
  command = args[0x0]?.[_0x78b3(0x96)]() || "",
  help = () => {
    const _0x53d9f7 = _0x78b3;
    ls[_0x53d9f7(0x82)]((_0x2aaf63, _0x2f07ef) => {
      const _0x58cb2b = _0x53d9f7;
      console[_0x58cb2b(0xa3)](
        _0x58cb2b(0x7c),
        _0x2f07ef + 0x1 + _0x58cb2b(0x88),
        "\x20" + _0x2aaf63
      );
    }),
      console[_0x53d9f7(0xa3)]();
  },
  ls = ["pinia\x20🍍", _0x78b3(0x77)];
switch (command) {
  case "":
    help();
    break;
  case _0x78b3(0x78):
    pinia();
    break;
  case _0x78b3(0x8a):
    tailwind();
    break;
  default:
    console["error"](
      colors[_0x78b3(0x75)] + _0x78b3(0x92) + colors["reset"] + "\x20" + command
    ),
      console[_0x78b3(0xa3)](
        colors["yellow"] + _0x78b3(0x80) + colors["reset"]
      );
}
