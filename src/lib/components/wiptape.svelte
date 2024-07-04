<script>
  let big;
  let msg;

  export { big, msg };
</script>

<div id="wip-wrap">
  <div id="wip-tape"></div>
  <div id="wip-tag">
    <p>
      <span id="big">{big}</span>
      {#if msg}
        <br />
        {msg}
      {/if}
    </p>
  </div>
</div>

<style>
  #wip-wrap {
    width: 100dvw;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    #wip-tape {
      height: 48px;
      width: 100vw;

      position: absolute;
      z-index: 0;

      background-image: repeating-linear-gradient(
        -45deg,
        yellow,
        yellow 30px,
        black 30px,
        black 50px
      );

      @media screen and (max-width: 600px) {
        background-image: repeating-linear-gradient(
          -45deg,
          yellow,
          yellow 10px,
          black 10px,
          black 20px
        );
      }
      
      @media screen and (max-width: 360px) {
        height: 72px;
      }
    }

    #wip-tag {
      height: 48px;

      position: relative;
      z-index: 3;

      display: flex;
      align-items: center;
      justify-content: center;

      line-height: 1.25em;

      padding: 0px 32px;

      background-color: yellow;
      color: black;

      p > span#big {
        font-size: 1.75em;
        font-weight: bolder;
        font-variant: small-caps;
      }

      @media screen and (max-width: 360px) {
        height: 72px;
        width: 70vw;
        min-width: 140px;
        
        padding: 0px 8px;
      }
    }
  }
</style>
