import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createSupabaseServerSide = async () => {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        // getAll(name: string) {
        //   return cookieStore.get(name)?.value;
        // },
        // setAll(name: string, value: string, options: CookieOptions) {
        //   cookieStore.set({ name, value, ...options });
        // },
        // remove(name: string, options: CookieOptions) {
        //   cookieStore.set({ name, value: "", ...options });
        // },
        getAll: () => cookieStore.getAll(),
        setAll: () => {}, // ignore for now
      },
    }
  );
};

// getAll: () => cookieStore.getAll(),
//         setAll: () => {}, // ignore for now
