<script>
  import { page } from "$app/stores";
</script>

<main>
  <div id="wip-wrap">
    <div id="wip-tape"></div>
    <div id="wip-tag">
      <p>
        <span id="big">{$page.status}</span>
        <br>
        {$page.error?.message}
      </p>
    </div>
  </div>
</main>