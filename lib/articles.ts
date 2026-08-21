export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: string;
  updated: string;
  featured?: boolean;
  difficulty: "Easy" | "Intermediate" | "Advanced";
  intro: string;
  steps: { title: string; body: string }[];
  notes?: string[];
  faq: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
};

export const articles: Article[] = [
  {
    slug: "gta-v-scripthookv-critical-error-fix",
    title: "GTA V ScriptHookV Critical Error: Complete Fix Guide",
    excerpt: "Fix ScriptHookV version mismatch, startup crashes, and broken single-player mods after a GTA V update.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "7 min read",
    updated: "August 2026",
    featured: false,
    difficulty: "Easy",
    intro: "ScriptHookV errors usually appear after GTA V updates because the installed hook no longer matches the current game build. This guide walks through a clean, low-risk troubleshooting order.",
    steps: [
      { title: "Confirm the game launches without mods", body: "Temporarily move ScriptHookV.dll, dinput8.dll, and your scripts folder out of the GTA V directory. Launch Story Mode once to verify the base game is healthy." },
      { title: "Check your GTA V build", body: "Open the game properties in your launcher and make sure the game has fully updated. A partially applied update can create the same symptoms as an outdated mod loader." },
      { title: "Install a compatible ScriptHookV build", body: "Download ScriptHookV only from its official source, replace the old files, and avoid mixing files from different releases." },
      { title: "Restore mods gradually", body: "Add your scripts and plugins back in small groups. If the crash returns, the last group contains the incompatible component." }
    ],
    notes: ["Back up your game folder before changing mod files.", "Never download DLL replacements from random file-hosting sites."],
    faq: [
      { q: "Why does ScriptHookV break after GTA V updates?", a: "Game updates can change executable internals that ScriptHookV depends on, so the hook may need an updated release." },
      { q: "Will reinstalling GTA V always fix it?", a: "No. If the issue is an outdated mod loader, reinstalling the whole game is usually unnecessary." }
    ]
  },
  {
    slug: "rust-steam-authticketcanceled-error",
    title: "Rust Steam AuthTicketCanceled Error: Causes & Fixes",
    excerpt: "What Steam AuthTicketCanceled means on Rust servers and the safest order to troubleshoot it.",
    category: "Rust",
    categorySlug: "rust",
    readTime: "6 min read",
    updated: "August 2026",
    featured: false,
    difficulty: "Intermediate",
    intro: "AuthTicketCanceled usually indicates that Steam authentication for the client session was canceled or invalidated. It can happen after reconnects, Steam restarts, stale sessions, or server-side auth interruptions.",
    steps: [
      { title: "Restart Steam completely", body: "Exit Rust and Steam, confirm Steam is no longer running in Task Manager, then start Steam again before launching Rust." },
      { title: "Verify Rust files", body: "Use Steam's installed-files verification to repair damaged or incomplete game files." },
      { title: "Check server and Steam status", body: "If many players disconnect at the same time, investigate server networking and Steam service status before changing client files." },
      { title: "Review server plugins", body: "For modded servers, test whether recently updated authentication or connection-related plugins are producing side effects." }
    ],
    faq: [
      { q: "Is AuthTicketCanceled a ban?", a: "By itself, no. It is an authentication/session message and does not automatically mean the account is banned." },
      { q: "Can a server plugin cause it?", a: "Plugins can contribute to connection handling issues, but Steam session state and network interruptions should also be checked." }
    ]
  },
  {
    slug: "roblox-datastore-not-saving",
    title: "Roblox DataStore Not Saving? Debug It Step by Step",
    excerpt: "A practical checklist for API access, request budgets, pcall handling, Studio testing, and save logic.",
    category: "Roblox",
    categorySlug: "roblox",
    readTime: "9 min read",
    updated: "August 2026",
    featured: false,
    difficulty: "Intermediate",
    intro: "DataStore bugs often look random because failures may come from permissions, request throttling, code paths, or unsafe shutdown handling. Diagnose each layer separately.",
    steps: [
      { title: "Check Studio API access", body: "Confirm the experience settings allow Studio to access API services when testing DataStores locally." },
      { title: "Wrap requests safely", body: "Use pcall around GetAsync, SetAsync, and UpdateAsync and log both success state and returned errors." },
      { title: "Avoid saving too frequently", body: "Batch sensible state changes and respect request budgets rather than saving every small value change." },
      { title: "Test shutdown saves carefully", body: "Use BindToClose for server shutdown logic, but do not rely on it as the only point where player data is written." }
    ],
    faq: [
      { q: "Why does DataStore work in game but not Studio?", a: "Studio API access may be disabled, or your test environment may not have the same conditions as a published server." },
      { q: "Should I use SetAsync or UpdateAsync?", a: "UpdateAsync is often safer when multiple servers may write the same key, while SetAsync can be appropriate for simpler controlled cases." }
    ]
  },
  {
    slug: "steam-game-crashing-on-launch",
    title: "Steam Game Crashing on Launch: 10 Fixes That Actually Help",
    excerpt: "Work from the least invasive checks to driver, overlay, runtime, and configuration fixes.",
    category: "Steam",
    categorySlug: "steam",
    readTime: "8 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "A launch crash can come from corrupt files, overlays, missing runtimes, driver problems, or broken per-game settings. Use a controlled sequence so you know which fix worked.",
    steps: [
      { title: "Verify installed files", body: "Start with Steam's verification tool before reinstalling the entire game." },
      { title: "Disable overlays temporarily", body: "Test Steam, Discord, GPU, recording, and monitoring overlays one at a time." },
      { title: "Reset local config", body: "Back up and rename the game's local configuration folder so the game can generate clean defaults." },
      { title: "Update graphics drivers", body: "Install a stable current driver and reboot before retesting." }
    ],
    faq: [
      { q: "Should I reinstall Windows for a game crash?", a: "Usually not. Windows reinstall should be a last resort after the game, drivers, runtimes, and hardware stability are ruled out." }
    ]
  },
  {
    slug: "increase-fps-windows-11-gaming",
    title: "How to Increase FPS on Windows 11 Without Risky Tweaks",
    excerpt: "Improve gaming performance using measurable settings instead of registry myths and unsafe debloat scripts.",
    category: "PC Gaming",
    categorySlug: "pc-gaming",
    readTime: "10 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "The best FPS improvements come from removing bottlenecks, choosing sensible in-game settings, and keeping the system stable. Avoid tweaks that trade reliability for tiny benchmark gains.",
    steps: [
      { title: "Measure first", body: "Record baseline FPS, frame times, CPU/GPU usage, temperatures, and memory use in the same game scene." },
      { title: "Tune graphics settings", body: "Lower expensive settings such as ray tracing, shadows, volumetrics, and resolution scale before reducing texture quality unnecessarily." },
      { title: "Close true background load", body: "Shut down applications that are actually consuming CPU, GPU, memory, or disk resources rather than disabling random Windows services." },
      { title: "Keep drivers and thermals healthy", body: "Update stable drivers and verify the CPU/GPU are not throttling under load." }
    ],
    faq: [
      { q: "Do gaming registry tweaks increase FPS?", a: "Many popular tweaks have little measurable benefit and some can reduce stability. Benchmark changes before keeping them." }
    ]
  },
  {
    slug: "rust-server-not-showing-list",
    title: "Rust Server Not Showing in Server List: Full Checklist",
    excerpt: "Diagnose ports, query settings, startup parameters, firewall rules, and server visibility.",
    category: "Game Servers",
    categorySlug: "game-servers",
    readTime: "9 min read",
    updated: "August 2026",
    difficulty: "Advanced",
    intro: "A healthy Rust server can still be invisible in the browser if its query path, networking, startup arguments, or firewall configuration is wrong.",
    steps: [
      { title: "Confirm the server is fully started", body: "Check the console for successful startup and verify there are no binding or Steam query errors." },
      { title: "Review ports", body: "Make sure game and query ports are distinct where required and forwarded through the correct router/firewall path." },
      { title: "Test direct connection", body: "Use the server's reachable address to determine whether the problem is discovery only or basic connectivity." },
      { title: "Verify public visibility settings", body: "Review hostname, identity, query configuration, and provider-level firewall rules." }
    ],
    faq: [
      { q: "Can I connect even if the server is not listed?", a: "Sometimes yes. A successful direct connection points toward a discovery/query issue rather than the game port itself." }
    ]
  },
  {
    slug: "gta-v-mods-folder-cleanup",
    title: "How to Clean a GTA V Mods Folder Without Reinstalling",
    excerpt: "A safe isolation method for broken ASI plugins, scripts, add-on packs, and config files.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "7 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "When a modded GTA V install stops launching, a clean isolation test is faster than blindly reinstalling everything.",
    steps: [
      { title: "Create a backup", body: "Copy important mod configs and save files before removing anything." },
      { title: "Disable loaders first", body: "Temporarily remove ASI loaders and script hooks to confirm whether the base game starts." },
      { title: "Restore by category", body: "Bring back plugins, scripts, and add-on content in small groups and test between each group." }
    ],
    faq: [{ q: "Do I need to delete my whole mods folder?", a: "No. Isolation and staged restoration usually identify the incompatible component with less work." }]
  },
  {
    slug: "roblox-studio-high-memory-usage",
    title: "Roblox Studio High Memory Usage: Find the Real Cause",
    excerpt: "Profile assets, connections, loops, instances, and test sessions before optimizing blindly.",
    category: "Roblox",
    categorySlug: "roblox",
    readTime: "8 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "High memory use can come from legitimate assets or from leaks caused by accumulating instances, references, events, and test-state leftovers.",
    steps: [
      { title: "Reproduce consistently", body: "Record memory before and after a repeatable sequence so you can distinguish a leak from normal loading." },
      { title: "Inspect growing instance counts", body: "Look for objects, connections, or cached data that keep increasing across repeated actions." },
      { title: "Clean up temporary objects", body: "Destroy temporary instances and disconnect events when their owning systems are no longer active." }
    ],
    faq: [{ q: "Is all high memory usage a leak?", a: "No. Large maps and assets can use substantial memory legitimately; the key signal is uncontrolled growth over time." }]
  },
  {
    slug: "pc-game-stuttering-fix",
    title: "PC Game Stuttering: How to Diagnose Frame-Time Spikes",
    excerpt: "Use frame-time behavior, utilization, temperatures, storage, and shader behavior to find the bottleneck.",
    category: "PC Gaming",
    categorySlug: "pc-gaming",
    readTime: "11 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "Average FPS can look excellent while a game still feels bad. Stutter is often better understood through frame-time spikes than through the FPS counter alone.",
    steps: [
      { title: "Track frame times", body: "Use a consistent benchmark path and note when spikes happen relative to loading, camera movement, combat, or traversal." },
      { title: "Check CPU/GPU saturation", body: "A fully utilized GPU behaves differently from a CPU-bound or background-process bottleneck." },
      { title: "Watch storage and memory", body: "Insufficient RAM, paging, slow storage, or asset streaming can create repeatable hitching." }
    ],
    faq: [{ q: "Can high FPS still stutter?", a: "Yes. Smoothness depends on frame-time consistency, not only the average frame rate." }]
  },
  {
    slug: "best-rust-server-ram-guide",
    title: "How Much RAM Does a Rust Server Need? Practical Sizing Guide",
    excerpt: "Estimate server memory based on map size, player count, plugins, entities, and headroom.",
    category: "Game Servers",
    categorySlug: "game-servers",
    readTime: "8 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "Rust server memory requirements vary with workload. Choose capacity based on your map, peak players, plugins, entity growth, and operating-system overhead rather than one fixed number.",
    steps: [
      { title: "Start from your workload", body: "Document map size, expected peak players, plugin count, and whether the server uses heavy custom content." },
      { title: "Measure peak usage", body: "Observe memory during busy periods and after the server has been running long enough to represent real entity growth." },
      { title: "Leave headroom", body: "Avoid sizing a host so tightly that normal spikes push it into swap or out-of-memory conditions." }
    ],
    faq: [{ q: "Is more RAM always faster?", a: "No. Extra capacity prevents memory pressure, but CPU performance, storage, network quality, and server configuration also matter." }]
  },
  {
    slug: "steam-download-slow-fix",
    title: "Steam Download Slow? Diagnose Network, Disk & Region Bottlenecks",
    excerpt: "Understand why Steam can show low download speed even when your internet plan is fast.",
    category: "Steam",
    categorySlug: "steam",
    readTime: "7 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "Steam downloads can be limited by server region, Wi-Fi quality, disk unpacking, antivirus scanning, or a bandwidth setting. Check the bottleneck before changing random settings.",
    steps: [
      { title: "Compare network and disk activity", body: "Steam may pause network transfer while unpacking or patching files, especially on slower drives." },
      { title: "Check bandwidth limits", body: "Verify Steam's download settings do not contain an accidental bandwidth cap." },
      { title: "Test another download region", body: "A nearby region can sometimes be overloaded. Compare results rather than assuming the closest region is always best." }
    ],
    faq: [{ q: "Why does Steam speed drop to zero?", a: "During some installs and patches Steam alternates between downloading and disk processing, which can temporarily reduce network throughput." }]
  },
  {
    slug: "game-server-port-forwarding-basics",
    title: "Game Server Port Forwarding Explained for Beginners",
    excerpt: "A clear mental model for LAN IPs, WAN IPs, UDP/TCP, NAT, firewalls, and CGNAT.",
    category: "Game Servers",
    categorySlug: "game-servers",
    readTime: "10 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "Port forwarding is easier when you separate local networking from public internet routing. This guide explains what each address and rule actually does.",
    steps: [
      { title: "Give the server a stable LAN address", body: "Use a DHCP reservation or static configuration so your router rule keeps pointing at the same machine." },
      { title: "Forward only required ports", body: "Use the ports and protocol required by the game server rather than opening broad ranges." },
      { title: "Check local firewall rules", body: "The router can forward traffic correctly while the host machine still blocks the application." },
      { title: "Rule out CGNAT", body: "If your ISP does not provide a directly reachable public IPv4 address, normal home-router port forwarding may not be enough." }
    ],
    faq: [{ q: "Do I need both TCP and UDP?", a: "Only if the specific server software requires both. Follow the official server documentation instead of forwarding everything." }]
  },

  {
    slug: "gta-v-battleye-not-launching-fix",
    title: "GTA V BattlEye Not Launching: Official Troubleshooting Order",
    excerpt: "Fix GTA Online BattlEye startup problems by checking launcher settings, launch arguments, antivirus conflicts, game files, and known graphics-mod conflicts.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "9 min read",
    updated: "August 2026",
    featured: true,
    difficulty: "Easy",
    intro: "If GTA Online refuses to start with BattlEye, avoid random DLL downloads or deleting Windows files. Rockstar's current support guidance points to a short list of checks: confirm BattlEye is enabled, remove custom launch arguments, start the game from its launcher, check antivirus interference, verify the installation, and isolate incompatible graphics modifications.",
    steps: [
      { title: "Confirm BattlEye is enabled", body: "Close GTA V, open Rockstar Games Launcher, go to Settings, and make sure the BattlEye checkbox is enabled. BattlEye is required for official GTA Online sessions on PC." },
      { title: "Clear custom launch arguments", body: "Check Rockstar Games Launcher, Steam, or Epic launch options and temporarily remove custom arguments. Rockstar specifically recommends leaving the relevant launch-argument field blank while troubleshooting BattlEye startup." },
      { title: "Launch from the actual platform", body: "Start GTA V directly from Rockstar Games Launcher, Steam, or Epic instead of a desktop shortcut, batch file, or Command Prompt. This helps ensure the anti-cheat wrapper starts with the game." },
      { title: "Check antivirus exclusions", body: "Locate the BattlEye folder inside your GTA V installation and add that folder to your antivirus exclusion list only if you trust the installation and are using the official game files." },
      { title: "Temporarily remove graphics injectors", body: "Rockstar lists tools such as ReShade and Special_K as known sources of BattlEye compatibility problems. Remove or disable them for a clean test before changing deeper system settings." },
      { title: "Verify files before reinstalling", body: "Use your launcher to verify GTA V's installed files. Reinstall the entire game only after the lower-risk checks fail, because verification can repair missing or changed files with much less disruption." }
    ],
    notes: ["Do not disable BattlEye if you are trying to join official GTA Online servers.", "Avoid downloading replacement system DLLs from third-party file sites."],
    faq: [
      { q: "Can I play GTA Online without BattlEye?", a: "Not on official GTA Online servers on PC. Rockstar notes that some third-party community server workflows may disable BattlEye, but official GTA Online requires it." },
      { q: "Can ReShade stop GTA V from launching with BattlEye?", a: "It can contribute to compatibility problems. Rockstar specifically identifies ReShade and Special_K as graphics-mod software that may not work properly with BattlEye." }
    ],
    sources: [
      { label: "Rockstar Support — BattlEye Troubleshooting for Grand Theft Auto V", url: "https://support.rockstargames.com/articles/ocorZr1KpQE8WvoHE3gBG/battleye-troubleshooting-for-grand-theft-auto-v" },
      { label: "Rockstar Support — GTA Online BattlEye FAQ", url: "https://support.rockstargames.com/articles/1nenwhZlVrJY6CTFeSS2Fx/grand-theft-auto-online-battleye-faq" }
    ]
  },
  {
    slug: "gta-v-err-gfx-state-fix",
    title: "GTA V ERR_GFX_STATE on PC: Fix Drivers, API and Fullscreen Issues",
    excerpt: "A source-backed troubleshooting path for GTA V ERR_GFX_STATE crashes, including driver rollback, DirectX 12, and fullscreen optimization checks.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "8 min read",
    updated: "August 2026",
    featured: true,
    difficulty: "Intermediate",
    intro: "ERR_GFX_STATE is a graphics-side GTA V crash that can appear during startup or gameplay. Rockstar's support flow focuses on graphics drivers first, then the graphics API, and finally Windows compatibility options. Work in that order so you can identify which change actually fixes the crash.",
    steps: [
      { title: "Update your GPU driver", body: "Install the current stable driver for your NVIDIA or AMD graphics card, reboot Windows, and test GTA V again. Driver problems are the first item in Rockstar's ERR_GFX_STATE guidance." },
      { title: "If the error started after a driver update, test an older driver", body: "A newer driver is not always better for a particular game build. If ERR_GFX_STATE appeared immediately after updating, roll back to a known-stable earlier driver and compare behavior." },
      { title: "Switch the graphics API to DirectX 12", body: "From GTA V's Graphics settings, unlock Advanced Settings and select DirectX 12 instead of Vulkan, then save and test. Rockstar lists this as a specific workaround for the error." },
      { title: "Disable fullscreen optimizations", body: "Open the GTA V installation folder, right-click GTAV.exe, open Properties, and use the Compatibility tab to disable fullscreen optimizations. Rockstar also pairs this check with running the executable as administrator." },
      { title: "Retest without overlays or graphics mods", body: "If the official fixes do not solve it, temporarily remove overlays, injectors, and graphics modifications so you can confirm the crash still occurs on a clean rendering path." },
      { title: "Verify the game installation", body: "Use the launcher verification feature to restore damaged or altered files before considering a full reinstall." }
    ],
    notes: ["Change one graphics variable at a time and retest.", "Record the driver version that works so you can restore it later if needed."],
    faq: [
      { q: "Should I use Vulkan or DirectX 12 for ERR_GFX_STATE?", a: "Rockstar's current support article specifically recommends testing DirectX 12 instead of Vulkan for this error." },
      { q: "Can the latest GPU driver still be the problem?", a: "Yes. Rockstar advises trying an older driver when the latest version is already installed and the error continues." }
    ],
    sources: [
      { label: "Rockstar Support — GTA V ERR_GFX_STATE", url: "https://support.rockstargames.com/articles/2vEOZW3tzshakakcwRvakg/grand-theft-auto-v-on-pc-crashing-with-err_gfx_state-error" }
    ]
  },
  {
    slug: "gta-v-error-code-134-fix",
    title: "GTA V Error Code 134: Fix Offline Verification and Update Problems",
    excerpt: "Error 134 often appears when GTA V is not fully up to date. Start with connectivity and file verification before reinstalling anything.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "6 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "GTA V Error Code 134 reports that Rockstar Game Services are unavailable and offline play could not be verified. Rockstar says the error can occur when the installed game version is out of date, particularly after a recent update has not been applied correctly.",
    steps: [
      { title: "Confirm your internet connection works", body: "Because the message involves Rockstar services and offline verification, first confirm Windows is online and the launcher can sign in normally." },
      { title: "Restart the launcher", body: "Close GTA V and fully exit Rockstar Games Launcher, Steam, or Epic. Reopen the launcher so it can check for pending game and launcher updates." },
      { title: "Let GTA V update completely", body: "Do not launch from an old shortcut while an update is pending. Wait for the platform to finish downloading and applying the current GTA V build." },
      { title: "Verify game files", body: "In Rockstar Games Launcher, select GTA V under My installed games and use Verify Integrity. Steam and Epic users can use their platform's equivalent verification feature." },
      { title: "Restart Windows and retest", body: "After verification, reboot the PC so launcher services and file locks are reset, then start GTA V from the platform library." }
    ],
    faq: [
      { q: "Is GTA V Error 134 usually a ban?", a: "Rockstar documents Code 134 as an update or verification problem, not as a ban message." },
      { q: "Do I need to reinstall GTA V?", a: "Usually not as a first step. Updating and verifying the existing installation is much faster and is the official starting point." }
    ],
    sources: [
      { label: "Rockstar Support — Error Code 134 when launching GTA V on PC", url: "https://support.rockstargames.com/articles/6ZP2u64Zzd9bhygsMNy06V/error-code-134-when-launching-grand-theft-auto-v-on-pc" }
    ]
  },
  {
    slug: "gta-v-battleye-driver-load-error-1072",
    title: "GTA V BattlEye Driver Load Error 1072: How to Repair the Service",
    excerpt: "Fix BattlEye Driver Load Error 1072 by checking antivirus interference, rebuilding the BattlEye service folder, and testing the launcher with administrator rights.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "7 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "BattlEye Driver Load Error 1072 means something on the PC is preventing the BattlEye service from installing or starting correctly. Rockstar's support article gives a focused recovery path that is safer than manually modifying Windows drivers or registry entries.",
    steps: [
      { title: "Add the official BattlEye folder to antivirus exceptions", body: "Find the BattlEye directory inside your legitimate GTA V installation and add that folder to your antivirus exclusions. A false positive can block the anti-cheat service from starting." },
      { title: "Delete the common BattlEye service directory", body: "Close GTA V, then remove the BattlEye service directory under C:\\Program Files (x86)\\Common Files\\BattlEye if it exists. Relaunching the game allows BattlEye to rebuild the service." },
      { title: "Run the BattlEye launcher as administrator", body: "Locate the GTA V BattlEye launcher executable, open Properties, and enable Run this program as an administrator in the Compatibility tab." },
      { title: "Remove incompatible graphics modification software", body: "For a clean test, remove or disable graphics injectors such as ReShade or Special_K, both of which Rockstar lists as known BattlEye compatibility concerns." },
      { title: "Verify GTA V files", body: "If the service still fails, verify the GTA V installation through your launcher so the BattlEye package and game executables are restored to their expected state." }
    ],
    notes: ["Only delete the BattlEye service folder described by Rockstar; do not delete random Windows driver files.", "Keep antivirus exclusions limited to the trusted game/BattlEye directory."],
    faq: [
      { q: "What causes BattlEye Error 1072?", a: "Rockstar describes it as something on the system preventing BattlEye from installing or starting, with antivirus interference being one common cause." },
      { q: "Will deleting the BattlEye service folder break GTA V?", a: "Rockstar includes this as a repair step; the service is recreated when the game starts again." }
    ],
    sources: [
      { label: "Rockstar Support — Failed to initialize BattlEye Service: Driver Load Error (1072)", url: "https://support.rockstargames.com/articles/2qX3EkMbz2ahbzhgJXSZ29/failed-to-initialize-battleye-service-driver-load-error-1072" }
    ]
  },
  {
    slug: "rust-eac-authentication-timeout-fix",
    title: "Rust EAC Authentication Timeout: Official Fixes in the Right Order",
    excerpt: "Repair Rust EAC authentication timeouts with Steam launch checks, file verification, EAC repair, network restart, updates, and conflict checks.",
    category: "Rust",
    categorySlug: "rust",
    readTime: "9 min read",
    updated: "August 2026",
    featured: true,
    difficulty: "Intermediate",
    intro: "Rust's EAC Authentication Timeout means Easy Anti-Cheat could not authenticate the client connection. Facepunch recommends starting with Steam and cache checks, then verifying files and repairing EAC before moving to antivirus or reinstall steps.",
    steps: [
      { title: "Launch Rust from the Steam Library", body: "Do not start Rust directly from the game directory for normal secure play. Facepunch notes that launching outside Steam can prevent EAC from loading correctly." },
      { title: "Close Rust and wait a few minutes", body: "Facepunch recommends closing Rust and waiting up to 10 minutes so EAC can refresh its cache before trying again." },
      { title: "Verify Rust files in Steam", body: "Use Steam's Verify Integrity of Game Files feature to restore corrupt or missing Rust/EAC files." },
      { title: "Repair Easy Anti-Cheat", body: "Open Rust's EasyAntiCheat folder and run the EAC setup repair command documented by Facepunch. Approve the administrator prompt; the repair may complete without a full graphical interface." },
      { title: "Restart the PC and router", body: "Power-cycle both the PC and internet connection, then retest. This resets stale local services and network state." },
      { title: "Check Windows updates and security software", body: "Install pending Windows updates and test whether antivirus or firewall software is interfering with EAC. If disabling protection changes the result, create a narrow trusted exception rather than leaving protection off." },
      { title: "Use the deeper EAC cleanup only if needed", body: "Facepunch also documents deleting RustClient.exe.eac when present and checking Rust logs for forbidden applications. Save these steps for after verification and EAC repair." }
    ],
    notes: ["An authentication timeout is not the same thing as an EAC ban.", "Do not permanently disable your firewall or antivirus just to make the game launch."],
    faq: [
      { q: "Why does Rust EAC Authentication Timeout happen?", a: "It means EAC could not authenticate the connection. Causes can include EAC not loading, damaged files, stale EAC state, security-software interference, or network problems." },
      { q: "Should I reinstall Rust immediately?", a: "No. Facepunch puts a fresh reinstall after several lower-risk checks such as waiting, verifying files, repairing EAC, restarting networking, and checking updates." }
    ],
    sources: [
      { label: "Facepunch Support — EAC Authentication Timeout", url: "https://support.facepunchstudios.com/hc/en-us/articles/360019318037-EAC-Authentication-Timeout" },
      { label: "Facepunch Support — Verify Rust Files", url: "https://support.facepunchstudios.com/hc/en-us/articles/360008398478-Verify-Rust-Files" }
    ]
  },
  {
    slug: "rust-tpm-secure-boot-guide",
    title: "Rust TPM & Secure Boot Requirement: Check and Enable It Safely",
    excerpt: "Rust began a phased TPM and Secure Boot rollout on selected secure servers in March 2026. Check your status before changing BIOS settings.",
    category: "Rust",
    categorySlug: "rust",
    readTime: "10 min read",
    updated: "August 2026",
    difficulty: "Advanced",
    intro: "Facepunch began the first phase of Rust's TPM and Secure Boot rollout in March 2026 on selected servers marked with secure tags, with a later global phase planned. Before entering BIOS, first check whether both security features are already enabled in Windows.",
    steps: [
      { title: "Check TPM status in Windows", body: "Press Windows + R, run tpm.msc, and look for a message that the TPM is ready for use. If it is already ready, do not change TPM settings in BIOS." },
      { title: "Check Secure Boot status", body: "Press Windows + R, run msinfo32, and locate Secure Boot State. If it says On, that part of the requirement is already satisfied." },
      { title: "Identify your motherboard or PC model", body: "Use System Information to record the system or motherboard model before entering UEFI. Exact menu names differ by ASUS, MSI, Gigabyte, ASRock, Dell, HP, Lenovo, Acer, and other vendors." },
      { title: "Enable firmware TPM only if it is currently off", body: "On AMD systems this may be called AMD fTPM; on Intel systems it is often called Intel PTT or TPM Device. Use your motherboard manufacturer's manual for the exact location." },
      { title: "Enable Secure Boot carefully", body: "Look under Boot, Security, or Authentication menus and enable Secure Boot. If the option is unavailable because the machine uses Legacy/CSM boot, do not blindly switch modes: Facepunch warns that changing Legacy to UEFI can prevent Windows from booting on some systems." },
      { title: "Save, restart, and verify again in Windows", body: "After any supported BIOS change, boot back into Windows and re-check tpm.msc and msinfo32. The goal is to confirm both features are actually active, not merely configured in firmware." }
    ],
    notes: ["BIOS/UEFI menus vary by motherboard. Use the official manual for your exact model.", "Do not change Legacy/CSM to UEFI unless you understand your Windows disk/boot configuration and have a recovery plan."],
    faq: [
      { q: "Does every Rust server require TPM and Secure Boot right now?", a: "Facepunch's March 2026 guidance says the first rollout phase applies to selected servers with secure tags, with a second global phase planned for later communication." },
      { q: "What if my PC has no TPM 2.0 or Secure Boot support?", a: "Facepunch notes that older systems may not support the required features. In that case, hardware or platform changes may eventually be necessary once the global requirement takes effect." }
    ],
    sources: [
      { label: "Facepunch Support — How to Turn On TPM & Secure Boot", url: "https://support.facepunchstudios.com/hc/en-us/articles/34396134943389-How-to-Turn-On-TPM-Secure-Boot" }
    ]
  },
  {
    slug: "rust-eac-client-integrity-violation-fix",
    title: "Rust EAC Client Integrity Violation: Clean Repair Guide",
    excerpt: "Fix Rust EAC Client Integrity Violation by rebuilding Easy Anti-Cheat files and verifying the game through Steam.",
    category: "Rust",
    categorySlug: "rust",
    readTime: "6 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "Facepunch says EAC Client Integrity Violation typically means local Easy Anti-Cheat files did not update correctly or became corrupt. The recommended fix is to remove the local EAC folder and let Steam reacquire the correct files through verification.",
    steps: [
      { title: "Close Rust and Steam", body: "Exit the game completely before changing any EAC files so nothing remains locked or in use." },
      { title: "Open Rust's local installation folder", body: "In Steam, right-click Rust, open Properties, and browse the installed files so you are working in the correct game directory." },
      { title: "Delete the EasyAntiCheat folder", body: "Remove the EasyAntiCheat folder from the Rust installation. This clears the local EAC package that may be damaged or outdated." },
      { title: "Restart Steam with administrator rights", body: "Close Steam completely, then start it as administrator as described in Facepunch's repair instructions." },
      { title: "Verify Rust's game files", body: "Run Verify Integrity of Game Files. Steam will scan the installation and reacquire missing EAC files." },
      { title: "Launch Rust normally from Steam", body: "After verification completes, start Rust from the Steam Library and test a secure server." }
    ],
    faq: [
      { q: "Is Client Integrity Violation an EAC ban?", a: "No. Facepunch describes this specific error as a local EAC file update or corruption problem." },
      { q: "Why delete the EAC folder before verifying?", a: "It forces Steam verification to reacquire the EAC package instead of leaving potentially corrupt local files in place." }
    ],
    sources: [
      { label: "Facepunch Support — EAC: Client Integrity Violation", url: "https://support.facepunchstudios.com/hc/en-us/articles/9903859345565-Disconnected-EAC-Client-Integrity-Violation" }
    ]
  },
  {
    slug: "rust-eac-disconnected-fix",
    title: "Rust EAC Disconnected: Fix Easy Anti-Cheat Network Verification",
    excerpt: "When Rust shows EAC: Disconnected, confirm Steam launch behavior and make sure security software is not blocking Easy Anti-Cheat's network connection.",
    category: "Rust",
    categorySlug: "rust",
    readTime: "6 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "Rust's EAC: Disconnected message means the game server cannot verify Easy Anti-Cheat because the client's connection to EAC back-end services is not working. Facepunch highlights two checks first: launch Rust through Steam and make sure firewall or antivirus software is not blocking EAC networking.",
    steps: [
      { title: "Launch Rust from Steam", body: "Start Rust from the Steam Library rather than RustClient.exe or another direct executable. Facepunch notes that EAC is not loaded when the normal Steam launch path is bypassed." },
      { title: "Restart Steam and Rust", body: "Close both applications completely, start Steam again, and retry. This creates a clean EAC session before deeper network troubleshooting." },
      { title: "Check firewall and antivirus rules", body: "Make sure your security software is not blocking Easy Anti-Cheat. Facepunch states EAC uses standard HTTP/HTTPS connectivity and references ports 80 and 443 for its back-end connection." },
      { title: "Check DNS and network filtering", body: "If you use custom DNS filtering, a corporate/school network, VPN, proxy, or security appliance, temporarily test a normal trusted connection to see whether EAC's service endpoint is being blocked." },
      { title: "Verify Rust files if the network path looks normal", body: "Use Steam's verification feature to restore damaged EAC or game files, then retest from the Steam Library." }
    ],
    notes: ["Do not open broad inbound firewall rules for the whole PC. Test and allow only trusted required application traffic.", "If multiple unrelated EAC games fail at the same time, investigate the network/security layer before reinstalling Rust."],
    faq: [
      { q: "What does EAC: Disconnected mean in Rust?", a: "It means the game server could not verify that EAC is active because the client's connection to EAC back-end services was not working." },
      { q: "Does RustClient.exe load Easy Anti-Cheat?", a: "Not for the normal secure launch path. Facepunch instructs players to launch Rust through Steam so EAC loads correctly." }
    ],
    sources: [
      { label: "Facepunch Support — EAC: Disconnected", url: "https://support.facepunchstudios.com/hc/en-us/articles/214240585-EAC-Disconnected" }
    ]
  },
  {
    slug: "steam-game-not-launching-preparing-to-launch-fix",
    title: "Steam Game Not Launching After Preparing to Launch: Official Checklist",
    excerpt: "Valve's general troubleshooting path for Steam games that close immediately or never open after Preparing to Launch.",
    category: "Steam",
    categorySlug: "steam",
    readTime: "8 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "When Steam shows Preparing to Launch and the game immediately closes or never appears, Valve recommends a general elimination process rather than reinstalling everything first: restart the machine, update the operating system and drivers, verify game files, disable interfering software, and confirm the PC meets the game's requirements.",
    steps: [
      { title: "Start with a fresh Windows restart", body: "Reboot the PC before testing. Valve recommends following its launch troubleshooting after a fresh restart so stale game, driver, launcher, and overlay processes are cleared." },
      { title: "Install Windows updates", body: "Bring Windows and related system components up to date. Some games and GPU software depend on components delivered through Windows Update." },
      { title: "Update hardware drivers", body: "Install current stable drivers for your GPU and other relevant hardware. Restart again if the driver installer requests it." },
      { title: "Verify Integrity of Game Files", body: "In the game's Steam Properties, use the installed-files verification option. Valve says corrupted extracted game files are a common reason a title will not launch." },
      { title: "Disable non-essential background software", body: "Temporarily close overlays, monitoring tools, third-party security utilities, injectors, and other non-essential applications that could interfere with Steam or the game." },
      { title: "Check the game's system requirements", body: "Compare your hardware and operating system with the requirements on the Steam store page. Systems at or below minimum requirements can fail to start or behave unpredictably." },
      { title: "Escalate to the game developer when appropriate", body: "If the game itself crashes after Steam successfully hands off the launch, Valve recommends contacting the game's developer or publisher for title-specific support." }
    ],
    faq: [
      { q: "Why does Steam say Preparing to Launch and then nothing happens?", a: "Valve notes that many such cases are games crashing immediately at startup because of files, drivers, software conflicts, or unsupported hardware/software configurations." },
      { q: "Should I reinstall the game before verifying files?", a: "No. File verification is a faster, less disruptive first step and is part of Valve's official general checklist." }
    ],
    sources: [
      { label: "Steam Support — Games do not run after Preparing to Launch", url: "https://help.steampowered.com/en/faqs/view/5814-D9A3-BE42-62DF" },
      { label: "Steam Support — Third-Party Game Support", url: "https://help.steampowered.com/en/faqs/view/11C7-11FE-C128-DBDC" }
    ]
  },
  {
    slug: "steam-game-currently-unavailable-fix",
    title: "Steam 'This Game Is Currently Unavailable' Error: Safe Fix Order",
    excerpt: "Restart Steam, update drivers, verify files, repair Steam's local state, and check secondary installers before reinstalling the game.",
    category: "Steam",
    categorySlug: "steam",
    readTime: "8 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "Steam's 'This game is currently unavailable' error can come from stale client state, damaged game files, read-only installation attributes, networking, or missing secondary installers. Valve recommends testing each layer in sequence and retesting after each step.",
    steps: [
      { title: "Exit and restart Steam", body: "Close the Steam client completely and start it again before making file-system changes. This clears a surprising number of temporary client-state problems." },
      { title: "Update drivers", body: "Install current stable drivers for your hardware, especially the GPU, and reboot if required." },
      { title: "Verify the game's files", body: "Run Steam's Verify Integrity of Game Files process to repair the local game cache before doing a full reinstall." },
      { title: "Check Steam folder attributes", body: "Valve's article includes resetting Read-Only behavior on the Steam installation folder. If you use this step, apply it only to your own Steam directory and retest afterward." },
      { title: "Check secondary installers", body: "Some games depend on bundled DirectX, Visual C++, PhysX, or other prerequisite installers. If the first-run installer was interrupted or blocked, find the official prerequisite installer inside the game's directory and rerun it." },
      { title: "Investigate network configuration if the error remains", body: "Valve notes that persistent cases can also be network-related. At this stage, test normal connectivity and Steam's network troubleshooting before reinstalling Windows or changing router security broadly." }
    ],
    notes: ["Back up non-cloud saves before deleting or moving game folders.", "Do not download DirectX or Visual C++ DLL files from random third-party sites; use Microsoft or the game's bundled installers."],
    faq: [
      { q: "Can missing Visual C++ or DirectX components stop a Steam game from launching?", a: "Yes. Valve notes that many games ship secondary installers for prerequisites, and a canceled or blocked first-run installer can prevent the game from starting correctly." },
      { q: "Is reinstalling Steam the first fix?", a: "No. Valve's troubleshooting begins with restart, drivers, file verification, local Steam state, and prerequisite checks." }
    ],
    sources: [
      { label: "Steam Support — This game is currently unavailable", url: "https://help.steampowered.com/en/faqs/view/639B-6FC9-EBDF-5A03" }
    ]
  }
];

export const categories = [
  { name: "Game Fixes", slug: "game-fixes", icon: "🛠️", description: "Crash fixes, launch errors, mod issues and practical troubleshooting." },
  { name: "PC Gaming", slug: "pc-gaming", icon: "🖥️", description: "FPS, stutter, Windows performance, drivers and hardware troubleshooting." },
  { name: "GTA V", slug: "gta-v", icon: "🚘", description: "GTA V modding, ScriptHookV, crashes and configuration guides." },
  { name: "Rust", slug: "rust", icon: "☢️", description: "Rust client errors, server troubleshooting and admin guides." },
  { name: "Roblox", slug: "roblox", icon: "🎮", description: "Roblox Studio scripting, DataStore and development troubleshooting." },
  { name: "Steam", slug: "steam", icon: "⚙️", description: "Steam downloads, launch problems, authentication and game file fixes." },
  { name: "Game Servers", slug: "game-servers", icon: "🌐", description: "Hosting, ports, performance, configuration and server administration." },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategoryArticles(slug: string) {
  if (slug === "game-fixes") {
    return articles.filter((a) => ["gta-v", "rust", "roblox", "steam"].includes(a.categorySlug));
  }
  return articles.filter((article) => article.categorySlug === slug);
}
