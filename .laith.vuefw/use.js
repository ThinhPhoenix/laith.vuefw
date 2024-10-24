/**
 * @use <command>
 * @example
 * `npm run use pinia`
 * This will run the 'pinia' command.
 * Setup and Config automatically
 * @returns `🍍 Pinia installation complete!`
 * @author thinhphoenix
 * @version 1.0.1
 */
const _0x824e8b = _0x5a66;
(function (_0x113d5c, _0x4d1226) {
  const _0x18dca4 = _0x5a66,
    _0x9b6a3a = _0x113d5c();
  while (!![]) {
    try {
      const _0xe01262 =
        (parseInt(_0x18dca4(0xe9)) / 0x1) * (-parseInt(_0x18dca4(0xdf)) / 0x2) +
        -parseInt(_0x18dca4(0xcf)) / 0x3 +
        (parseInt(_0x18dca4(0xea)) / 0x4) * (-parseInt(_0x18dca4(0xeb)) / 0x5) +
        (parseInt(_0x18dca4(0xcd)) / 0x6) * (parseInt(_0x18dca4(0xcb)) / 0x7) +
        parseInt(_0x18dca4(0xe4)) / 0x8 +
        -parseInt(_0x18dca4(0xdb)) / 0x9 +
        (parseInt(_0x18dca4(0xda)) / 0xa) * (parseInt(_0x18dca4(0xdc)) / 0xb);
      if (_0xe01262 === _0x4d1226) break;
      else _0x9b6a3a["push"](_0x9b6a3a["shift"]());
    } catch (_0x1ea1b0) {
      _0x9b6a3a["push"](_0x9b6a3a["shift"]());
    }
  }
})(_0x1c6d, 0x8d310);
import { execSync } from "child_process";
function _0x5a66(_0x2d9b2a, _0xd87152) {
  const _0x1c6d7c = _0x1c6d();
  return (
    (_0x5a66 = function (_0x5a66af, _0x576cf9) {
      _0x5a66af = _0x5a66af - 0xc7;
      let _0x3c99d9 = _0x1c6d7c[_0x5a66af];
      return _0x3c99d9;
    }),
    _0x5a66(_0x2d9b2a, _0xd87152)
  );
}
function _0x1c6d() {
  const _0x4824ad = [
    "1299816LlGEfl",
    "error",
    "utf8",
    "main.ts",
    "stores",
    "Error\x20creating\x20counter\x20store:",
    "Error\x20creating\x20stores\x20directory:",
    "\x0aimport\x20{\x20defineStore\x20}\x20from\x20\x27pinia\x27;\x0a\x0aexport\x20const\x20useCounterStore\x20=\x20defineStore(\x27counter\x27,\x20{\x0a\x20\x20\x20\x20state:\x20()\x20=>\x20({\x0a\x20\x20\x20\x20\x20\x20\x20\x20count:\x200,\x0a\x20\x20\x20\x20}),\x0a\x20\x20\x20\x20actions:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20increment()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20this.count++;\x0a\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20decrement()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20this.count--;\x0a\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20reset()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20this.count\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20},\x0a});\x0a",
    "writeFileSync",
    "cwd",
    "main.js\x20or\x20main.ts\x20not\x20found!",
    "3750820nuTNDH",
    "4074138gVEBfB",
    "44VpGPKq",
    "counter.js",
    "inherit",
    "2750NJCjhH",
    "Error\x20uninstalling\x20Pinia:",
    "existsSync",
    ".use(createPinia())\x20//\x20#pinia",
    "includes",
    "966696emoDmu",
    "//\x20#pinia",
    "join",
    "readFileSync",
    "slice",
    "815DvGVxa",
    "350636kmILDE",
    "5dUDQYv",
    "argv",
    "main.js",
    "Running\x20Pinia\x20installation...",
    "src",
    "7tolemv",
    "Error\x20installing\x20Pinia:",
    "6308358DhApWs",
    "replace",
  ];
  _0x1c6d = function () {
    return _0x4824ad;
  };
  return _0x1c6d();
}
import * as _0x1045e1 from "fs";
import * as _0x7d3d9 from "path";
const args = process[_0x824e8b(0xc7)][_0x824e8b(0xe8)](0x2),
  command = args[_0x824e8b(0xe6)]("\x20"),
  pinia = () => {
    const _0x5ab96 = _0x824e8b;
    console["log"]("\x1b[38;5;208m%s\x1b[0m", _0x5ab96(0xc9)),
      uninstallPinia(),
      installPinia(),
      createStoresDirectory(),
      updateMainFile(),
      createCounterStore(),
      console["log"](
        "\x1b[33m%s\x1b[0m\x1b[34m%s\x1b[0m",
        "🍍\x20Pinia\x20",
        "installation\x20complete!"
      );
  };
function uninstallPinia() {
  const _0x125385 = _0x824e8b;
  try {
    execSync("npm\x20uninstall\x20pinia", { stdio: _0x125385(0xde) });
  } catch (_0x1e4042) {
    console[_0x125385(0xd0)](_0x125385(0xe0), _0x1e4042);
  }
}
function installPinia() {
  const _0x475ec4 = _0x824e8b;
  try {
    execSync("npm\x20i\x20pinia", { stdio: "inherit" });
  } catch (_0x31af0e) {
    console[_0x475ec4(0xd0)](_0x475ec4(0xcc), _0x31af0e);
  }
}
function createStoresDirectory() {
  const _0x3f87bf = _0x824e8b,
    _0x4579a4 = _0x7d3d9["join"](process[_0x3f87bf(0xd8)](), "src", "stores");
  try {
    !_0x1045e1[_0x3f87bf(0xe1)](_0x4579a4) &&
      _0x1045e1["mkdirSync"](_0x4579a4, { recursive: !![] });
  } catch (_0x2d59c8) {
    console[_0x3f87bf(0xd0)](_0x3f87bf(0xd5), _0x2d59c8);
  }
}
function createCounterStore() {
  const _0x26cd76 = _0x824e8b,
    _0x1c2a27 = _0x7d3d9[_0x26cd76(0xe6)](
      process[_0x26cd76(0xd8)](),
      "src",
      _0x26cd76(0xd3),
      _0x26cd76(0xdd)
    ),
    _0x568ddb = _0x26cd76(0xd6);
  try {
    _0x1045e1[_0x26cd76(0xd7)](_0x1c2a27, _0x568ddb, _0x26cd76(0xd1));
  } catch (_0xc9576) {
    console[_0x26cd76(0xd0)](_0x26cd76(0xd4), _0xc9576);
  }
}
function updateMainFile() {
  const _0x3fc211 = _0x824e8b,
    _0x3afe40 = _0x7d3d9[_0x3fc211(0xe6)](
      process[_0x3fc211(0xd8)](),
      _0x3fc211(0xca),
      _0x3fc211(0xc8)
    ),
    _0x186cd4 = _0x7d3d9["join"](
      process[_0x3fc211(0xd8)](),
      _0x3fc211(0xca),
      _0x3fc211(0xd2)
    ),
    _0x4ac9d1 = _0x1045e1["existsSync"](_0x186cd4) ? _0x186cd4 : _0x3afe40;
  if (!_0x1045e1["existsSync"](_0x4ac9d1)) {
    console[_0x3fc211(0xd0)](_0x3fc211(0xd9));
    return;
  }
  try {
    const _0x5548d9 = _0x1045e1[_0x3fc211(0xe7)](_0x4ac9d1, "utf8");
    if (
      _0x5548d9[_0x3fc211(0xe3)](
        "import\x20{\x20createPinia\x20}\x20from\x20\x27pinia\x27"
      )
    )
      return;
    const _0x2b31ce = _0x5548d9[_0x3fc211(0xce)](
        "//\x20@pinia",
        "import\x20{\x20createPinia\x20}\x20from\x20\x27pinia\x27;\x20//\x20@pinia"
      ),
      _0x5978c1 = _0x2b31ce[_0x3fc211(0xce)](_0x3fc211(0xe5), _0x3fc211(0xe2));
    _0x1045e1[_0x3fc211(0xd7)](_0x4ac9d1, _0x5978c1, _0x3fc211(0xd1));
  } catch (_0x1d204b) {
    console[_0x3fc211(0xd0)]("Error\x20updating\x20main.js:", _0x1d204b);
  }
}

(function (_0x46ce09, _0x261b27) {
  const _0x4a26f5 = _0x3251,
    _0x2d80e4 = _0x46ce09();
  while (!![]) {
    try {
      const _0x53d93a =
        (parseInt(_0x4a26f5(0x78)) / 0x1) * (-parseInt(_0x4a26f5(0x82)) / 0x2) +
        parseInt(_0x4a26f5(0x7a)) / 0x3 +
        -parseInt(_0x4a26f5(0x7e)) / 0x4 +
        (-parseInt(_0x4a26f5(0x79)) / 0x5) *
          (-parseInt(_0x4a26f5(0x7d)) / 0x6) +
        (-parseInt(_0x4a26f5(0x7f)) / 0x7) *
          (-parseInt(_0x4a26f5(0x84)) / 0x8) +
        -parseInt(_0x4a26f5(0x7c)) / 0x9 +
        (-parseInt(_0x4a26f5(0x7b)) / 0xa) * (-parseInt(_0x4a26f5(0x80)) / 0xb);
      if (_0x53d93a === _0x261b27) break;
      else _0x2d80e4["push"](_0x2d80e4["shift"]());
    } catch (_0x118faa) {
      _0x2d80e4["push"](_0x2d80e4["shift"]());
    }
  }
})(_0x268d, 0x9702c);
function _0x3251(_0x113b03, _0x26a6eb) {
  const _0x268de2 = _0x268d();
  return (
    (_0x3251 = function (_0x325169, _0x323d54) {
      _0x325169 = _0x325169 - 0x78;
      let _0x13f8ce = _0x268de2[_0x325169];
      return _0x13f8ce;
    }),
    _0x3251(_0x113b03, _0x26a6eb)
  );
}
const help = () => {
  const _0x1258d1 = _0x3251;
  ls[_0x1258d1(0x81)]((_0x5be96f, _0x4ae370) => {
    const _0x285e71 = _0x1258d1;
    console[_0x285e71(0x83)](
      _0x285e71(0x85),
      _0x4ae370 + 0x1 + ".\x20npm\x20run\x20use",
      "\x20" + _0x5be96f
    );
  });
};
function _0x268d() {
  const _0x239e59 = [
    "forEach",
    "698316SjpOUs",
    "log",
    "91128yYuJXT",
    "\x1b[30m%s\x1b[0m\x1b[34m%s\x1b[0m",
    "3XHesAZ",
    "50CDEpjY",
    "532008irldWF",
    "830OkoppF",
    "10728288mSkrgA",
    "337338nGHsWV",
    "2088180oEcSyH",
    "539LfRVMB",
    "233706WYySck",
  ];
  _0x268d = function () {
    return _0x239e59;
  };
  return _0x268d();
}

// !libs
const ls = [`pinia`, `tailwind`];

// !cmds
switch (command.toLowerCase()) {
  case ``:
    help();
    break;
  case `pinia`:
    pinia();
    break;
  default:
    console.error("⚠️ Unknown command. Please provide a valid command.");
    console.log(
      "\x1b[33m%s\x1b[0m",
      "Run `npm run use` for all available command"
    );
    break;
}
