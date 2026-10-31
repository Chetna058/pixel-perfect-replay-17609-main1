<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- No user accounts: each browser gets an anonymous device id (localStorage) and all session reads/writes go through server functions in `src/lib/coach.functions.ts` filtered by that id — the `practice_sessions` table has RLS on with no client policies, so the browser never queries it directly.
- AI feedback uses structured output via `src/lib/ai.server.ts` (server-only); Communication DNA and progress stats are derived client-side from stored session feedback (`src/lib/sessions.ts`).
