<template>
  <div>
    <strong>Generated Password:</strong>
    <p>{{ generatedPassword }}</p>
    <button
      class="copy-btn"
      @click="copyPassword"
    >Copy!</button>
  </div>
</template>

<script setup>

  const props = defineProps(["generatedPassword"]);

  let copyPassword = () => {
    console.log("Don't have permissions to write on clipboard!");
  };

  if (navigator.permissions?.query) {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        alert("Write access granted!");

        let text = props.generatedPassword;

        copyPassword = async () => {
          try {
            await navigator.clipboard.writeText(text);
            console.log("Content copied to clipboard");
          } catch (error) {
            console.error("Failed to copy: ", err);
          }
        };
      }
    }).catch((error) => {
      console.log(error);
    });
  }
</script>

<style lang="scss">
$light-text-color: white;
$dark-bg: #222;
$dark-btn-border: #555;
$btn-border-radius: 1.5rem;
$btn-padding: .5em 1.5em;
$btn-margin: 1rem auto;

p {
  text-align: center;
  color: $light-text-color;
  word-break: break-all;
}

.copy-btn {
  background: $dark-bg;
  border: solid 1px $dark-btn-border;
  border-radius: $btn-border-radius;
  font: inherit;
  padding: $btn-padding;
  margin-bottom: $btn-margin;
  margin-left: auto;
  margin-right: auto;
  display: block;

  &:hover {
    background: darken($dark-bg, 10%);
  }

  &:active {
    background: lighten($dark-bg, 10%);
  }
}
</style>
