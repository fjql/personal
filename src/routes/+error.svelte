<script>
  import { page } from "$app/stores";
  import WipTape from "$lib/components/wiptape.svelte"
</script>

<main>
  <WipTape big={$page.status} msg={$page.error?.message} />
</main>