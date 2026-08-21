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
    excerpt: "Fix ScriptHookV version mismatches and single-player mod startup failures with a clean isolation process instead of reinstalling GTA V.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "10 min read",
    updated: "August 2026",
    featured: false,
    difficulty: "Easy",
    intro: "ScriptHookV usually stops working after a GTA V update because the installed hook no longer matches the current game executable. The fastest diagnosis is to prove the unmodded game launches, update only the loader from its official source, and then restore mods in small groups so the incompatible component is obvious.",
    steps: [
      { title: "Record the exact error before changing files", body: "Take a screenshot of the ScriptHookV message and note whether GTA V was updated immediately before the problem started. A version mismatch points to a different fix than a crash caused by an individual ASI plugin or script." },
      { title: "Back up your mod configuration", body: "Copy important .ini files, save data, custom scripts, and any files you would be difficult to recreate. Do not use the original GTA V folder as your only backup." },
      { title: "Confirm GTA V launches without the mod loader", body: "Temporarily move ScriptHookV.dll, dinput8.dll, and custom script/plugin folders out of the GTA V directory. Launch Story Mode from your normal launcher. If the clean game still crashes, solve that base-game problem before restoring mods." },
      { title: "Let the launcher finish all GTA V updates", body: "Open Rockstar Games Launcher, Steam, or Epic and make sure no GTA V update is queued or partially applied. A mixed installation can look like a ScriptHookV failure even when the loader files are correct." },
      { title: "Install the current ScriptHookV release from the official source", body: "Download ScriptHookV from dev-c.com, replace the old loader files, and avoid mixing DLLs from multiple releases. Third-party DLL download sites are unnecessary and add security risk." },
      { title: "Test the loader before restoring every mod", body: "Launch Story Mode with only the current ScriptHookV/ASI loader present. If it works, restore scripts and plugins in small groups. Test between groups until the incompatible item is identified." },
      { title: "Keep a known-good mod set for future GTA V updates", body: "Once the game is stable, keep a small note of the GTA V build, ScriptHookV release, and major plugins in use. After the next game update, this gives you a known-good baseline instead of starting from zero." }
    ],
    notes: ["ScriptHookV is intended for GTA V single-player modding. Do not use mod loaders to bypass GTA Online protections.", "Back up configuration and save files before removing or replacing mod components.", "Never download replacement DLLs from random file-hosting sites."],
    faq: [
      { q: "Why does ScriptHookV often break after GTA V updates?", a: "The loader depends on game internals that can change when GTA V is updated. The ScriptHookV developer may need to publish a compatible release for the new build." },
      { q: "Should I reinstall GTA V immediately?", a: "No. First confirm whether the clean game launches and update the mod loader. A full reinstall is much slower and does not fix an outdated ScriptHookV build by itself." },
      { q: "How do I find which mod is crashing GTA V?", a: "Restore plugins and scripts in small groups and test after each group. The last restored group narrows the problem enough to isolate one component." }
    ],
    sources: [
      { label: "Script Hook V — official developer page", url: "https://www.dev-c.com/gtav/scripthookv/" }
    ]
  },
  {
    slug: "rust-steam-authticketcanceled-error",
    title: "Rust Steam AuthTicketCanceled Error: Causes & Fixes",
    excerpt: "Diagnose Rust Steam AuthTicketCanceled disconnects without assuming a ban or reinstalling the whole server.",
    category: "Rust",
    categorySlug: "rust",
    readTime: "9 min read",
    updated: "August 2026",
    featured: false,
    difficulty: "Intermediate",
    intro: "AuthTicketCanceled is a Steam-session authentication message. A single occurrence after a disconnect can be harmless, while repeated kicks can point to stale Steam state, damaged local files, network interruption, or a server-side environment that is repeatedly invalidating sessions. Diagnose whether the failure affects one player or many before changing the server.",
    steps: [
      { title: "Determine whether the problem is one client or the whole server", body: "Check the Rust server console and ask whether multiple players were disconnected at the same time. If many sessions fail together, investigate Steam availability, host networking, or server changes before modifying one player's PC." },
      { title: "Restart Rust and Steam completely", body: "Exit Rust, close Steam, and verify Steam is no longer running in Task Manager. Start Steam again, wait for it to sign in fully, then launch Rust from the Steam Library." },
      { title: "Re-authenticate the Steam session", body: "If the message repeats, sign out of Steam and sign back in. This creates a new authenticated session instead of reusing stale client state." },
      { title: "Verify Rust files", body: "Use Steam's Verify Integrity of Game Files feature. Facepunch recommends file verification for a range of Rust/EAC problems because missing or damaged files can produce misleading connection symptoms." },
      { title: "Compare another server", body: "Join a known working official or community server. If only one server produces the error, focus on that server's networking, updates, plugins, and host state rather than repeatedly changing the client." },
      { title: "Review recent server changes", body: "For a modded server, note plugin updates, restarts, SteamCMD updates, firewall changes, or proxy/network changes made just before the problem started. Disable or roll back only the most likely change and retest." },
      { title: "Restart the server only after collecting evidence", body: "A restart can clear stale service state, but capture the relevant log lines first. Otherwise the restart may hide the information needed to understand why authentication failed." }
    ],
    notes: ["AuthTicketCanceled by itself is not proof of a VAC/EAC ban.", "Do not delete server data or reinstall Rust until you know whether the issue is client-specific or server-wide."],
    faq: [
      { q: "Is AuthTicketCanceled a ban message?", a: "No. It is an authentication/session message and does not, by itself, state that the account is banned." },
      { q: "Why can it appear after a reconnect?", a: "Steam session tickets are tied to the active authenticated session. Rapid reconnects, Steam restarts, or network interruptions can invalidate previous session state." },
      { q: "Can a plugin be responsible?", a: "A plugin can contribute to connection handling problems on a modded server, but first establish whether the same client can join other servers and whether multiple users are affected." }
    ],
    sources: [
      { label: "Facepunch Support — Verify Rust Files", url: "https://support.facepunchstudios.com/hc/en-us/articles/360008398478-Verify-Rust-Files" }
    ]
  },
  {
    slug: "roblox-datastore-not-saving",
    title: "Roblox DataStore Not Saving? Debug It Step by Step",
    excerpt: "Trace Roblox DataStore failures through Studio access, server-side code, pcall errors, request budgets, write strategy, and shutdown handling.",
    category: "Roblox",
    categorySlug: "roblox",
    readTime: "13 min read",
    updated: "August 2026",
    featured: false,
    difficulty: "Intermediate",
    intro: "DataStore failures are rarely random. Roblox DataStore operations are network calls, can fail, are subject to request budgets, and can behave differently in Studio depending on API access. A reliable diagnosis logs the exact request result, proves the code is running on the server, and separates permission problems from throttling and save-logic bugs.",
    steps: [
      { title: "Use a separate test experience before enabling Studio API access", body: "Roblox disables Studio DataStore access by default. If you enable Studio Access to API Services, do it on a safe test version rather than casually pointing Studio at your live production data, because Studio can access the same persistent stores." },
      { title: "Confirm DataStore code runs on the server", body: "DataStoreService is for server-side Scripts/ModuleScripts used by the server. If the save code is in a LocalScript, move the authoritative DataStore work to the server and pass only the necessary state through validated remotes." },
      { title: "Wrap every network operation and log the actual error", body: "Use pcall around GetAsync, SetAsync, UpdateAsync, and similar calls. Log the success boolean, returned value, key, and error message so you know whether a write failed, was throttled, or never executed." },
      { title: "Watch the request budget", body: "Use DataStoreService:GetRequestBudgetForRequestType() while debugging. If budget repeatedly falls to zero, reduce save frequency and stop writing every small stat change directly to the DataStore." },
      { title: "Keep active player state in memory", body: "Load persistent data at session start, work mainly with an in-memory representation during gameplay, save periodically, and write again at appropriate shutdown/player-leave points. Roblox's guidance warns against high-frequency DataStore traffic for ordinary gameplay state." },
      { title: "Choose SetAsync and UpdateAsync intentionally", body: "SetAsync is simple but can create consistency problems when multiple servers write the same key. UpdateAsync reads the current value before applying a callback and is safer for concurrent multi-server changes, although it uses both read and write budget." },
      { title: "Test PlayerRemoving and BindToClose without relying on only one", body: "A shutdown save is useful, but it should not be the only time important progress is persisted. Test normal player departure, server shutdown, and forced test exits separately." },
      { title: "Protect real data from fallback/default overwrites", body: "If a load fails and you use default data temporarily, mark that session as load-failed. Do not later save the defaults over a real existing profile just because the player continued playing." }
    ],
    notes: ["Use a separate test version before enabling Studio API access against persistent data.", "Never trust client-provided currency, inventory, or purchase values as authoritative save data.", "Log keys and error messages during testing, but avoid exposing sensitive player data in public logs."],
    faq: [
      { q: "Why does my DataStore work in a live server but not Studio?", a: "Studio API access may be disabled. Roblox disables it by default and recommends using a separate test version when you enable it." },
      { q: "Should I save every time a stat changes?", a: "Usually no. Roblox DataStore calls are asynchronous network requests with budgets. Keep session state in memory and save at sensible checkpoints instead of creating unnecessary write pressure." },
      { q: "SetAsync or UpdateAsync?", a: "SetAsync is simpler for controlled single-writer cases. UpdateAsync is usually safer when multiple servers may write the same key because it works from the current stored value." }
    ],
    sources: [
      { label: "Roblox Creator Hub — Data stores", url: "https://create.roblox.com/docs/cloud-services/data-stores" },
      { label: "Roblox Creator Hub — DataStoreService request budgets", url: "https://create.roblox.com/docs/reference/engine/classes/DataStoreService" },
      { label: "Roblox Creator Hub — Player data system guidance", url: "https://create.roblox.com/docs/cloud-services/data-stores/player-data-purchasing" }
    ]
  },
  {
    slug: "steam-game-crashing-on-launch",
    title: "Steam Game Crashing on Launch: A Safe Troubleshooting Order",
    excerpt: "Work from file verification and clean restarts to drivers, overlays, prerequisites, local configuration, and developer-specific support.",
    category: "Steam",
    categorySlug: "steam",
    readTime: "11 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "When Steam hands off a launch and the game immediately disappears, the game is often crashing before it can create a visible window. Valve's general guidance starts with a clean restart, operating-system and driver updates, file verification, and removal of interfering software before you jump to reinstalls or risky system changes.",
    steps: [
      { title: "Restart Windows before troubleshooting", body: "A full restart clears stale game processes, overlay hooks, driver state, and pending installers. Retest the game before changing anything else." },
      { title: "Verify installed game files", body: "Open the game's Steam Properties, choose Installed Files, and run Verify Integrity of Game Files. This is faster and less destructive than reinstalling the entire title." },
      { title: "Install pending Windows and stable GPU-driver updates", body: "Apply normal operating-system updates and a stable graphics driver from the GPU vendor. Reboot if requested before testing the game again." },
      { title: "Temporarily disable overlays and hook-based tools", body: "Close Discord overlay, GPU overlays, recording tools, hardware monitoring overlays, ReShade-like injectors, and similar utilities one at a time. Keep the change that reproduces the fix instead of disabling everything permanently." },
      { title: "Reset the game's local configuration safely", body: "Back up and rename the game's settings/config folder rather than deleting it. A clean launch can then regenerate defaults; if the crash continues, restore the folder and keep investigating." },
      { title: "Check bundled prerequisite installers", body: "Some games include DirectX, Visual C++, PhysX, or other first-run packages in their install folder. Re-run the game's own official prerequisite installers if the first launch was interrupted." },
      { title: "Check the game's requirements and developer support", body: "If Steam successfully starts the process but one specific game still crashes, compare its current requirements with your system and use the developer/publisher support channel for title-specific errors." }
    ],
    notes: ["Back up local saves and configs before renaming or deleting folders.", "Do not download individual DirectX or Visual C++ DLL files from random sites."],
    faq: [
      { q: "Should I reinstall Windows for one crashing Steam game?", a: "Almost never as an early step. First rule out files, drivers, prerequisites, overlays, configuration, and game-specific compatibility." },
      { q: "Why does Steam show Running for a second and then stop?", a: "That usually means the game process started and exited quickly. The reason can be a crash, missing prerequisite, bad config, or conflicting software." },
      { q: "Is verifying files the same as reinstalling?", a: "No. Verification compares the installation with Steam's expected files and reacquires missing or damaged content without replacing everything." }
    ],
    sources: [
      { label: "Steam Support — Games do not run after Preparing to Launch", url: "https://help.steampowered.com/en/faqs/view/5814-D9A3-BE42-62DF" }
    ]
  },
  {
    slug: "increase-fps-windows-11-gaming",
    title: "How to Increase FPS on Windows 11 Without Risky Tweaks",
    excerpt: "Improve gaming performance with repeatable benchmarks, sensible graphics settings, Windows gaming options, stable drivers, and thermal checks.",
    category: "PC Gaming",
    categorySlug: "pc-gaming",
    readTime: "13 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "Useful FPS tuning is measurement-driven. The goal is to identify whether the game is GPU-bound, CPU-bound, memory-limited, thermally throttled, or simply using settings that are too expensive for the target frame rate. Avoid registry packs and aggressive debloat scripts that make Windows harder to troubleshoot for tiny or unmeasured gains.",
    steps: [
      { title: "Create a repeatable baseline", body: "Use the same save, benchmark, map location, or practice scene each time. Record average FPS, 1% lows if available, frame time, GPU usage, CPU usage, temperatures, and VRAM/RAM use before changing settings." },
      { title: "Find whether the GPU or CPU is the limiter", body: "A GPU near full utilization usually responds to lower resolution or expensive graphics settings. Low GPU usage with one or more heavily loaded CPU threads can indicate a CPU/game-engine limit where lowering texture quality will do little." },
      { title: "Reduce the expensive settings first", body: "Lower ray tracing, heavy shadows, volumetrics, reflections, crowd/geometry distance, or resolution scale before blindly setting every option to Low. Texture quality often affects VRAM more than raw FPS when enough VRAM is available." },
      { title: "Use Windows graphics settings intentionally", body: "For compatible DirectX 10/11 games in windowed or borderless mode, Windows 11 provides Optimizations for windowed games. You can also choose a High performance GPU for a specific app on multi-GPU systems under Settings > System > Display > Graphics." },
      { title: "Close background load you can actually measure", body: "Use Task Manager to identify processes consuming meaningful CPU, GPU, memory, or disk resources. Closing a real heavy process is useful; disabling random Windows services because a tweak list says so usually is not." },
      { title: "Update stable drivers and check thermals", body: "Use a stable GPU driver and verify CPU/GPU clocks do not collapse under load because of heat or power limits. A throttling system cannot be fixed by graphics presets alone." },
      { title: "Retest one change at a time", body: "Repeat the same benchmark after each meaningful change. Keep only changes that improve the metric you care about without introducing instability, visual problems, or input issues." }
    ],
    notes: ["Create a restore point or backup before major system changes.", "Treat 'FPS boost packs', registry scripts, and broad service-disable lists as unverified until you benchmark them yourself."],
    faq: [
      { q: "Do Windows registry tweaks meaningfully increase FPS?", a: "Many popular tweaks produce little measurable improvement on a healthy system and can make later troubleshooting harder. Benchmark before and after instead of assuming a tweak worked." },
      { q: "Should I lower texture quality first?", a: "Not always. If VRAM is not saturated, textures may have much less FPS cost than ray tracing, resolution scale, volumetrics, shadows, or geometry-heavy settings." },
      { q: "What are Optimizations for windowed games?", a: "Microsoft says the Windows 11 feature can improve presentation performance/latency for compatible DirectX 10 and 11 games running in windowed or borderless modes." }
    ],
    sources: [
      { label: "Microsoft Support — Optimizations for windowed games in Windows 11", url: "https://support.microsoft.com/en-us/windows/hardware/display-graphics/optimizations-for-windowed-games-in-windows-11" },
      { label: "Microsoft Support — Windows gaming settings", url: "https://support.microsoft.com/en-US/accessibility/windows/understand-and-explore-windows-settings" }
    ]
  },
  {
    slug: "rust-server-not-showing-list",
    title: "Rust Server Not Showing in Server List: Full Checklist",
    excerpt: "Separate a Rust server-browser problem from a basic connectivity problem by checking startup state, game/query ports, firewalls, and direct connection.",
    category: "Game Servers",
    categorySlug: "game-servers",
    readTime: "12 min read",
    updated: "August 2026",
    difficulty: "Advanced",
    intro: "A Rust server can be fully running and still fail to appear in the browser if its query port is unavailable. Facepunch documents that server.port and server.queryport are separate UDP ports, cannot be the same, and both must be reachable for normal browser discovery. Start by proving the server works locally, then test external connectivity, then focus on discovery.",
    steps: [
      { title: "Confirm the server completed startup", body: "Read the console for binding errors, Steam/query errors, repeated crashes, or an unfinished update. Do not troubleshoot browser visibility while the server itself is still failing to start cleanly." },
      { title: "Verify server.port and server.queryport", body: "Facepunch documents server.queryport as the port used for server-browser information. If it is not explicitly set it can default based on other ports, but server.port and server.queryport cannot be the same. Both are UDP and both need to be accessible." },
      { title: "Test locally with client.connect", body: "If the game client is on the same machine, use the Rust console to connect to localhost and your server port. A successful local connection proves the game process is listening even if internet routing is still wrong." },
      { title: "Test direct connection from outside the LAN", body: "Use the public IP and game port from a separate internet connection when possible. A successful direct connection but missing browser entry strongly points toward query-port/firewall/discovery configuration." },
      { title: "Check router and provider firewall rules", body: "Forward the required UDP ports to the server's stable LAN IP and allow the server application/ports through the host firewall. Hosted servers may also have a provider-level firewall that must be configured separately." },
      { title: "Rule out CGNAT or non-public addressing", body: "Compare the router's WAN address with the public address seen from the internet. If the ISP uses CGNAT, normal home-router forwarding may not make the server reachable from outside." },
      { title: "Confirm hostname and visibility configuration", body: "After networking works, review server.hostname, identity/config files, query port, and any intentional hidden-server settings. Browser discovery can take time after a fresh start, so avoid changing multiple networking variables at once." }
    ],
    notes: ["Facepunch documents game and query ports as UDP; RCON and Rust+ use different protocols/ports.", "Use a stable LAN address or DHCP reservation so router rules do not point at the wrong device after a reboot."],
    faq: [
      { q: "Can players connect even if the Rust server is not listed?", a: "Yes. If direct connection succeeds, the core game port works and the remaining problem may be query/discovery related." },
      { q: "Can server.port and server.queryport be identical?", a: "No. Facepunch explicitly states they cannot be the same port." },
      { q: "Why does it work on localhost but not from the internet?", a: "That points toward router forwarding, host/provider firewall rules, public-IP availability, or CGNAT rather than the Rust server process itself." }
    ],
    sources: [
      { label: "Facepunch Rust Wiki — Creating a server", url: "https://wiki.facepunch.com/rust/Creating-a-server" }
    ]
  },
  {
    slug: "gta-v-mods-folder-cleanup",
    title: "How to Clean a GTA V Mods Folder Without Reinstalling",
    excerpt: "Isolate broken ASI plugins, scripts, loaders, add-on packs, and configuration files with a reversible clean-test workflow.",
    category: "GTA V",
    categorySlug: "gta-v",
    readTime: "10 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "When a modded GTA V installation stops launching, deleting the whole game destroys evidence and wastes time. A better method is to create a clean baseline, disable loaders first, then restore mod groups in a controlled order until the failure returns.",
    steps: [
      { title: "Back up saves and mod configuration", body: "Copy important .ini files, scripts, add-on configuration, and any custom files you cannot easily recreate. Keep the backup outside the GTA V directory." },
      { title: "Make an inventory of loader-level files", body: "Note ScriptHookV.dll, dinput8.dll, OpenIV-related ASI files, ScriptHookVDotNet files, and any other root-directory injectors. These load early and can prevent the game from reaching the menu." },
      { title: "Disable mod loaders before deleting content", body: "Move the loader/injector files to a temporary backup folder and launch Story Mode. If GTA V now opens, the problem is in the mod path rather than the clean base game." },
      { title: "Verify the clean base game if it still fails", body: "Use the platform's verify feature so original game files are restored. Keep custom files backed up until you know which ones are safe to reintroduce." },
      { title: "Restore the current ScriptHookV version first", body: "Install the ScriptHookV build intended for the current GTA V version from the official developer page, test, and only then restore extra ASI plugins." },
      { title: "Restore scripts and plugins in small groups", body: "Bring back one category at a time: loader, ASI plugins, ScriptHookVDotNet scripts, add-on packs, then cosmetic/graphics modifications. Test between groups so the last change has diagnostic value." },
      { title: "Keep incompatible mods quarantined", body: "Do not put a known broken plugin back just because another mod depends on it. Wait for an updated version or remove the dependency cleanly." }
    ],
    notes: ["This workflow is for troubleshooting a legitimate single-player modded installation.", "Do not use mod components to bypass GTA Online anti-cheat or platform protections."],
    faq: [
      { q: "Do I need to delete the entire mods folder?", a: "No. Disabling loaders and restoring content in stages usually identifies the incompatible component with less work and less risk." },
      { q: "Why test loader files before add-on packs?", a: "Loader and injector files run very early. If one of them is incompatible, GTA V can fail before later scripts or add-on content are even relevant." },
      { q: "Should I keep a separate clean GTA V install?", a: "If storage allows and you mod heavily, a clean baseline or well-maintained backup can make update-day troubleshooting much faster." }
    ],
    sources: [
      { label: "Script Hook V — official developer page", url: "https://www.dev-c.com/gtav/scripthookv/" }
    ]
  },
  {
    slug: "roblox-studio-high-memory-usage",
    title: "Roblox Studio High Memory Usage: Find the Real Cause",
    excerpt: "Use Roblox performance tools to separate normal asset memory from growing LuaHeap, instances, signals, and real memory leaks.",
    category: "Roblox",
    categorySlug: "roblox",
    readTime: "12 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "High memory is not automatically a leak. A large experience can legitimately use substantial memory; the stronger warning sign is memory that keeps growing after repeating the same action. Roblox provides the Developer Console Memory view and Luau heap snapshots so you can identify which category grows instead of optimizing blindly.",
    steps: [
      { title: "Reproduce the same action repeatedly", body: "Record memory after launch, then repeat one interaction 10–20 times. A stable plateau suggests normal caching or loaded assets; continuous growth suggests an object, connection, or table is accumulating." },
      { title: "Use Developer Console Memory categories", body: "Open the Developer Console and inspect PlaceMemory and PlaceScriptMemory categories. Roblox recommends these views for understanding memory caused by your own experience rather than engine-only allocations." },
      { title: "Compare Luau heap snapshots", body: "Create a heap snapshot before the reproduction sequence and another afterward. Look for tables, closures, instances, or script-owned objects whose counts grow each time." },
      { title: "Watch InstanceCount and Signals", body: "Repeatedly growing instances or active event connections are common leak patterns. Verify temporary objects are destroyed and connections are disconnected when the owning system is finished." },
      { title: "Clean player/session tables", body: "Remove per-player entries when players leave and clear caches that are no longer needed. A server that stays online for a long time exposes leaks that short Studio sessions can hide." },
      { title: "Review asset memory separately from script leaks", body: "Large textures, meshes, sounds, terrain, and duplicated assets can create high but legitimate memory. If the main growth is graphics/asset categories rather than LuaHeap, optimize the asset strategy instead of rewriting unrelated code." },
      { title: "Test in a client, not only Studio", body: "Roblox notes that Studio itself adds overhead because it can run both server and client processes. Validate the final behavior in a normal client/live test when practical." }
    ],
    notes: ["High memory is a symptom, not a diagnosis. Focus on the category and whether usage keeps growing.", "Keep before/after screenshots of the Memory view when changing a suspected system."],
    faq: [
      { q: "Is all high Roblox memory usage a leak?", a: "No. Large environments and assets can legitimately use a lot of memory. A leak is more strongly indicated by uncontrolled growth over time or after repeated actions." },
      { q: "What memory values are most useful for script problems?", a: "Roblox highlights LuaHeap, InstanceCount, and PlaceScriptMemory as useful signals when investigating script-driven memory growth." },
      { q: "Why can Studio memory look higher than the live client?", a: "Studio adds its own editor/runtime overhead and can run server and client together, so use consistent environments when comparing measurements." }
    ],
    sources: [
      { label: "Roblox Creator Hub — Memory usage", url: "https://create.roblox.com/docs/studio/optimization/memory-usage" },
      { label: "Roblox Creator Hub — Improve performance", url: "https://create.roblox.com/docs/performance-optimization/improve" },
      { label: "Roblox Creator Hub — Identify performance issues", url: "https://create.roblox.com/docs/performance-optimization/identify" }
    ]
  },
  {
    slug: "pc-game-stuttering-fix",
    title: "PC Game Stuttering: How to Diagnose Frame-Time Spikes",
    excerpt: "Use frame-time patterns, CPU/GPU utilization, memory, storage, shader behavior, temperatures, and overlays to find the real bottleneck.",
    category: "PC Gaming",
    categorySlug: "pc-gaming",
    readTime: "14 min read",
    updated: "August 2026",
    difficulty: "Intermediate",
    intro: "A game can average 120 FPS and still feel bad if a few frames take far longer than the rest. Stutter is therefore a frame-time problem first. The useful question is not only 'what is my FPS?' but 'what happens on the CPU, GPU, memory, storage, and game engine at the exact moment the spike occurs?'.",
    steps: [
      { title: "Create a repeatable stutter test", body: "Use the same route, save point, camera turn, race, or benchmark. Record when hitches happen: on first traversal, every few seconds, during combat, when new areas load, or only after long sessions." },
      { title: "Graph frame time instead of relying on average FPS", body: "A smooth frame-time line is more informative than a high average FPS. Note whether the spike is isolated, periodic, or tied to specific game actions." },
      { title: "Compare GPU and CPU behavior during the spike", body: "If GPU utilization drops while one CPU thread becomes saturated, the game may be CPU/engine limited. If the GPU is fully loaded and frame time scales with graphics load, reduce GPU-heavy settings or resolution." },
      { title: "Check RAM, VRAM, and paging", body: "Watch system memory, dedicated GPU memory, and storage activity. Stutter can appear when a game exceeds practical VRAM/RAM capacity and repeatedly moves data between memory tiers." },
      { title: "Look for storage or shader-compilation patterns", body: "First-time traversal hitches can be caused by asset streaming or shader compilation. If the same route becomes smooth on the second pass, distinguish that behavior from a permanent CPU/GPU bottleneck." },
      { title: "Test without overlays and monitoring hooks", body: "Temporarily disable overlays, recording tools, aggressive RGB suites, and frame limiters one at a time. Some hook-based tools affect frame pacing even when their average resource use looks small." },
      { title: "Verify clocks and temperatures", body: "Watch CPU and GPU temperatures and effective clocks during the hitch. Thermal or power throttling can create inconsistent performance that looks like a game-engine problem." },
      { title: "Change one variable and repeat the same test", body: "A troubleshooting change is only useful if you can compare it with the same workload. Keep a small log of the setting, frame-time result, and whether the stutter changed." }
    ],
    notes: ["Shader-compilation stutter and hardware bottlenecks are different problems and should not be treated as one universal fix.", "Avoid 'timer resolution', registry, and service-disable tweaks until ordinary measurable causes are ruled out."],
    faq: [
      { q: "Can a game stutter even at high FPS?", a: "Yes. Smoothness depends on frame-time consistency, not only the average number of frames rendered per second." },
      { q: "Why does a game stutter only the first time I enter an area?", a: "That pattern can point to shader compilation or asset streaming. Repeat the same route to see whether the hitch is a first-run event or a persistent bottleneck." },
      { q: "Can overlays cause stutter?", a: "They can in some configurations because they hook into rendering or capture. Test them individually rather than assuming all overlays are bad." }
    ],
    sources: [
      { label: "Microsoft Support — Optimizations for windowed games in Windows 11", url: "https://support.microsoft.com/en-us/windows/hardware/display-graphics/optimizations-for-windowed-games-in-windows-11" }
    ]
  },
  {
    slug: "best-rust-server-ram-guide",
    title: "How Much RAM Does a Rust Server Need? Practical Sizing Guide",
    excerpt: "Size Rust server memory from Facepunch's baseline requirement, then add headroom for map size, population, plugins, entities, and real peak usage.",
    category: "Game Servers",
    categorySlug: "game-servers",
    readTime: "10 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "There is no single RAM number that fits every Rust server. Facepunch currently lists 12 GB free RAM as a server requirement and notes that a 6k map uses more, but real usage also changes with population, entity growth, plugins, custom maps, and how long the wipe has been running. Treat the baseline as a starting requirement, then size from measured peak usage.",
    steps: [
      { title: "Start with the official baseline", body: "Facepunch's server-creation documentation lists 12 GB free RAM and warns that a 6k map uses more. Do not plan a production server with less headroom than the official starting point." },
      { title: "Write down the workload you actually intend to run", body: "Record map size, expected peak players, wipe duration, plugin count, custom-map use, and whether the server will run other services such as databases, monitoring, web panels, or multiple Rust instances." },
      { title: "Measure after the server reaches realistic entity growth", body: "A fresh wipe can use less memory than a busy server later in the wipe. Measure peak usage during populated periods and after enough runtime for bases, deployables, and world entities to accumulate." },
      { title: "Leave operating-system and service headroom", body: "Do not allocate nearly 100% of host RAM to Rust. The operating system, SteamCMD/update work, RCON tools, monitoring, and filesystem cache also need memory." },
      { title: "Watch for swap or out-of-memory pressure", body: "If the host begins paging heavily, kills the process, or shows long stalls as memory approaches the limit, add RAM or reduce workload before trying unrelated network tweaks." },
      { title: "Scale from evidence instead of player-count folklore", body: "Two 100-player servers can have very different memory requirements because map size, plugins, entity count, and custom content differ. Use your own peak measurements to choose the next hosting tier." }
    ],
    notes: ["Facepunch's requirement is a baseline, not a guarantee that 12 GB is enough for every production workload.", "SSD/NVMe storage is also strongly preferred in Facepunch's server requirements."],
    faq: [
      { q: "Is 12 GB enough for every Rust server?", a: "No. Facepunch lists 12 GB free RAM as a requirement and explicitly notes that a 6k map uses more. Population, plugins, entities, and other services can raise real requirements." },
      { q: "Does more RAM automatically increase FPS or tick rate?", a: "No. Extra capacity prevents memory pressure, but CPU single-thread performance, storage, network quality, and server configuration still determine much of the actual performance." },
      { q: "When should I upgrade RAM?", a: "Upgrade when measured peak usage leaves too little headroom, the host begins swapping, or the process approaches out-of-memory conditions under normal busy-period load." }
    ],
    sources: [
      { label: "Facepunch Rust Wiki — Creating a server (requirements)", url: "https://wiki.facepunch.com/rust/Creating-a-server" }
    ]
  },
  {
    slug: "steam-download-slow-fix",
    title: "Steam Download Slow? Diagnose Network, Disk & Region Bottlenecks",
    excerpt: "Separate internet-speed limits from content-server region, bandwidth caps, disk patching, download cache, Wi-Fi, and security-software bottlenecks.",
    category: "Steam",
    categorySlug: "steam",
    readTime: "11 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "A fast internet plan does not guarantee a constant Steam download graph. Steam may alternate between downloading and disk work while patching, a selected content region can be congested, bandwidth limits can be configured in the client, and Wi-Fi or security scanning can become the bottleneck. Measure network and disk activity together before changing settings.",
    steps: [
      { title: "Make sure you are comparing the same units", body: "Internet plans are commonly advertised in megabits per second while Steam may display megabytes per second. Eight bits equal one byte, so 100 Mbps internet has a theoretical maximum around 12.5 MB/s before normal overhead." },
      { title: "Watch the Steam download graph and disk activity together", body: "If network speed falls while disk usage rises, Steam may be unpacking, verifying, or applying a patch. Waiting for disk work to complete can be more useful than changing the router." },
      { title: "Check Steam bandwidth settings", body: "Open Steam > Settings > Downloads and make sure a bandwidth limit was not enabled accidentally. Valve exposes these controls directly in the Downloads settings." },
      { title: "Test another nearby Download Region", body: "Valve recommends changing the Download Region when a content server is slow or overloaded. Try one or two nearby regions and compare the same download rather than choosing distant regions at random." },
      { title: "Clear the Steam download cache for persistent client-state problems", body: "Steam Support documents Clear Download Cache under Settings > Downloads. Installed games are not removed, but Steam signs you out, so have your account credentials available." },
      { title: "Test wired Ethernet or a clean Wi-Fi path", body: "If possible, compare Ethernet with Wi-Fi. Congestion, weak signal, mesh backhaul, or powerline adapters can limit real throughput even when a speed test looked good at another time." },
      { title: "Check antivirus and storage performance", body: "Real-time scanning and a saturated or failing disk can slow installation/patching. Check Task Manager rather than permanently disabling security software; if security scanning is implicated, use narrow trusted exceptions only." }
    ],
    notes: ["Do not judge Steam speed only from your ISP's advertised Mbps number; compare equivalent units.", "Clearing Steam's download cache signs you out but does not uninstall your games."],
    faq: [
      { q: "Why does Steam download speed drop to zero while disk usage stays high?", a: "Steam can pause network transfer while unpacking or patching local files. The download graph and disk graph together show whether storage work is the current bottleneck." },
      { q: "Does changing Download Region always help?", a: "No. It helps when the current content server path is congested or unhealthy. Compare nearby regions and keep the one that is consistently better." },
      { q: "Why is 100 Mbps internet not 100 MB/s in Steam?", a: "Because Mbps measures megabits and MB/s measures megabytes. Divide the Mbps figure by roughly eight for the comparable theoretical MB/s value before protocol overhead." }
    ],
    sources: [
      { label: "Steam Support — Slow Downloads and Connection to Content Servers", url: "https://help.steampowered.com/en/faqs/view/5AC5-8056-E88F-F3FF" },
      { label: "Steam Support — Managing Steam Downloads & Updates", url: "https://help.steampowered.com/en/faqs/view/71AB-698D-57EB-178C" }
    ]
  },
  {
    slug: "game-server-port-forwarding-basics",
    title: "Game Server Port Forwarding Explained for Beginners",
    excerpt: "Understand LAN IPs, public IPs, NAT, TCP/UDP, host firewalls, query ports, CGNAT, and a safe test order for self-hosted game servers.",
    category: "Game Servers",
    categorySlug: "game-servers",
    readTime: "14 min read",
    updated: "August 2026",
    difficulty: "Easy",
    intro: "Port forwarding is easier when you treat it as a path: internet traffic reaches your public IP, the router maps a specific port to one private LAN address, and the server application must then be listening and allowed through the host firewall. If any layer is wrong, opening more random ports will not fix it.",
    steps: [
      { title: "Identify the server's private LAN address", body: "On the host, find its IPv4 address such as 192.168.x.x or 10.x.x.x. Create a DHCP reservation or other stable assignment so the address does not change after a reboot and break the router rule." },
      { title: "Use the game's documented ports and protocols", body: "Do not forward broad ranges by guesswork. Some servers use separate game, query, RCON, web, or companion-app ports, and TCP/UDP requirements can differ. Follow the official server documentation." },
      { title: "Confirm the application is listening locally", body: "Before testing the internet, prove the server starts cleanly and can be reached from the same machine or LAN where appropriate. A router cannot forward traffic to a server process that is not listening." },
      { title: "Create the router mapping to the correct LAN IP", body: "Map the required external port/protocol to the same internal port on the server's stable LAN address unless the server documentation explicitly calls for a different mapping." },
      { title: "Allow the server through the host firewall", body: "Router forwarding and Windows/Linux firewall rules are separate layers. Allow the server application or only the required ports rather than disabling the entire firewall." },
      { title: "Test from outside your home network", body: "Many routers handle hairpin/NAT-loopback differently, so testing your public IP from the same LAN can be misleading. Use a phone hotspot, remote friend, or external port/service test appropriate for the protocol." },
      { title: "Rule out CGNAT", body: "Compare the router's WAN/public address with the address shown by an external IP-check service. If they do not represent the same public connection and the ISP uses CGNAT, ordinary port forwarding may not make the host reachable." },
      { title: "Document working rules instead of opening more ports", body: "Once the server is reachable, keep a small table of purpose, protocol, external port, internal port, and host IP. Remove unused rules to reduce confusion and unnecessary exposure." }
    ],
    notes: ["Never put the whole server PC in a router DMZ just to avoid understanding the required ports.", "Forward only the ports the official server documentation requires.", "A public IPv6 setup follows different rules than traditional IPv4 NAT port forwarding."],
    faq: [
      { q: "Do I always need both TCP and UDP?", a: "No. Use only the protocols required by the specific server. For example, Facepunch documents Rust game/query ports as UDP and RCON/Rust+ ports separately." },
      { q: "Why can I connect locally but friends cannot?", a: "That usually means the server application is running but the public path is blocked by router forwarding, firewall rules, ISP/CGNAT, or an incorrect public address." },
      { q: "Should I use DMZ mode?", a: "Not as a normal fix. A DMZ setting can expose far more of the host than necessary. Correct, narrow port rules are easier to audit and safer." }
    ],
    sources: [
      { label: "Facepunch Rust Wiki — Creating a server (networking example)", url: "https://wiki.facepunch.com/rust/Creating-a-server" }
    ]
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
