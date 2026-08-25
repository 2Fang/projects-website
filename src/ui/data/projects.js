const TAGS = {
  category: ["Personal", "Client Work", "University"],
  type: ["Web", "iOS", "Game", "AI"]
};

const ALL_TAGS = [...TAGS.category, ...TAGS.type];

const projects = [
  {
    title: "Progress Tracker",
    slug: "progress-tracker",
    description:
      "A full-stack life-tracking web app built around one repeated flow — calendar to day to entry — so a new tracker plugs into a shared shell instead of becoming a new app.",
    techTags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Recharts"],
    tags: ["Personal", "Web"],
    startDate: "2026-06-29",
    lastUpdated: "2026-08-04",
    timeframe: "Ongoing · 2026",
    contentLayout: {
      type: "grid",
      columns: "1fr",
      gap: "28px",
      stackAt: "tablet",
      items: [
        {
          id: "intro",
          content: {
            type: "grid",
            columns: ["1.15fr", "1fr"],
            gap: "26px",
            stackAt: "tablet",
            items: [
              {
                id: "overview",
                content: {
                  type: "text",
                  heading: "One shell, many trackers",
                  paragraphs: [
                    "Progress Tracker is a quantified-self app for logging and reviewing personal data over time. The design bet is a single navigation pattern — calendar view, day view, entry list, entry detail — applied identically to every domain it tracks.",
                    "That makes adding a domain a matter of plugging into a shared shell rather than building another app. Two trackers are built on it today: workouts, with a shared and personal exercise library and sets carrying weight, reps, time, distance and speed; and diet, with meals, macro-carrying food items, and a reusable per-user food library with tags and serving multipliers.",
                    "The roadmap for the same shell runs to habits, sleep, reading and finance."
                  ]
                }
              },
              {
                id: "calendar-image",
                content: {
                  type: "image",
                  src: "/project-images/progress-tracker/calendar-view.png",
                  alt: "Workout tracker calendar for August 2026, each day showing the session logged against it",
                  caption: "The calendar entry point, shared by every tracker",
                  aspectRatio: "1800 / 1072"
                }
              }
            ]
          }
        },
        {
          id: "progress-row",
          content: {
            type: "grid",
            columns: ["1fr", "1.35fr"],
            gap: "26px",
            stackAt: "tablet",
            items: [
              {
                id: "concurrency",
                content: {
                  type: "text",
                  heading: "Autosave that survives a race",
                  paragraphs: [
                    "Editing a workout fires overlapping saves. Atomic JSONB updates run as Postgres RPCs, paired with a client-side per-key FIFO queue so an early request finishing late can never overwrite newer state.",
                    "The progress page reads the other way: every logged set rolled up into trends you can scope by week, month, year or a custom range, and cut by single exercise, muscle group or everything at once."
                  ]
                }
              },
              {
                id: "graph-image",
                content: {
                  type: "image",
                  src: "/project-images/progress-tracker/progress-graph.png",
                  alt: "Progress page charting top-set trends for dozens of exercises across a month, with a legend grouped by muscle group",
                  caption: "Top-set trends across every exercise, grouped by muscle group",
                  aspectRatio: "1800 / 1050"
                }
              }
            ]
          }
        },
        {
          id: "bottom-row",
          content: {
            type: "grid",
            columns: ["1fr", "1fr", "1fr"],
            gap: "22px",
            stackAt: "tablet",
            items: [
              {
                id: "auth",
                content: {
                  type: "text",
                  heading: "Auth on my own terms",
                  paragraphs: [
                    "Rather than take the hosted email-link flow, I built app-managed six-digit codes for sign-up verification and password reset, with owner, admin and user roles and granular delete permissions enforced server-side."
                  ]
                }
              },
              {
                id: "domain",
                content: {
                  type: "text",
                  heading: "Domain logic kept pure",
                  paragraphs: [
                    "Set tracking derives whichever of time, distance or speed is missing, with divide-by-zero guards. That logic is framework-free and fully unit tested — part of a suite spanning 30+ test files across domain code, stores and hooks."
                  ]
                }
              },
              {
                id: "next",
                content: {
                  type: "text",
                  heading: "Next",
                  paragraphs: [
                    "AI-assisted macro estimation is scoped with its entry point already in the UI, and the shared shell is ready for the next tracker on the roadmap."
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    links: [
      {
        label: "Live site",
        href: "https://2fang-tracker.vercel.app/trackers/workout"
      }
    ]
  },
  {
    title: "Mental Wellbeing Platform",
    slug: "mental-wellbeing-platform",
    description:
      "Client work under NDA: a mental wellbeing content platform with a membership model and a companion admin portal, architected and delivered end to end.",
    techTags: ["React", "TypeScript", "Vite", "Supabase", "Stripe", "Cloudflare Workers"],
    tags: ["Client Work", "Web"],
    startDate: "2026-08-05",
    lastUpdated: "2026-08-19",
    timeframe: "Ongoing client engagement · 2026",
    contentLayout: {
      type: "grid",
      columns: "1fr",
      gap: "26px",
      stackAt: "tablet",
      items: [
        {
          id: "overview",
          content: {
            type: "text",
            heading: "Overview",
            paragraphs: [
              "A commissioned platform giving users a curated library of guided video and audio wellbeing content, with free and members-only tiers, favouriting, accounts, and a paid membership — plus a separate internal admin portal for managing content access and monitoring traffic.",
              "Details are confidential under NDA, so this write-up covers the architecture and the decisions rather than the product.",
              "I owned the architecture and product direction and drove the build through a spec-driven pipeline: a 17-epic backlog with acceptance criteria and a written project constitution setting stack constraints, SOLID/DRY/YAGNI rules and an accessibility baseline, with each epic taken through specify, plan, tasks and implement."
            ]
          }
        },
        {
          id: "detail-row",
          content: {
            type: "grid",
            columns: ["1fr", "1fr", "1fr"],
            gap: "22px",
            stackAt: "tablet",
            items: [
              {
                id: "paywall",
                content: {
                  type: "text",
                  heading: "A paywall that actually holds",
                  paragraphs: [
                    "Membership status comes from billing webhooks as the single source of truth, and the backend withholds the media URL itself from non-members. Hiding a play button in the UI is not a paywall; not returning the asset is."
                  ]
                }
              },
              {
                id: "rbac",
                content: {
                  type: "text",
                  heading: "Server-side admin RBAC",
                  paragraphs: [
                    "Four admin tiers — pending, maintainer, admin, owner — enforced inside every admin function rather than at the routing layer, so a hand-crafted request meets the same check the UI does."
                  ]
                }
              },
              {
                id: "analytics",
                content: {
                  type: "text",
                  heading: "Analytics with restraint",
                  paragraphs: [
                    "No third-party analytics SDK. A minimal anonymous session and page-view model, chosen deliberately: fine-grained tracking is the wrong instinct for a wellbeing audience."
                  ]
                }
              }
            ]
          }
        },
        {
          id: "architecture",
          content: {
            type: "grid",
            columns: ["1.1fr", "1fr"],
            gap: "24px",
            stackAt: "tablet",
            items: [
              {
                id: "scoped-backend",
                content: {
                  type: "text",
                  heading: "Scoping the backend deliberately",
                  paragraphs: [
                    "The project constitution originally ruled out a backend entirely. Once accounts and membership made one unavoidable, I amended it formally — documented rationale, version bump — and scoped the backend narrowly to accounts, membership, admin and analytics. Content browsing and favourites stayed client-only on purpose.",
                    "One repo ships two independently deployed apps, the public site and the admin portal, each its own worker, sharing only the backend."
                  ]
                }
              },
              {
                id: "cross-platform",
                content: {
                  type: "text",
                  heading: "Built for native, not wrapped",
                  paragraphs: [
                    "Native iOS and Android are designed to share contracts — a resource shape, a favourites interface — rather than code. React Native was considered and rejected up front: the genuinely shared logic was thin, and a third framework was not worth carrying for it.",
                    "The native apps and a conversational feature are specified and scoped as the next phase, sequenced behind a stable account and membership model."
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    links: []
  },
  {
    title: "Khet Board Game Platform",
    slug: "khet-board-game-platform",
    description:
      "A digital build of the laser-deflection board game Khet, implemented twice — a native iOS app and a faithful TypeScript port — pinned together by a cross-language parity test.",
    techTags: ["Swift", "SwiftUI", "React", "TypeScript", "Vitest"],
    tags: ["Personal", "Web", "iOS", "Game"],
    startDate: "2025-01-01",
    lastUpdated: "2025-12-31",
    timeframe: "2025",
    contentLayout: {
      type: "grid",
      columns: "1fr",
      gap: "28px",
      stackAt: "tablet",
      items: [
        {
          id: "intro",
          content: {
            type: "grid",
            columns: ["1.2fr", "1fr"],
            gap: "26px",
            stackAt: "tablet",
            items: [
              {
                id: "web-image",
                content: {
                  type: "image",
                  src: "/project-images/khet-board-game-platform/web-laser-overlay.png",
                  alt: "The web client's Khet board with the laser path traced across it in red, passing through mirrored pieces",
                  caption: "The laser resolving across the board, drawn as an SVG overlay",
                  aspectRatio: "1400 / 1100"
                }
              },
              {
                id: "overview",
                content: {
                  type: "text",
                  heading: "Built twice, on purpose",
                  paragraphs: [
                    "Khet is a strategy game where players rotate mirrored pieces and fire a laser down the board, winning when the beam destroys the opponent's pharaoh. I built it as a native iOS app first, then again for the web.",
                    "The Swift rules engine is the canonical implementation. The TypeScript engine is a hand port of it, function for function — not a rewrite from the rules, a port from the reference.",
                    "Porting also became a chance to restructure a known bug class: the web version recomputes destruction live at confirm time instead of caching it earlier, which is where the iOS build had originally gone wrong."
                  ]
                }
              }
            ]
          }
        },
        {
          id: "detail",
          content: {
            type: "grid",
            columns: ["0.62fr", "1fr", "1fr"],
            gap: "24px",
            stackAt: "tablet",
            items: [
              {
                id: "ios-image",
                content: {
                  type: "image",
                  src: "/project-images/khet-board-game-platform/ios-local-play.png",
                  alt: "The iOS app mid-game, showing whose turn it is above the board and the same laser path traced across it",
                  caption: "iOS: the same resolution, the same rules, a separate engine",
                  aspectRatio: "760 / 1614"
                }
              },
              {
                id: "parity",
                content: {
                  type: "text",
                  heading: "Pinning two languages together",
                  paragraphs: [
                    "Two implementations drift. A parity test replays an identical move script through both engines and asserts matching board state and laser paths, with the Swift output captured once and committed as a fixture.",
                    "It is a regression pin against drift rather than a live comparison — and it is precise about being that. The web suite runs 206 tests across 14 files, all passing."
                  ]
                }
              },
              {
                id: "hardening",
                content: {
                  type: "text",
                  heading: "Hardened where it counts",
                  paragraphs: [
                    "Local two-player play runs end to end on both clients. Three critical bugs are fixed and covered by real tests: stale destroyed-piece state surviving a changed move, a second emitter rotation soft-locking the turn, and negative rotation values breaking direction maths.",
                    "The rules engine and board model were lifted out of the view model behind a bounds-checked API, and the iOS test file went from an untouched template to real coverage."
                  ]
                }
              }
            ]
          }
        },
        {
          id: "next",
          content: {
            type: "text",
            heading: "Next: online play",
            paragraphs: [
              "Online multiplayer is fully designed and scoped as the next phase — service scaffold, schema, auth, a real-time layer, rooms and matchmaking, ELO and match history — with both clients' online work deliberately mirrored against one contract so neither drifts from the other.",
              "The local game is built and hardened; the networked half is specified and waiting on the backend that serves it. Extracting the TypeScript engine into a shared rules package, consumed by the web client and that backend, is scoped alongside it."
            ]
          }
        }
      ]
    },
    links: []
  },
  {
    title: "Brawlytics",
    slug: "brawlytics",
    description:
      "An iOS stats app backed by a self-built data pipeline that crawls match data by snowball sampling, then surfaces per-map, per-character win and pick rates filtered by skill bracket.",
    techTags: ["SwiftUI", "Swift", "Python", "Flask", "SQLite"],
    tags: ["Personal", "iOS"],
    startDate: "2025-02-14",
    lastUpdated: "2025-02-21",
    timeframe: "Built February 2025",
    contentLayout: {
      type: "grid",
      columns: "1fr",
      gap: "28px",
      stackAt: "tablet",
      items: [
        {
          id: "intro",
          content: {
            type: "grid",
            columns: ["1.15fr", "1fr"],
            gap: "26px",
            stackAt: "tablet",
            items: [
              {
                id: "overview",
                content: {
                  type: "text",
                  heading: "No player directory? Crawl the social graph",
                  paragraphs: [
                    "Brawlytics answers a question the official game API will not: on this map, which characters actually win? Getting there needed data the API does not hand out in bulk.",
                    "There is no way to enumerate players, so the pipeline snowball-samples instead. It seeds from three known player tags, harvests every teammate and opponent tag out of each battle log into a growing frontier, and walks outward through the social graph — reaching 380 players and roughly 4,200 unique matches across 88 characters and 49 maps in a week of collection.",
                    "The insight I am fondest of is smaller. The API reports only whether the queried player won, so every record is egocentric. The pipeline locates that player inside the raw teams array and works backwards to find which team actually won, storing outcomes in absolute form. Normalise a player-relative source before it reaches the database, not after."
                  ]
                }
              },
              {
                id: "screens",
                content: {
                  type: "grid",
                  columns: ["1fr", "1fr"],
                  gap: "16px",
                  stackAt: "mobile",
                  items: [
                    {
                      id: "maps-image",
                      content: {
                        type: "image",
                        src: "/project-images/brawlytics/maps-list.png",
                        alt: "Grid of selectable map thumbnails in the iOS app, each labelled with its map name",
                        caption: "Pick a map…",
                        aspectRatio: "780 / 1644"
                      }
                    },
                    {
                      id: "stats-image",
                      content: {
                        type: "image",
                        src: "/project-images/brawlytics/map-stats-table.png",
                        alt: "Per-character win rate, pick rate and star-player rate for one map, with the trophy-range filter open",
                        caption: "…and get its numbers, filtered and sorted",
                        aspectRatio: "786 / 1658"
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          id: "bottom",
          content: {
            type: "grid",
            columns: ["1fr", "1fr", "1fr"],
            gap: "22px",
            stackAt: "tablet",
            items: [
              {
                id: "schema",
                content: {
                  type: "text",
                  heading: "A star schema by hand",
                  paragraphs: [
                    "Six tables, no ORM. The stats table is a pre-aggregated rollup keyed by character, mode, map, ranked flag and skill bucket, so the phone reads finished numbers instead of aggregating match rows on demand.",
                    "Overlapping crawls see the same match repeatedly, so records dedupe on timestamp, mode and map before insert."
                  ]
                }
              },
              {
                id: "buckets",
                content: {
                  type: "text",
                  heading: "Comparing like with like",
                  paragraphs: [
                    "A character that dominates at low trophies can be unplayable at the top. Ladder matches bucket to the nearest 100 trophies, ranked matches map to their rank bands, and a quality floor drops the noisiest matches from the sample."
                  ]
                }
              },
              {
                id: "ios",
                content: {
                  type: "text",
                  heading: "The client side",
                  paragraphs: [
                    "SwiftUI and MVVM with typed enum-based navigation behind a single coordinator, over a protocol-oriented service layer returning Result values — so the whole UI could be driven from mocks without touching the network.",
                    "Tap any column to sort, tap again to flip direction; the ranked toggle swaps the filter picker's contents — rank names or trophy brackets — rather than stacking a second picker beside it."
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    links: []
  },
  {
    title: "iPromise",
    slug: "ipromise",
    description:
      "A messaging-based AI habit coach that interrogates why you want a goal before it lets you set one, then turns the answer into structured, scheduled habits.",
    techTags: ["Python", "Flask", "OpenAI API", "Twilio", "WebSockets"],
    tags: ["Personal", "AI"],
    startDate: "2024-05-01",
    lastUpdated: "2024-12-31",
    timeframe: "2024",
    contentLayout: {
      type: "grid",
      columns: ["1.4fr", "1fr"],
      gap: "28px",
      stackAt: "tablet",
      items: [
        {
          id: "overview",
          content: {
            type: "text",
            heading: "Start with why",
            paragraphs: [
              "Habit apps skip the part that decides whether a habit survives: motivation. iPromise refuses to accept \"I want to get fitter\" and pushes back with follow-up why questions until it has the underlying driver.",
              "From there it derives S.M.A.R.T. goals, applies protocols that turn goals into habits, and breaks those into individual scheduled activities. That five-level ontology — mission, goal, protocol, habit, activity — is the core of the project, and it lives in prose: a hand-authored system prompt of roughly 8,300 characters acting as a conversation contract.",
              "It is deliberately confrontational. Skip a session and the coach is instructed to express disappointment, tie the lapse back to the mission you stated, and keep count. It ran over a messaging app people already open rather than asking for another install, with a parallel phone agent that let the coach literally call you.",
              "I would build the memory differently now, and that is the interesting part. Persistence is whole-transcript replay to flat JSON — one file per conversation, rehydrated at startup, the full array resent every turn. It is the simplest thing that works and the first trade-off I would revisit: context grows unbounded, so cost and latency climb with conversation length. Summarisation plus a structured user record is the fix."
            ]
          }
        },
        {
          id: "side",
          content: {
            type: "grid",
            columns: "1fr",
            rows: ["auto", "auto"],
            gap: "20px",
            items: [
              {
                id: "voice",
                content: {
                  type: "text",
                  heading: "The voice path",
                  paragraphs: [
                    "A full-duplex agent: telephony media stream in, mulaw audio to streaming speech-to-text, model response back out as spoken reply — with end-of-turn detection written by hand, because knowing when someone has stopped talking is most of the problem."
                  ]
                }
              },
              {
                id: "next",
                content: {
                  type: "text",
                  heading: "Designed and scoped",
                  paragraphs: [
                    "The prompt specifies a check-in schedule and the accountability loop that consumes it. Shipping that means a scheduler and parsed structured state behind it — the next phase, and the piece that turns a coach you talk to into one that comes back to find you."
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    links: []
  },
  {
    title: "AI Battle Arena",
    slug: "ai-battle-arena",
    description:
      "A Unity arena game whose AI opponents train themselves through neuroevolution — evolving their own network topology, not just their weights, across 100 parallel simulations.",
    techTags: ["Unity", "C#", "NEAT", "Machine Learning"],
    tags: ["University", "Game", "AI"],
    startDate: "2023-01-01",
    lastUpdated: "2023-12-31",
    timeframe: "University project · 2023",
    contentLayout: {
      type: "grid",
      columns: "1fr",
      gap: "26px",
      stackAt: "tablet",
      items: [
        {
          id: "hero-image",
          content: {
            type: "image",
            src: "/project-images/ai-battle-arena/training-run.png",
            alt: "A training run in progress, with a large arena full of AI agents fighting simultaneously and a match timer counting down",
            caption: "Training: 100 simulations running at once, scored in the time a single match would take",
            aspectRatio: "1800 / 845"
          }
        },
        {
          id: "main",
          content: {
            type: "grid",
            columns: ["1.2fr", "1fr"],
            gap: "26px",
            stackAt: "tablet",
            items: [
              {
                id: "overview",
                content: {
                  type: "text",
                  heading: "Opponents that grow their own brains",
                  paragraphs: [
                    "A multiplayer arena game in Unity where the AI opponents are not scripted. They are evolved — trained by a NEAT system that improves them generation over generation into adaptive combat behaviour.",
                    "The part that makes this more than a genetic algorithm is topology evolution. Most evolutionary approaches fix the network shape and tune the weights inside it. Here a generation can also add a node anywhere in the hidden layers and add an edge anywhere between them, so new hidden structure forms mid-network as evolution proceeds.",
                    "Run it long enough and genomes stop being variations on one architecture. Each ends up with a genuinely distinct network structure, arrived at rather than designed."
                  ]
                }
              },
              {
                id: "training",
                content: {
                  type: "text",
                  heading: "100 arenas at once",
                  paragraphs: [
                    "Neuroevolution is only as fast as the evaluations feeding it, and evaluation means playing matches. Training runs 100 simulations in parallel so a generation is scored in the time one match would otherwise take.",
                    "That throughput is what makes structural mutation viable: topology search needs far more generations than weight tuning to pay off."
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    links: [
      {
        label: "Demo video",
        href: "https://youtu.be/oMHs6KV7uhc"
      }
    ]
  }
];

export default projects;
export { ALL_TAGS, TAGS };
