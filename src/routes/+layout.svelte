<script>
  import SplashScreen from "$lib/SplashScreen.svelte";
  import Footer from "./Footer.svelte";
  import "../app.css";
  import posthog from "posthog-js";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  onMount(() => {
    if (browser) {
      posthog.init("phc_UeT4G90ZLWrCynPreyJgQTAtNTNCfOVBNiL1RK9CEcV", {
        api_host: "https://us.i.posthog.com",
        person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
      });
    }
    return;
  });
</script>

<SplashScreen />
<slot />

<Footer />
