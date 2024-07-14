<script>
  import { page } from "$app/stores";
  import WipTape from "$lib/components/wiptape.svelte"
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<main>
  <WipTape big={$page.status} msg={$page.error?.message} />
</main>